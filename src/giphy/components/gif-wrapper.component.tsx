import React, { PureComponent } from 'react';
import { Gif } from '../types/gif.type';

export interface GifProps {
    gif: Gif;
}
export class GifWrapper extends PureComponent<GifProps, any> {
    render(): any {
        return (
            <div>
                <img src={this.props.gif.images.downsized.url} alt=''/>
            </div>
        )
    }
}
