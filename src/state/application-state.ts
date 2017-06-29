import { Gif } from '../giphy/types/gif.type';

export type ApplicationState = {
    dogs: Array<Gif>;
    cats: Array<Gif>;
}
