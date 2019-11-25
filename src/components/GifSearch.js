import React, { Component } from 'react';

export class GifSearch extends Component {

    state = {

        query: ""
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)   
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})}>
                    
                    </input>

                </form>
            </div>
        );
    }
}

export default GifSearch;
