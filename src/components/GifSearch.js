import React, {Component, Fragment} from 'react';

class GifSearch extends Component{
    state = {
      userSearch: ''  
    }

    handleInput = event => {
        this.setState({
            userSearch: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.getResult(this.state.userSearch)
    }

    render() {
        return (
            //<form onSubmit={this.handleSubmit}>
                <div>
                    <input onChange={this.handleInput}></input>
                    <button onClick={this.handleSubmit}>Search</button>
                </div>
            // </form>
        )
    }
}

export default GifSearch;