import React from 'react'

const GifSearch = (props) => {

    const changeSearchHandler = (e) => {
        props.changeHandler(e.target.value)
    }

    return (
        <form onSubmit={props.searchHandler}>
            <input placeholder="Enter a search term" type="text" onChange={changeSearchHandler}/>
            <input type="submit" value="Search!"/>
        </form>
    )
    
}

export default GifSearch