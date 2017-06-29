import { ApiService } from './services/api.service';
import { Module } from '../core/module-decorator';
import { ReactModule } from '../core/react-module';

@Module({
    providers: [ApiService]
})
export default class CommonModule implements ReactModule {
}
