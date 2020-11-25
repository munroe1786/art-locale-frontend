#container components are usually class components
    -usually render other components
    -job will often be to render components in components folder
    -can act as parent to components
    -job can also be to get data from our store
    -can pass down data to child compoents
    -can also handle some of the date such as componentDidMount or click function

App will usually render at least one container

Artist Reducer will be reponsible for updating part of our store that has to do with Artists

reducer takes in the previous state as the first argument and then an action object as the second argument and inside our reducer we will update the state according to the action type

first argument in reducer - set initial state in reducer to an object for consistency, set a key in that object called artists pointing to an empty array - that way we can add more key/value pairs if needed

second argument in reducer is action

anytime we see dispatch, we want that action object to be sent to the reducer in app which will then update the value of the store

//store is where we store data globally

//we will dispatch(send) action objects to our reducer

//reducer will take in action object and decide, 
//based on conditions in the reducer,
//what we want to update about our current store 
//and return a new version of the store

//pass store in as a prop

//compose comes from redux, allows us to combine a couple 
//of different middlewares into one so that we can pass one argument
//as the second argument of createStore

//Provider gives access to store to App and its
//child components

//set up our store

//any component we wrap in provider will have access
//to our redux store

//need middleware to incorporate thunk with our store

//componentDidMount() {
  //  fetch('http://localhost:3000/api/v1/artists')
  //  .then(response => response.json()) 
  //  .then(data => console.log(data)) 
  //}

    //return from fetch is response
    //data is the json version of response and is the arg here
    //thens won't complete until the previous request is completed
    //when you chain thens, the return value of the previous one is the argument
    //in the following one

  //fetch request - GET is default request type

//thunk
    -allows us to return a function
        from the action creator
        that can be used other places
        easily

connect calls dispatch for us on the 
    return value of fetchArtists
    -fetch requests are async and    take time
    -connect expects an immediate return from action creator
    -thunk allows us to call dispatch
        from inside of action creator
    -which allows us twait            until fetch finishes before anything      is   dispatched to our reducer


--a container should render other components and handle changes 
