import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../common/services/api.service';
import { injectable } from 'inversify';
@injectable()
export class GiphyService {
    constructor(private apiService: ApiService) {
    }

    getAll(term: string): Observable<any> {
        return this.apiService.get(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`);
    }
}
