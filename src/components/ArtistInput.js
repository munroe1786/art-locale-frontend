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
                <h3>Add a new Artist</h3>
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

//need a controlled form
//uncontrolled form - the elements float
//around in the DOM
//add values so that the component
//has control over the value of each input
//add state through a constructor or
//through state = to make this a controlled
//form

//in order to have a controlled form, you 
//can use local state directly
//from the form itself or have form 
//data available in the redux store

//reason for it being in redux store
//if you're resuing the same form for creating
//and editing - might make sense to save those
//values in your redux store so that you
//can reuse that component

//since we're in a class comp we need the 
//this keyword so it knows we're talking
//about the handleChange function in the 
//comp

//need name in our form input to close the
//loop to make it a controlled form 
//and then in handleChange you're abstracting
//name needs to match the keys in your state

//[event.target.name] - brackets are first 
//evaluating what is inside the brackets - 
//either name or style in this case -
//and then sets that as the key - so name
//or style are the key here - abstraction
//way of JS assigning a key that needs
//to be evaluated first

//handleSubmit goes in the form tag because
//when someone clicks submit we want the whole
//form to submit

//point of app is to save new artists or changes
//to those artists in our db and update our
//store so we need a newArtist action

//this comp does not need mapStateToProps 
//because it will be adding something new 
//and it doesn't care about what's already
//in the store - so we can pass null as 
//the first argument for connect

//pass the action creator for add Artist 
//as the second argument - alternative for
//writing a mapDispatchToProps function -
//thunk allows us to call dispatch in
//our addArtist instead 
//of connect automatically calling -
//we want access to the dispatch function
//inside our addArtist creator

//need this.state as an argument in
//this.props.addArtist so that we can 
//send the data to the addArtist action

//to get form to reset to empty fields
//add this.setState and state to 
//handleSubmit

//setState is asynchronous so it will 
//not clear out the state until everything
//else in handleSubmit is run

