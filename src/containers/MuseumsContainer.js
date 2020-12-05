import React from 'react';
import MuseumInput from '../components/MuseumInput';
import Museums from '../components/Museums';
//import Museum from '../components/Museum';

class MuseumsContainer extends React.Component {


    render() {
        return (
            <div>
                <MuseumInput artist={this.props.artist} />
                <Museums museums={this.props.artist && this.props.artist.museums} />
            
            </div>
        )
    }
}

export default MuseumsContainer;

//<Museum museum={this.props.artist && this.props.artist.museum} />

//containers are usually class as they 
//typically have state and also
//functionality

//rendering our whole MuseumsContainer 
//inside our Artist Component
//that means that MuseumsContainer
//can receive props about the artist 
//that is rendering it and can pass 
//those props down to its children
//also because of the serializer

//MuseumsContainer needs know about 
//the artist that is rendering the 
//container, so we can send the 
//MuseumsContainer props 

//send down props to Museums Component
//through the artist prop that we send 
//to Museum Container, which then passes
//it down to Museums Component

//'this.props.artist &&' to check if 
//this.props.artist exists, then we 
//will move on the second part which is the 
//array of museums

//serializer helps associate museums and
//artist
