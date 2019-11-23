import React from 'react';

class GifSearch extends React.Component {

    state={
        currentInp: ""
    }

    controlForm = e => {
        this.setState({
            currentInp: e.target.value
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.setSearchTerm(this.state.currentInp)
    }


    render() {
        return (
        <div style={{marginLeft : "400px"}}>
            <p>Enter a Search Term:</p>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Search..." onChange={this.controlForm} value={this.state.currentInp}></input>
                <input type="submit" value="Search!"></input>
            </form>
        </div>
        );
    }
}

export default GifSearch;