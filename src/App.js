import React from 'react';
import {connect} from 'react-redux';
import {fetchArtists} from './actions/fetchArtists';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/artists')
    .then(res => res.json())
    .then(data => console.log(data))
  }
  
  
  
  render () {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

//onst mapStateToProps = {state} => {
//  return {
//
//  }
//}//

export default connect(null, {fetchArtists} )(App);

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




