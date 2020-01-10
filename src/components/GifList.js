import React from 'react'

function GifList (props) {
  console.log(props.gifArr.data)
  return (
    <ul>
      {props.gifArr.data
			? props.gifArr.data.map(gif => {
          return <li key={gif.url}>{gif.url}</li>
        })
			:			null}
    </ul>
  )
}

export default GifList
