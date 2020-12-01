import React from 'react';

const Artist = (props) => {

  console.log(props)

    let artist = props.artists[props.match.params.id - 1]
    
    //console.log(artist)

    return (
        <li>
            {artist ? artist.name : null} -
            {artist ? artist.style : null}
        </li>
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
