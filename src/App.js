import React from 'react';
import './App.css'
import {connect} from 'react-redux';
import ArtistsContainer from './containers/ArtistsContainer';

class App extends React.Component {
  
  render () {
    return (
      <div className="App">
        <ArtistsContainer />
      </div>
    );
  }
}

export default connect()(App);

//mapStateToProps-usually first argument of connect
// is our way of accessing
//values in our store as props

//second argument of connect is mapDispatchToProps
//or an action creator eg: fetchArtists

//second argument gives up the ability
//to update our store directly from this
//component

//maptStateToProps---gives us access to 
//current store

//second argument---gives us ability to 
//dispatch new actions to our store
//directly from our component




