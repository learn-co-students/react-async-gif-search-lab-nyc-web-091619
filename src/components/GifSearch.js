import React, { Component } from 'react';

export class GifSearch extends Component {

    state = {
        searchInput: ""
    }

    searchHandler = event => {
        event.persist()
        
        // const form = event.target
        event.preventDefault()

        this.props.submitHandler(this.state.searchInput)
        // form.reset()
        this.setState({
            searchInput: ""
        })
    }

    controlInput = event => {
        event.persist()
        this.setState({
            searchInput: event.target.value
        })
        // console.log(this.state.searchInput)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.searchHandler}>
                    <input type="text" onChange={this.controlInput} value={this.state.searchInput}></input>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default GifSearch;
