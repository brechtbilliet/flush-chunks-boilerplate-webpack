import { GiphySandbox } from './giphy.sandbox';
import { GiphyService } from './services/giphy.service';
import { GiphyContainer } from './containers/giphy.container';
import CommonModule from '../common/common.module';
import { Module } from '../core/module-decorator';
import { ReactModule } from '../core/react-module';

@Module({
    providers: [GiphyService, GiphySandbox],
    imports: [CommonModule] as ReactModule[],
    bootstrap: GiphyContainer
})
export default class GiphyModule {
}
