import { catReducer } from './reducers/cat.reducer';
import { dogReducer } from './reducers/dog.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    cats: catReducer,
    dogs: dogReducer
} as any);
