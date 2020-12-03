import React from 'react';
import {connect} from 'react-redux';
import {addArtist} from '../actions/addArtist'


class ArtistInput extends React.Component {

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
        this.props.addArtist(this.state)
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

export default connect(null, {addArtist})(ArtistInput);