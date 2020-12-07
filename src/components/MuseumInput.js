import React from 'react';
import {connect} from 'react-redux';
import {addMuseum} from '../actions/addMuseum';

class MuseumInput extends React.Component {
    state = {
        name: '',
        location: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addMuseum(this.state, this.props.artist.id)
        this.setState({
            name: '',
            location: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <h4>Add a new Museum</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Museum Name:</label>
                        <input type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            />
                            <br />
                    <label>Museum Location:</label>
                        <input type="text"
                            name="location"
                            value={this.state.location}
                            onChange={this.handleChange}
                            />
                            <br />
                    <label>Museum Description:</label>
                        <input type="text"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            />
                            <br />
                    <input type="submit"/>                </form>
            </div>
        )
    }
}

export default connect(null, {addMuseum} )(MuseumInput);

//doesn;t need mapStateToProps because props are
//coming down from MuseumsContainer
//

//controlled form can mean values assigend to your input 
//options are controlled
//by local state or the redux store