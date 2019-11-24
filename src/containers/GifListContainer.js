import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
import key from '../key'

export default class GifListContainer extends Component {

    state = {
        // apiUrl: `https://api.giphy.com/v1/gifs/search?q=${}&api_key=${key}&rating=g`,
        gifs: []
    }

    handleSubmit = (input) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${key}&rating=g`)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                gifs: json.data.slice(0, 3)
            })
        })
    }

    render() {
        return (
            // Will be rendering <GifList /> and <GifSearch /> from here
            <div>
                < GifSearch handleSubmit={this.handleSubmit} />
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }

}