import React from 'react';
import {Redirect} from 'react-router-dom';
import ArtistEdit from './ArtistEdit';

import MuseumsContainer from '../containers/MuseumsContainer';

const Artist = (props) => {

  //console.log(props)

    //let artist = props.artists[props.match.params.id - 1]
        //use this method so that the user experience
        //is better--the path here is from the index in the
        //artists array

    let artist = props.artists.filter(artist => artist.id == props.match.params.id)[0]
        //use this method so that the links work correctly
        //the artist.id here matches the artist.id in the 
        //links
        //written with the [0] after the expression because filter
        //returns a new array with only 1 artist in it
        //so the index starts at 0 for that 
        //1 artist - this method lets the app find 
        //an artist 

    
    //console.log(artist)

    return (
        <div>
            <li>
                {artist ? artist.name : null} -
                {artist ? artist.style : null}
            </li>
            <MuseumsContainer artist={artist} />
            <ArtistEdit artist={artist} />
        </div>
    )
}

export default Artist;

//{artist ? artist.name : null} -
            //{artist ? artist.style : null}

//{props.artist.name} - {props.artist.style}

//need to use React Router to be able to see
//a specific account

//can wrap app in router in index.js which
//will give app and any app child
//access to setting up routes and using
//links

//can also set it up inside app component

//the difference is that used inside App, 
//App would not be able to have a route

//props.artists is an array with all of
//our artists

//props.match.params.id - 1 will give us
//the id that is in our url - is just an 
//array and we are accessing a specific
//element in the array - 1 because arrays
//start at 0

//use a ternary operator to render an account
//because the first time the props are coming
//through we don't have the artists yet
//and then after the first render 
//we have the artists

//first time artist component renders, props
//are undefined

//links in artists.js are rendering the
//artist component

//add artist props to Museum Container render

//will render a Museum Container for every
//artist show page that we go to
