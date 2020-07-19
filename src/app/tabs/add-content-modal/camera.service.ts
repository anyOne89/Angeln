import {Injectable} from '@angular/core';
import {
    CameraOptions,
    CameraPhoto,
    CameraResultType,
    CameraSource,
    Capacitor,
    FilesystemDirectory,
    Plugins
} from '@capacitor/core';
import {ActionSheetController, Platform} from '@ionic/angular';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {UserService} from '../../core/services/user.service';

const {Camera, Filesystem, Storage} = Plugins;


@Injectable()
export class CameraService {

    public photos: Photo[] = [];
    private PHOTO_STORAGE = 'photos';


    task: AngularFireUploadTask;
    progress: Observable<number | undefined>;  // Observable 0 to 100

    constructor(public platform: Platform,
                private storage: AngularFireStorage,
                private userService: UserService) {
    }

    public pickImage(sourceType) {
        Camera.getPhoto({
            resultType: CameraResultType.Uri,
            saveToGallery: true,
            quality: 50,
            source: sourceType,
        }).then(async (imageData: CameraPhoto) => {

            const savedImageFile = await this.savePicture(imageData);
            this.photos.unshift(savedImageFile);

            Storage.set({
                key: this.PHOTO_STORAGE,
                value: this.platform.is('hybrid') ? JSON.stringify(this.photos) : JSON.stringify(this.photos.map(p => {
                    // Don't save the base64 representation of the photo data, since it's already saved on the Filesystem
                    const photoCopy = {...p};
                    delete photoCopy.base64;
                    return photoCopy;
                }))
            });
        }, (err) => {
        });
    }

    // Save picture to file on device
    private async savePicture(cameraPhoto: CameraPhoto) {
        if (this.platform.is('hybrid')) {
            return {
                filepath: cameraPhoto.path,
                webviewPath: cameraPhoto.webPath,
            };
        }
    }

    // Read camera photo into base64 format based on the platform the app is running on
    private async readAsBase64(pathp: string) {
        if (this.platform.is('hybrid')) {
            // Read the file into base64 format
            const file = await Filesystem.readFile({
                path: pathp
            });
            return 'data:image/jpg;base64,' + file.data;
        }
    }

    public async commitCatch() {
        const filePath = `user/${this.userService.getUserEmail()}/catchfish/${new Date().getTime()}.jpg`;

        const base64 = await this.readAsBase64(this.photos[0].filepath);

        this.task = this.storage.ref(filePath).putString(base64, 'data_url');
        this.progress = this.task.percentageChanges();

        return this.task;
    }

    public async loadSaved() {
        // Retrieve cached photo array data
        const photos = await Storage.get({key: this.PHOTO_STORAGE});
        this.photos = JSON.parse(photos.value) || [];

        // If running on the web... (hybrid 	a device running Capacitor or Cordova)
        // https://ionicframework.com/docs/angular/platforms
        if (!this.platform.is('hybrid')) {
            // Display the photo by reading into base64 format
            for (const photo of this.photos) {
                // Read each saved photo's data from the Filesystem
                const readFile = await Filesystem.readFile({
                    path: photo.filepath,
                    directory: FilesystemDirectory.Data
                });

                // Web platform only: Save the photo into the base64 field
                photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
            }
        }
        return this.photos;
    }

    // Delete picture by removing it from reference data and the filesystem
    public async deletePicture(photo: Photo, position: number) {
        // Remove this photo from the Photos reference data array
        this.photos.splice(position, 1);

        // Update photos array cache by overwriting the existing photo array
        await Storage.set({
            key: this.PHOTO_STORAGE,
            value: JSON.stringify(this.photos)
        });

        // delete photo file from filesystem
        const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
        await Filesystem.deleteFile({
            path: filename,
            directory: FilesystemDirectory.Data
        });
    }

    // uploadFileAndGetMetadata(mediaFolderPath: string, fileToUpload: File): FilesUploadMetadata {
    //     // const filePath = `${mediaFolderPath}/${new Date().getTime()}_${fileToUpload.name}`;
    //
    //     const filePath = `${mediaFolderPath}/${new Date().getTime()}_${fileToUpload.name}`;
    //     const uploadTask: AngularFireUploadTask = this.storage.upload(filePath, fileToUpload);
    //
    //
    //     return {
    //         downloadUrl$: undefined,
    //         uploadProgress$: uploadTask.percentageChanges()
    //     };
    // }

}

// export interface FilesUploadMetadata {
//     uploadProgress$: Observable<number>;
//     downloadUrl$: Observable<string>;
// }



