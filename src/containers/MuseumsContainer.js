import React from 'react';
import MuseumInput from '../components/MuseumInput';
import Museums from '../components/Museums';

class MuseumsContainer extends React.Component {


    render() {
        return (
            <div>
                <MuseumInput />
                <Museums />
            </div>
        )
    }
}

export default MuseumsContainer;

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
