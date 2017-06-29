export interface ReactModule {
    providers?: any[];
    exports?: any[];
    bootstrap?: any;
    imports?: ReactModule[];
}
