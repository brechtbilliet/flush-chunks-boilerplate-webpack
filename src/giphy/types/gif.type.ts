export type Gif = {
    id: string;
    images: {
        original: {
            url: string;
            height: string;
            width: string;
        },
        downsized: {
            url: string;
            height: string;
            width: string;
        }
    }
};
