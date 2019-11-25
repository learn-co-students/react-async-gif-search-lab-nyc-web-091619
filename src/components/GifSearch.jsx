import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    query: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={event => this.setState({ query: event.target.value })}
          name="query"
          value={this.state.query}
          type="text"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default GifSearch;
