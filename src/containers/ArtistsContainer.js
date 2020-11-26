import React from 'react';
import Artists from '../components/Artists';
import ArtistInput from '../components/ArtistInput';
import {connect} from 'react-redux';

class ArtistsContainer extends React.Component {

    

    render() {
        return(
            <div>
                <ArtistInput />
                <Artists />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps) (ArtistsContainer);

//makes sense that this container
//will contain other components  
//that have to do with Artists

//order of things now 11/26/20 -
    //attach app to the DOM
    //app renders artist container
    //artist container renders 
        //Artists and ArtistInput


//if we want to fetch artists from our
//backend, add them to redux store
//and use those artists from our
//backend---need to connect to the store

//because of Provider, we can connect
//any child of App to the store

//mapStateToProps allows us to see
//the data - takes in state from our redux
//store - we want to return an object called
//artists 

//give this component access through props
//to the artists inside our state

