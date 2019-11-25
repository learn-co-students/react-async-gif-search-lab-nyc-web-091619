import React, { Component } from 'react';

class GifList extends Component {
    render() {
        return (
            <div>
                {this.props.gifs.map(gif=><img key={gif.url} src={gif.url} />)}
            </div>
        );
    }
}

export default GifList;
