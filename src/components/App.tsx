import React, { Component } from 'react';
import universal from 'react-universal-component';
import { Link, Route, Switch } from 'react-router-dom';
import styles from '../css/App.less';
import { ReactModule } from '../core/react-module';

const asyncWork = () => {
    return import('./Example.module').then((module) => {
        const instance: ReactModule = new module.default();
        return instance.bootstrap();
    })
}

const UniversalExample = universal(asyncWork, {
    resolve: () => require.resolveWeak('./Example'),
    minDelay: 500
})


export default class App extends React.Component {
    // set `show` to `true` to see dynamic chunks served by initial request
    // set `show` to `false` to test how asynchronously loaded chunks behave,
    // specifically how css injection is embedded in chunks + corresponding HMR
    state = {
        show: true
    }

    componentDidMount() {
        if (this.state.show) return

        setTimeout(() => {
            console.log('now showing <Example />')
            this.setState({show: true})
        }, 1500)
    }

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
