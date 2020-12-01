import React from 'react';
import MuseumInput from '../components/MuseumInput';

class MuseumsContainer extends React.Component {


    render() {
        return (
            <div>
                <MuseumInput />
            </div>
        )
    }
}

export default MuseumsContainer;

//containers are usually class as they 
//typically have state and also
//functionality