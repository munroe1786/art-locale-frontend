import React from 'react';
import Artists from '../components/Artists';
import ArtistInput from '../components/ArtistInput';
import Artist from '../components/Artist';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchArtists} from '../actions/fetchArtists';

class ArtistsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchArtists()
    }

    render() {
        return(
            <div>
                <Route path='/artists/new' component={ArtistInput}/>
                <Route path='/artists/:id' render={(routerProps) => <Artist {...routerProps} artists={this.props.artists}/> } />
                <Route exact path='/artists' render={(routerProps) => <Artists {...routerProps} artists={this.props.artists}/> } />
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

//need to pass down props from Artists

//this.props.artists in curly brackets

//mapStateToProps allows us to get the artists
//from our redux store, accessing them thru 
//props in container and then sending them
//down as props to Artists component

//when we refresh react and redux do not hold
//the states
//the only reason we see the artists is
//because we are fetching them and can
//send them down to the artists component

//routes need to be able to have access to the 
//props that they need so we need to set up 
//routes that can send props through
//routes to the components

//only need to import Route as App is wrapped
//inside Router

//if comp you are setting up in Route accepts
//props or needs props, then you must pass 
//them in the route

//render takes in a function so for a route,
//pass in the component just as if you were
//rendering it outside the route

//need exact keyword in route to only see 
//one component at a time
//without exact, Route will render ArtistInput
//Artists because they both urls with 
//artists in them

//downfall of using exact is issues with 
//nested routes

//can get around that by setting up a sort 
//of nested route in the artists container

//routes don't render components directly
//they are conditionally rendered based 
//on the url

//router props let us access to the params
//in props

//router props are passed in in addition to
//the props we have set up - this will
//automatically add these router props 
//into the props objects our components
//are receiving

//params can be expanded to see the key/value
//pairs

//router props through match are giving
//us params - we see id - can use this 
//to access the specific account we want
//to see

