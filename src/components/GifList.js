import React from 'react'

function GifList(props) {
        return (
            <div>
                {props.listOfGifs.map(
                    gif => <img src={gif} key={gif} alt={`This is a giphy ${gif}`}/>
                )}
                
            </div>
        )
}

export default GifList