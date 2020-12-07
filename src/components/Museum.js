import React from 'react';
//import Museums from './Museums';

const Museum = (props) => {
    const {
        name,
        location,
        description
    } = props
    
    console.log(props)
    
    //let museum = props.museums.filter(museum => museum.id === )
    return (
        <div>
            <p>{name}</p>
            <p>{location}</p>
            <p>{description}</p>
        </div>
    )
}

export default Museum;