import React, { Component } from 'react';

export class GifList extends Component {

    renderGifs = gifUrlArr => {
       return gifUrlArr.map((gifUrl, idx) => {
            return <li key={idx}>
                <img src={gifUrl} alt="gif"/>
            </li>
        })
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.renderGifs(this.props.gifs)}
                </ul>
            </div>
        );
    }
}

export default GifList;
