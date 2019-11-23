import React from 'react'

const GifList= (props) =>{

    const renderGifs = () =>{
        return props.gifList.map(gif =>{
            return (
                <li>
                    <img src={gif.images.original.url} alt="gif!"/>
                </li>
            )
        })
    }
    

    return (
        <ul>
            {renderGifs()}
        </ul>
    )
    
}

export default GifList