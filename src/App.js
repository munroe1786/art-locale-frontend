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