import { Actions } from '../state/actions';
import { rootReducer } from '../state/root.reducer';
import { createStore, Store as ReduxStore } from 'redux';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { injectable } from 'inversify';

const _window: any = global || window;

@injectable()
export class Store<T> {
    private store: ReduxStore<any>;

    constructor() {
        this.store = createStore(
            rootReducer,
            // todo: if dev mode
            _window && _window['__REDUX_DEVTOOLS_EXTENSION__'] && _window['__REDUX_DEVTOOLS_EXTENSION__']()
        );
    }

    dispatch(action: Actions): void {
        this.store.dispatch({...action}); // redux only supports plain objects
    }

    select<T>(fn: Function): Observable<T> {
        return Observable.create((observer: Observer<T>) => {
            observer.next(fn(this.store.getState()));
            const unsubscribe = this.store.subscribe(() => {
                observer.next(fn(this.store.getState()));
            });

            return unsubscribe;
        }).distinctUntilChanged();
    }

    subscribe(): Observable<any> {
        return Observable.create((observer: Observer<T>) => {
            const unsubscribe = this.store.subscribe(() => {
                observer.next(this.store.getState());
            });

            return unsubscribe;
        }).distinctUntilChanged();
    }
}
