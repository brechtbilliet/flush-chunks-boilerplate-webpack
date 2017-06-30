import React, { PureComponent } from 'react'
import styles from '../css/Example.less'
import { Bootstrapper } from '../core/bootstrapper';
import { Store } from '../core/store';

export default class ExampleContainer extends PureComponent<any, any> {
    render() {
        console.log(Bootstrapper.ioc.get(Store));
        return (
            <div className={styles.paragraph}><span>LOADED!!!!</span></div>
        )
    }
}
