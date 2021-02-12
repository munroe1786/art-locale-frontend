import React from 'react';
import {connect} from 'react-redux';
import {editArtist} from '../actions/editArtist'

class ArtistEdit extends React.Component {

    state = {
        name: '', 
        style: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let artist = {...this.state, id: this.props.artist.id}
        this.props.editArtistDispatch(artist)
        this.setState({
            name: '',
            style: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Artist Name:</label>
                        <input type='text' 
                        placeholder='Name' 
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChange}
                        />
                        <br/>
                    <label>Style:</label>
                        <input type='text' 
                        placeholder='Style'
                        value={this.state.style}
                        name="style"
                        onChange={this.handleChange} 
                        />
                        <br />
                        <input type='submit' />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatchFn) => {
    return {
        editArtistDispatch: (artist) => {
            dispatchFn(editArtist(artist)) 
        }
    }
}

export default connect(null, mapDispatchToProps)(ArtistEdit);