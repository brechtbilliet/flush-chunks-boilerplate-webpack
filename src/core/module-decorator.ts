import { ReactModule } from './react-module';
export function Module(options: ReactModule): any {
    return (target: any) => {
        return () => {
            const instance = new target() as any;
            instance.providers = options.providers;
            instance.bootstrap = options.bootstrap;
            instance.imports = options.imports as ReactModule[];
            console.log(`bootstrap ${instance.constructor.name}`);
            instance.bootstrapModule();
            return instance;
        };
    }
}
