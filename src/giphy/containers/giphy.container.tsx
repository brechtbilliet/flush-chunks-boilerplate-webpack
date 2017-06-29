import React, { PureComponent } from 'react';
import { Bootstrapper } from '../../core/bootstrapper';
import { GiphySandbox } from '../giphy.sandbox';
import { GifWrapper } from '../components/gif-wrapper.component';
import { Link } from 'react-router-dom'
import { connectStreams } from 'react-rx-connect';

export class GiphyContainer extends PureComponent<any, any> {
    state = {
        cats: null,
        dogs: null
    };

    sb: GiphySandbox;

    componentDidMount(): void {
        this.sb = Bootstrapper.ioc.get(GiphySandbox);
        this.sb.fetchCats();
        this.sb.fetchDogs();

        connectStreams(this, {
            cats: this.sb.cats$,
            dogs: this.sb.dogs$
        });
    }

    render(): any {
        return (
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/dealroomll">Lazy dealroom</Link></li>
                    <li><Link to="/giphyll">Lazy giphy</Link></li>
                </ul>
                <h1>Gifs!</h1>
                {this.state.cats && this.state.cats.map((gif, i) => <GifWrapper key={i} gif={gif}/>)}
                {this.state.dogs && this.state.dogs.map((gif, i) => <GifWrapper key={i} gif={gif}/>)}
            </div>
        )
    }
}
