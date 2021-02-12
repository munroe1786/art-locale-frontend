import React from 'react';
import MuseumInput from '../components/MuseumInput';
import Museums from '../components/Museums';

class MuseumsContainer extends React.Component {


    render() {
        return (
            <div>
                <Museums museums={this.props.artist && this.props.artist.museums} />
                <MuseumInput artist={this.props.artist} />
            </div>
        )
    }
}

export default MuseumsContainer;