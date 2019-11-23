import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = { 
        saved_gifs: []
     }
    
    fetchGifs = (searchT = "joy") => {
        this.setState({
            saved_gifs: []
        })
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchT}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(gifs => gifs.data.forEach(gif => this.setState({saved_gifs: [...this.state.saved_gifs, gif.images.original.url]})))
    }

    componentDidMount(){
        this.fetchGifs()
    }

    render() {
        return (
        <div style={{display: "flex",flexDirection: "row"}}>
            <GifList gifsToRender={this.state.saved_gifs}/>
            <GifSearch setSearchTerm={this.fetchGifs}/>
        </div>
        );
    }
}

export default GifListContainer;