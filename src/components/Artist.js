import React from 'react';

const Artist = (props) => {

    //console.log(props)

    let artist = props.artists[props.match.params.id - 1]
    
    console.log(artist)

    return (
        <li>
            artist
        </li>
    )

}

export default Artist;

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
