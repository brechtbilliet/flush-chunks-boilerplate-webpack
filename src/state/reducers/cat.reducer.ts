import { Gif } from '../../giphy/types/gif.type';
import { Actions, actionTypes } from '../actions';
export function catReducer(state: Array<Gif> = [], action: Actions): Array<Gif> {
    switch (action.type) {
        case actionTypes.SET_CATS:
            return action.payload.cats;
        default:
            return state;
    }
}
