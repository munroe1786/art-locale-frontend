import { render } from '@testing-library/react';
import React from 'react';

const Museums = (props) => {
    
    console.log(props.museums)
    
    return (
        <div>
            {props.museums && props.museums.map(museum =>
                <li key={museum.id}>
                    {museum.name}
                    {museum.location}
                    {museum.description}
                </li>
                )}
        </div>
    )
    
}

export default Museums;

//have to check to see if props are defined 















//can be a functional component since it
//will receive props from parent Museum 
//Container 
//this component's job is to render Museums