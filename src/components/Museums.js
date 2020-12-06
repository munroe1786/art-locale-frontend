import React from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
//import Museum from './Museum';
import {deleteMuseum} from '../actions/deleteMuseum';

const Museums = (props) => {
    
    console.log(props.museums)

    const handleDelete = (museum) => {
        //debugger
        props.deleteMuseum(museum.id, museum.artist_id)
    }
    
    return (
        <div>
            {props.museums && props.museums.map(museum =>
                <li key={museum.id}>
                    {museum.name}
                    {museum.location}
                    {museum.description}
                    <button onClick={() => handleDelete(museum)}>
                        Delete
                    </button>
                </li>
                )}
        </div>
    )
    
}

export default connect(null, {deleteMuseum} )(Museums);

// <Link to={`/artist/${ArtistId}/museums/${museum.artist_id}`}>{museum.name}</Link>
//have to check to see if props are defined 

//since this is a func component - props are 
//coming in as props not this.props

//can be a functional component since it
//will receive props from parent Museum 
//Container 
//this component's job is to render Museums