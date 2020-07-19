interface NewsIten {

    // USER
    userID: string;
    userImageUrl: string;
    userName: string;


    // FISCH
    fischArt: string;
    fischGroese?: number;

    // INFORMATION
    date: string;
    ort?: string;
    likes?: Map<string, number>;
    imageComment?: string;

    // Other Users Commentss
    // kommentare?: string[];

    // IMAGE FISH
    fishImageUrl: string;
}
