import { Gif } from '../../giphy/types/gif.type';
import { Actions, actionTypes } from '../actions';
export function dogReducer(state: Array<Gif> = [], action: Actions): Array<Gif> {
    switch (action.type) {
        case actionTypes.SET_DOGS:
            return action.payload.dogs;
        default:
            return state;
    }
}