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

const {Camera, Filesystem, Storage} = Plugins;


@Injectable()
export class CameraService {

    public photos: Photo[] = [];
    private PHOTO_STORAGE = 'photos';

    constructor(public platform: Platform,
                private storage: AngularFireStorage) {
    }

    public pickImage(sourceType) {
        Camera.getPhoto({
            resultType: CameraResultType.DataUrl,
            allowEditing: true,
            saveToGallery: true,
            correctOrientation: true,
            quality: 100,
            source: CameraSource.Camera
        }).then((imageData: CameraPhoto) => {
            this.savePicture(imageData).then(savedImageFile => {
                this.photos.unshift(savedImageFile);
            });

            // Cache all photo data for future retrieval
            Storage.set({
                key: this.PHOTO_STORAGE,
                value: this.platform.is('hybrid') ? JSON.stringify(this.photos) : JSON.stringify(this.photos.map(p => {
                    // Don't save the base64 representation of the photo data,
                    // since it's already saved on the Filesystem
                    const photoCopy = {...p};
                    delete photoCopy.base64;
                    return photoCopy;
                }))
            });
        }, (err) => {
            // Handle error
        });
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

    // Save picture to file on device
    private async savePicture(cameraPhoto: CameraPhoto) {
        // Convert photo to base64 format, required by Filesystem API to save
        const base64Data = await this.readAsBase64(cameraPhoto);


        const fileName = new Date().getTime() + '.jpeg';
        // const savedFile = await Filesystem.writeFile({
        //     path: fileName,
        //     data: base64Data,
        //     directory: FilesystemDirectory.Data
        // });

        if (this.platform.is('hybrid')) {
            // Display the new image by rewriting the 'file://' path to HTTP
            // Details: https://ionicframework.com/docs/building/webview#file-protocol
            return {
                // filepath: savedFile.uri,
                // webviewPath: Capacitor.convertFileSrc(savedFile.uri),
                filepath: cameraPhoto.path,
                webviewPath: cameraPhoto.webPath,
            };
        } else {
            // Use webPath to display the new image instead of base64 since it's
            // already loaded into memory
            return {
                filepath: fileName,
                webviewPath: cameraPhoto.webPath
            };
        }
    }

    private async readAsBase64(cameraPhoto: CameraPhoto): Promise<string> {
        if (this.platform.is('hybrid')) {
            // // Read the file into base64 format
            // const file = await Filesystem.readFile({
            //     path: cameraPhoto.path
            // });
            // return file.data;
            return cameraPhoto.base64String;
        } else {
            const response = await fetch(cameraPhoto.webPath!);
            const blob = await response.blob();
            return await this.convertBlobToBase64(blob) as string;
        }
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

    private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(blob);
    });


    uploadFileAndGetMetadata(mediaFolderPath: string, fileToUpload: File): FilesUploadMetadata {
        // const filePath = `${mediaFolderPath}/${new Date().getTime()}_${fileToUpload.name}`;

        const filePath = `${mediaFolderPath}/${new Date().getTime()}_${fileToUpload.name}`;
        const uploadTask: AngularFireUploadTask = this.storage.upload(filePath, fileToUpload);


        return {
            downloadUrl$: undefined,
            uploadProgress$: uploadTask.percentageChanges()
        };
    }

}

export interface FilesUploadMetadata {
    uploadProgress$: Observable<number>;
    downloadUrl$: Observable<string>;
}



