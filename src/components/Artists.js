import React from 'react';

const Artists = (props) => {

    return(
        <div>
            {props.artists.map(artist => 
                <li key={artist.id}>
                {artist.name} - {artist.style}
                </li>
            )}
        </div>

    )
}

export default Artists;


//this component will get props from 
//the Artist Container

//since it's a func component we have 
//to pass props in as arguments
//pass in as props or deconstruct them 
//to pull out what we need

//don't need a render in func components

//props creates an object of all of the 
//props passed in

//pass in a key prop into the html element 
//when you iterate--will cause a warning 
//on the console


