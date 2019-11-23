import React from 'react';

const GifList = (props) => {

    const renderGifs = () => props.gifs.map((gif, index) => <img key={index} src={gif} alt=""/>)

        return (
            <ul>
                <li>{renderGifs()}</li>
                
            </ul>
        );
    }
 
export default GifList


