import React, { Component } from 'react';

export default class GifList extends Component {

    renderGifs = () => {
        return this.props.gifs.map((gif, index) => {
            return <li key={index}><img src={gif.images.original.url} /></li>
        })
    }

    render() {
        console.log(this.props.gifs)
        return (
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }

}