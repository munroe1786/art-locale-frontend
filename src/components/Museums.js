import React from 'react';
import {connect} from 'react-redux';
import Museum from './Museum';
import {deleteMuseum} from '../actions/deleteMuseum';

const Museums = (props) => {

    //console.log(props)

    const handleDelete = (museum) => {
        props.deleteMuseum(museum.id, museum.artist_id)
    }
    
    return (
        <div>
            {props.museums && props.museums.map(museum =>
                <li key={museum.id}>
                    <Museum
                        {...museum}
                    />
                <button onClick={() => handleDelete(museum)}>
                    Delete
                </button>
                </li>
            )}
        </div>
    )
    
}

export default connect(null, {deleteMuseum} )(Museums);