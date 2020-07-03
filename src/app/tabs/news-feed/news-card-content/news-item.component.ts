
interface NewsIten{

    name:string;
    ort: string;
    date: string;
    message?: string;
    kommentare?: string[];
    likes?: Map<string, number>;

    imageUrl: string;
    fischArt: string;
    fischGroese: number;



}