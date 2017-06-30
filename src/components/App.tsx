import 'reflect-metadata';
import React, { Component } from 'react';
import universal from 'react-universal-component';
import { Link, Route, Switch } from 'react-router-dom';
import { Bootstrapper } from '../core/bootstrapper';
import AppModule from './App.module';

import styles from '../css/App.less';

const UniversalExample = universal(() => import('./Example.module'), {
    resolve: () => require.resolveWeak('./Example.module'),
});

Bootstrapper.bootstrapRoot(AppModule);

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className={styles.title}>Hello World</h1>
                <Link to="/">Home</Link><br/>
                <Link to="/lazy">Lazy Route</Link>
                <Switch>
                    <Route exact path="/" component={LLExample}/>
                    <Route path="/lazy" component={UniversalExample}/>
                </Switch>
            </div>
        )
    }
}

export class LLExample extends Component<any, any> {
    render(): any {
        return (
            <div>test</div>
        )
    }
}
