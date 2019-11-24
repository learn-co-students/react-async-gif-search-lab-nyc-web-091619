import React, { Component } from 'react';

export default class GifSearch extends Component {

    state = {
        input: ''
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.input)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} value={this.state.input} />
                    <input type='submit' value='Search' />
                </form>
            </div>
        )
    }

}