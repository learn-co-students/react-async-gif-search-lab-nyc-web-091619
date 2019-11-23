import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const START_URL = "https://api.giphy.com/v1/gifs/search?q="
const API_KEY = "&api_key=yA350kNG46mUqqpWS8iE6i4xbVsgQbXT"
const END_URL = "&rating=g"

class GifListContainer extends Component {
    
    state = {
        gifList: [],
        searchTerm: ""
    }

    changeHandler = (newTerm) =>{
        this.setState({
            searchTerm: newTerm
        })
    }

    searchHandler = (e) =>{
        e.preventDefault()
        fetch(`${START_URL}${this.state.searchTerm}${API_KEY}${END_URL}`)
        .then(resp => resp.json())
        .then(data => {
            console.log("data returned = ", data.data)
            this.setState({
                gifList: data.data.splice(0,3)
            })
        })
    }


    render() {
        console.log("on rendering, state= ", this.state)
        return (
            <React.Fragment>
               <GifList gifList={this.state.gifList}/> 
               <GifSearch changeHandler={this.changeHandler} searchHandler={this.searchHandler}/>
            </React.Fragment>
        )
    }
}

export default GifListContainer