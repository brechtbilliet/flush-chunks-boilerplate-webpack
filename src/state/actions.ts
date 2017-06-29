import { Gif } from '../giphy/types/gif.type';
import { Action } from 'redux';
const typeCache: { [label: string]: boolean } = {};
function type<T>(label: T | ''): T {
    // this actually checks whether your action type
    // name is unique!
    if (typeCache[label as string]) {
        throw new Error(`Action type "${label}" is not unqiue"`);
    }

    typeCache[label as string] = true;

    return label as T;
}

export const actionTypes = {
    SET_DOGS: type<'SET_DOGS'>('SET_DOGS'),
    SET_CATS: type<'SET_CATS'>('SET_CATS')
};

export class SetDogsAction {
    type = actionTypes.SET_DOGS;
    payload: { dogs: Array<Gif> };

    constructor(dogs: Array<Gif>) {
        this.payload = {dogs};
    }
}

export class SetCatsAction {
    type = actionTypes.SET_CATS;
    payload: { cats: Array<Gif> };

    constructor(cats: Array<Gif>) {
        this.payload = {cats};
    }
}

export type Actions =
    SetDogsAction |
    SetCatsAction;
