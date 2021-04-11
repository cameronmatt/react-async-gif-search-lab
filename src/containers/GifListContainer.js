import React, {Component} from 'react'
//import GifList from '/Users/admin/development/code/phase2/react-async-gif-search-lab/src/component/GifList'
//import GifSearch from '/Users/admin/development/code/phase2/react-async-gif-search-lab/src/component/GifSearch'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
    
        state = {
            gifs: []
        }

        handleFetch = (searchVal) => {
            const key = 'jdt5SxXfnmHb3h23Jguoieaz9mPflZOa'
            const url = `https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=${key}`
            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.data[0].images.original.url)
                const arrayOfGifs = data.data.map(gif => gif.images.original.url)
                this.setState({
                    gifs: arrayOfGifs.slice(0, 3)
                })

            })
        
        }

        //componentDidMount

        render() {
            return (
                <div>
                    <GifSearch getResult={this.handleFetch}></GifSearch>
                    <GifList listOfGifs={this.state.gifs}></GifList>
                </div>
            )
        }

}

export default GifListContainer;