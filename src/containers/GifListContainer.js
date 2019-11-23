import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {
    state = {  
        gifs: []
    }

    submitHandler = (value) => {
        this.fetchGifs(value)
    }

    fetchGifs = (value= 'dolphins') => {
        const api = `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&rating=g`

        fetch(api).then(res => res.json()).then(gliphyData => this.setState(
            { 
                gifs: gliphyData.data.slice(0,3).map(imagesOriginalUrl => imagesOriginalUrl.images.original.url) 
            }))   
    }// end fetch

    
    render() { 
        return (
            <div> 
            <GifList gifs={this.state.gifs}/>
            <GifSearch submitHandler={this.submitHandler}/>
            </div>
        );
    }

    componentDidMount() {
        this.fetchGifs()
    }
} //end class
 
export default GifListContainer;


// showstate = () => console.log(this.state)
//     showurls = () => {
//         let urls = this.state.gifs.map(gifs => gifs.images.original.url )
//             console.log(urls)
//     }



// fetch(api).then(res => res.json()).then(data => this.setState(
//     { 
//         gifs: data.data.splice(0,3) 
//     }))