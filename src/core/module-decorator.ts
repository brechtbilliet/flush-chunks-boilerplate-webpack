import { ReactModule } from './react-module';
export function Module(options: ReactModule): any {
    return (target: any) => {
        return () => {
            const returnObj = new target() as any;
            returnObj.providers = options.providers;
            returnObj.bootstrap = options.bootstrap;
            returnObj.imports = options.imports as ReactModule[];

            return returnObj;
        };
    }
}
