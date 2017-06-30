import { Module } from '../core/module-decorator';
import ExampleContainer from './Example.container';
import BootstrapContainer from '../core/BootstrapContainer';
import { Store } from '../core/store';

@Module({
    imports: [],
    providers: [Store],
    bootstrap: ExampleContainer
})
export default class ExampleModule extends BootstrapContainer {

}
