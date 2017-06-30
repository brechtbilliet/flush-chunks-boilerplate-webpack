import React, { Component } from 'react';
import { Bootstrapper } from '../core/bootstrapper';

export default class BootstrapContainer extends Component<any, any> {
    bootstrapModule(): void {
        if (
            !(this as any).imports ||
            !(this as any).providers
        ) {
            throw `${this.constructor.name} needs to be decorated with @Module({ providers: [], imports: [], bootstrap: Component})`;
        }
        Bootstrapper.bootstrapChildren((this as any).imports);
        Bootstrapper.bindProviders((this as any).providers);
    }

    render() {
        const BootstrapComponent = (this as any).bootstrap
        return BootstrapComponent ? <BootstrapComponent {...this.props}/> : null;
    }
}
