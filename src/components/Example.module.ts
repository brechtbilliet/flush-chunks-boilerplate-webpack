import { Module } from '../core/module-decorator';
import Example from './Example';

@Module({
    providers: [],
    imports: [],
    bootstrap: Example
})
export default class DealRoomModule {
}
