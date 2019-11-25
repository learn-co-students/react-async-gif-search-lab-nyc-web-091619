import React, { Component } from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export class GifListContainer extends Component {
    state = {
        gifsToDisplay: []
    }

    fetchGiphy = query => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(data => {
                this.setState((prevState) => ({
                    gifsToDisplay: [...prevState.gifsToDisplay, data.data[0].url]
                }))
            })
    }
    
    submitHandler = formData => {
        
        this.fetchGiphy(formData)

        // this.setState((prevData) => (
        //     {
        //         gifsToDisplay: [...prevData.gifsToDisplay, processedFormData]
        //     }
        // ))
    }
    
    render() {
        return (
            <div>
                <GifSearch submitHandler={this.submitHandler}/>
                <GifList gifs={this.state.gifsToDisplay} />
            </div>
        );
    }
}

export default GifListContainer;
