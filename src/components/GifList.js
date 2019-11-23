import React from 'react';
class GifList extends React.Component {
    render() {
        return (
            <div>
                <ul style={{listStyleType: "none"}}>
                {this.props.gifsToRender.map((gif, id) => <li><img src={gif} key={id} style={{width: "400px", marginBottom: "5px"}} /></li>)}
                </ul>
            </div>
        )
    }
}

export default GifList