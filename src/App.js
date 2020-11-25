import React from 'react';



class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/artists')
    .then(response => response.json()) 
    .then(data => console.log(data[0])) 
  }

    //return from fetch is response
    //data is the json version of response and is the arg here
    //thens won't complete until the previous request is completed
    //when you chain thens, the return value of the previous one is the argument
    //in the following one

  //fetch request - GET is default request type

  render () {
    return (
      <div className="App">
        App
      </div>
  );
  }
}

export default App;
