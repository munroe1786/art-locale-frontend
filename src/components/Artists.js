import React from 'react';
import {Link} from 'react-router-dom';
import Artist from './Artist';

const Artists = (props) => {
    
    return(
        <div>
            <h3>Welcome to Art Locale</h3>
            <h4>Click an Artist to see which museums display their art</h4>
            {props.artists.map(artist => 
                <li key={artist.id}>
                <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
    
                </li>
            )}
        </div>

    )
}

export default Artists;