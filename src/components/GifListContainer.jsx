import React, { Component } from "react";
import GifList from "./GifList.jsx";
import GifSearch from "./GifSearch.jsx";

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  render() {
    return (
      <React.Fragment>
        <h1>Gif List</h1>
        <GifSearch handleSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} handleGifs={this.handleGifs} />
      </React.Fragment>
    );
  }

  getGifs = query => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({ gifs: json.data.map(gif => gif.images.original.url) });
      })
      .then(console.log(this.state));
  };

  componentDidMount = query => {
    this.getGifs(query);
  };

  handleGifs = () => {
    console.log(this.state.gifs);
  };

  handleSearch = query => {
    this.getGifs(query);
  };
}

export default GifListContainer;
