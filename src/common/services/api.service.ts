import { Observable } from 'rxjs/Observable';
import { injectable } from 'inversify';
import { API_BASE } from '../../constants';

@injectable()
export class ApiService {

    constructor() {}

    get(url: string): Observable<any> {
                return Observable.ajax({
                    url,
                    method: 'GET',
                    responseType: 'json'
                })
    }
}
