import React from 'react';
import {Route, Link} from 'react-router-dom';
import Artist from './Artist';

const Artists = (props) => {

    return(
        <div>
            <h3>Welcome to Art Locale</h3>
            <h4>Click an Artist name to see which museums display their art</h4>
            {props.artists.map(artist => 
                <li key={artist.id}>
                <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
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
//when you iterate--or else will cause a warning 
//on the console

//we're able to see the artists list
//because it's no longer being directly 
//rendered

//props are coming from the route we have
//set up - props are being passed in
//from the route


