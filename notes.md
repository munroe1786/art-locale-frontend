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

//app comp rendered our artists container
    in artists containter rendered an
    artists comp and artist input comp
    -set up our fetch artists, goes into our backend and then dispatching to 
    our reducer
    reducer is then returning a new state 
    depending on the data in the fetch 
    request
    artists container has componentDidMount
    so that every time the comp mounts it will make that fetch request to the back end
    artists container also had mapStateToProps so we can access artists in our store as props and send 
    them to our artists comp
    also passed in fetchArtists to connect
    so that when we call this.props.fetchArtists and make a fetch request
    and return dispatch and send that action to our reducer it will update our
    redux store which would not happen if we did not pass in fetchArtists as the second argument

App.js notes

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

Reducer notes


//the cases in our switch are checking 
//the action type
//

//whatever we return from our reducer
//will be our new state

//want artists to point to the array 
//that came back from the fetch request
//action.payload is an array of artist objects
//artists is the key and the array is the value

//add museum involves replacing the entire account
//rather than shoveling the museum onto the 
//account

Fetch Artists notes

//action creator is just a function

//we dispatch an action 
//an action creator creates an action
//object and then that action object will 
//be dipatched to our reducer which will then
//return our new version of the state
//based on the action that we set

//thunk allows us to use dispatch inside
//our action creator

//return dispatch => { not an object, just the
//block of our anonymous function}

//so connect won't automatically dispatch
//an action 

//allows us to dispatch 

//pass in dispatch, which is a built in dispatch
//function so that we can use it inside our
//action creator and dispatch the response
//from our fetch request

//fetch request returns a promise that we
//will get data eventually

//once that promise is resolved
//the response from our request comes into 
//our first .then and is converted into json

//once that response is converted into json
//it comes down in as the argument in the 
//next .then

//artists is the same as the converted json
//response

//then dispatch - go into our reducer, take
//our reducer this action object, take that
//and update our redux store based on the info
//being sent

Add Artist notes

//data is coming from the state in our 
//artist input form

//thunk allows us to bring the dispatch 
//function into our actions and call dispatch
//rather than having connect do that 
//automatically for us

//accept is what content-types will be accepted
//when the data is returned

//body is the data that we're sending down
//in this case, the artist object that we're
//passing in as data
//stringify it because the server expects
//it as a string and it's an object now

//first then converts the string that's
//sent over to JSON

//next then - data - is either the new account
//or the error object (both from the backend)

//account is the json-ified response

//then dispatch to the reducer with a type 
//add artist and a payload of artist

//need to add another case to our reducer

Add Museum notes

//response will have the artist associated with
//this new museum because of how the backend 
//is set up - artist has many museums

//take that artist and dispatch it to our reducer
//saves some work in our reducer

//history.push can work as a redirect 







