import React from 'react';

class GifSearch extends React.Component {

    state = {
        searchValue: ''
    }
    
searchBoxHandler = (e) => {
    this.setState({ searchValue: e.target.value  });
}

formSubmitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state.searchValue)
}


    render() { 
        return ( 
            <form onSubmit={this.formSubmitHandler}>
                Search for Gifs: <input type="text" name="searchTerm" value={this.state.searchValue} onChange={this.searchBoxHandler}></input>
                <button type="submit">Submit</button>
            </form>
         );
    }
}
 
export default GifSearch;