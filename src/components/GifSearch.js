import React, { Component } from 'react'

export default class GifSearch extends Component {

	state = {
		searchValue: []
	}

	handleChange = (event) => {
		event.persist()
		this.setState({
			[event.target.id]: [event.target.value]
		})
	}

	render() {
		return (
			<form onSubmit={(e)=>this.props.handleSubmit(e, this.state.searchValue)}>
				<input 	type="text" 
								id="searchValue" 
								value={this.state.searchValue} 
								onChange={this.handleChange} />
			</form>
		)
	}
}