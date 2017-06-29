import { GiphyService } from './giphy.service';
import { ApiService } from '../../common/services/api.service';
import { Subject } from 'rxjs/Subject';
describe('on test', () => {
    let apiServiceMock: ApiService;
    beforeEach(() => {
        apiServiceMock = <any> {get: jest.fn()};
    });
    it('should test', () => {
        const service = new GiphyService(apiServiceMock);
        const get$ = new Subject();
        (<jest.Mock<ApiService>> apiServiceMock.get).mockReturnValue(get$);
        const res = service.getAll('foo');
        expect(apiServiceMock.get).toHaveBeenCalled();
        expect(res).toBe(get$);
    });
});
