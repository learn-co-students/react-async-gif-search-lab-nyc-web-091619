import React, { Component } from "react";

class GifList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.gifs.map(gif => (
          <img src="{gif}" alt="{gif}" />
        ))}
      </React.Fragment>
    );
  }
}

export default GifList;
