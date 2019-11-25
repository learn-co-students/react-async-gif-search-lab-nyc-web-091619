import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return (
            <div>  
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        );
    }

    fetchGifs = (search = 'dog')=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=nGS8m8gT2dvLWRN37XkO0QhiPWUvjBpg&rating=g`)
        .then(resp=>resp.json())
        .then(({data})=>{
            this.setState({gifs: data.map(gif=>({url: gif.images.original.url}))})
        })
    }
        
    componentDidMount(){
        this.fetchGifs()
    }
}

export default GifListContainer;
