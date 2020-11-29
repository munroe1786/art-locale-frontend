import React from 'react';

class ArtistInput extends React.Component {

    state = {name: '', style: ''}

    render() {
        return (
            <div>
                <form>
                    <label>Artist Name:</label>
                        <input type='text' 
                        placeholder='Name' 
                        value={this.state.name}
                        /><br/>
                    <label>Style:</label>
                        <input type='text' 
                        placeholder='Style'
                        value={this.state.style} />
                </form>
            </div>
        )
    }
}

export default ArtistInput;

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