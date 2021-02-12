import React from 'react';
import ArtistEdit from './ArtistEdit';
import MuseumsContainer from '../containers/MuseumsContainer';

const Artist = (props) => {

    let artist = props.artists.filter(artist => artist.id == props.match.params.id)[0]

    return (
        <div>
            <h3>
                <br />
                {artist ? artist.name : null} 
                <br />
                {artist ? artist.style : null}
            </h3>
            <MuseumsContainer artist={artist} />
            <h4>Edit this artist</h4>
            <ArtistEdit artist={artist} />
        </div>
    )
}

export default Artist;