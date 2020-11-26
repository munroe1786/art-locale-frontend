import React from 'react';
import Artists from '../components/Artists';
import ArtistInput from '../components/ArtistInput';
import {connect} from 'react-redux';
import {fetchArtists} from '../actions/fetchArtists';

class ArtistsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchArtists()
    }

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

export default connect(mapStateToProps, {fetchArtists})(ArtistsContainer);

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

//need to connect fetchArtists call to our redux
//store - need to access that function 
//through props - add it to the connect

//{fetchArtists} in connect is equivalent 
//to mapDispatchToProps - typically the more
//complicated an app gets it's easier to have
//these actions separated out into the action 
//file and then just import them rather than mapping 
//dispatch to props - it's neater

//action creators typically, before you implement
//an async request, return just plain JS objects
//with a type and usually a payload and then once the 
//object is returned, our connect function
//automatically dipatches whatever that action
//is to our reducer for us

//since this fetch request takes time, we cannot 
//return that action right away and we do not
//want our connect function to 
//aurtomatically call dispatch for
//us

//instead we want to use dispatch inside our action
//creator so that we can call dispatch once we've
//gotten that (object from our fetch request)

//thunk allows us to use dispatch inside our action
//creator



