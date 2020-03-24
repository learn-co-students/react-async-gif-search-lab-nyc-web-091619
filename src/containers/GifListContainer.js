import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

	state = {
		gifArr: []
	}

	onSubmitHandler = (e, searchValue) => {
		e.preventDefault()
		fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=TMP4dj5jb4sBF0BWTZBFYIuoD7vcWofM&rating=g&limit=3`)
		.then (resp => resp.json())
		.then (data => {
			this.setState({
				gifArr: data
			})
		})
	}

	render() {
		return (
			<div>
				<GifList gifArr={this.state.gifArr} />
				<GifSearch handleSubmit={this.onSubmitHandler} />
			</div>
		)
	}
}