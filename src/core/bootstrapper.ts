import { ReactModule } from './react-module';
import { Container } from 'inversify';
// import { asyncComponent } from 'react-async-component';
import { ComponentClass } from 'react';

export class Bootstrapper {
    static ioc: Container;

    static bootstrapRoot(mod: any): void {
        const instance = new mod();
        Bootstrapper.bootstrap(instance);
    }

    private static bootstrapChild(mod: any): void {
        const instance: ReactModule = new mod();
        if (instance.imports) {
            instance.imports.forEach(childModule => {
                Bootstrapper.bootstrapChild(childModule);
            });
        }
        Bootstrapper.bindProviders(instance);
    }

    static lazyLoadModule(mod: any, resolveFn: Function): void {
        const instance: ReactModule = new mod.default();
        Bootstrapper.bootstrapChild(mod.default);
        resolveFn(instance.bootstrap);

    }

    static lazyLoad(requireFn): ComponentClass<any> {
        throw new Error();
        // return asyncComponent({
        //     resolve: () => new Promise(resolve => {
        //         requireFn(resolve);
        //     })
        // })
    }

    private static bootstrap(module: ReactModule): void {
        Bootstrapper.ioc = new Container();

        // if the module imports other modules, bootstrap them first
        if (module.imports) {
            module.imports.forEach(childModule => {
                Bootstrapper.bootstrapChild(childModule);
            })
        }
        Bootstrapper.bindProviders(module);
    }

    private static bindProviders(module: ReactModule): void {
        if (module.providers) {
            module.providers.forEach(provider => {
                if (!Bootstrapper.ioc.isBound(provider)) {
                    Bootstrapper.ioc.bind(provider).to(provider).inSingletonScope();
                }
            });
        }
    }
}
