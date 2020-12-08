import React from 'react';

const Museum = (props) => {
    const {
        name,
        location,
        description
    } = props

    return (
        <div>
            <p>{name}</p>
            <p>{location}</p>
            <p>{description}</p>
        </div>
    )
}

export default Museum;