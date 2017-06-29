import { GiphyService } from './services/giphy.service';
import { injectable } from 'inversify';
import { Store } from '../core/store';
import { ApplicationState } from '../state/application-state';
import { SetCatsAction, SetDogsAction } from '../state/actions';
@injectable()
export class GiphySandbox {
    cats$ = this.store.select(state => state.cats);
    dogs$ = this.store.select(state => state.dogs);

    constructor(private giphyService: GiphyService, private store: Store<ApplicationState>) {
    }


    fetchDogs(): void {
        this.giphyService.getAll('dogs').subscribe(res => this.store.dispatch(new SetDogsAction(res.data)));
    }

    fetchCats(): void {
        this.giphyService.getAll('cats').subscribe(res => this.store.dispatch(new SetCatsAction(res.data)));
    }
}
