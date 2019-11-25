import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        searchTerm: ''
    }


    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.fetchGifs(this.state.searchTerm)
    }

    render() {
        return (
            <div>
                <form  onSubmit={this.props.handleSubmit}>
                    <input type='text' value={this.state.searchTerm} onChange={(e)=>{this.setState({searchTerm: e.target.value})}}></input><br/>
                </form>
            </div>
        );
    }
}

export default GifSearch;
