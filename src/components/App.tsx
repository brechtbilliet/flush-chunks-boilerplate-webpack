import React, { Component } from 'react';
import universal from 'react-universal-component';
import styles from '../css/App.less';
import { Route, BrowserRouter } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';

import { BASE_HREF } from '../constants';

const supportsHistory = 'pushState' in window.history;
const UniversalExample = universal(() => import('./Example'), {
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
                <BrowserRouter forceRefresh={!supportsHistory} basename={BASE_HREF}>
                    <Route path="/" component={LLExample}/>
                </BrowserRouter>
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