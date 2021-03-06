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

Delete Musuem notes

//this action needs the museum ID and the artist
//ID since they are associated

//mimicing add museum - which instead of sending
//back the museum, we sent back the artist 
//from the backend, which simplified what
//we needed to do in the reducer

Artist.js notes

//need to use React Router to be able to see
//a specific account

//can wrap app in router in index.js which
//will give app and any app child
//access to setting up routes and using
//links

//can also set it up inside app component

//the difference is that used inside App, 
//App would not be able to have a route

//props.artists is an array with all of
//our artists

//props.match.params.id - 1 will give us
//the id that is in our url - is just an 
//array and we are accessing a specific
//element in the array - 1 because arrays
//start at 0

//use a ternary operator to render an account
//because the first time the props are coming
//through we don't have the artists yet
//and then after the first render 
//we have the artists

//first time artist component renders, props
//are undefined

//links in artists.js are rendering the
//artist component

//add artist props to Museum Container render

//will render a Museum Container for every
//artist show page that we go to

//let artist = props.artists[props.match.params.id - 1]
        //use this method so that the user experience
        //is better--the path here is from the index in the
        //artists array

        //let artist = props.artists.filter(artist => artist.id == props.match.params.id)[0]
        //use this method so that the links work correctly
        //the artist.id here matches the artist.id in the 
        //links
        //written with the [0] after the expression because filter
        //returns a new array with only 1 artist in it
        //so the index starts at 0 for that 
        //1 artist - this method lets the app find 
        //an artist 

//send an artist to the MuseumsContainer via
//artist={artist}

Artist Input notes

/need a controlled form
//uncontrolled form - the elements float
//around in the DOM
//add values so that the component
//has control over the value of each input
//add state through a constructor or
//through state = to make this a controlled
//form

//in order to have a controlled form, you 
//can use local state directly
//from the form itself or have form 
//data available in the redux store

//reason for it being in redux store
//if you're resuing the same form for creating
//and editing - might make sense to save those
//values in your redux store so that you
//can reuse that component

//since we're in a class comp we need the 
//this keyword so it knows we're talking
//about the handleChange function in the 
//comp

//need name in our form input to close the
//loop to make it a controlled form 
//and then in handleChange you're abstracting
//name needs to match the keys in your state

//[event.target.name] - brackets are first 
//evaluating what is inside the brackets - 
//either name or style in this case -
//and then sets that as the key - so name
//or style are the key here - abstraction
//way of JS assigning a key that needs
//to be evaluated first

//handleSubmit goes in the form tag because
//when someone clicks submit we want the whole
//form to submit

//point of app is to save new artists or changes
//to those artists in our db and update our
//store so we need a newArtist action

//this comp does not need mapStateToProps 
//because it will be adding something new 
//and it doesn't care about what's already
//in the store - so we can pass null as 
//the first argument for connect

//pass the action creator for add Artist 
//as the second argument - alternative for
//writing a mapDispatchToProps function -
//thunk allows us to call dispatch in
//our addArtist instead 
//of connect automatically calling -
//we want access to the dispatch function
//inside our addArtist creator

//need this.state as an argument in
//this.props.addArtist so that we can 
//send the data to the addArtist action

//to get form to reset to empty fields
//add this.setState and state to 
//handleSubmit

//setState is asynchronous so it will 
//not clear out the state until everything
//else in handleSubmit is run

notes from Artists.js

//this component will get props from 
//the Artist Container

//since it's a func component we have 
//to pass props in as arguments
//pass in as props or deconstruct them 
//to pull out what we need

//don't need a render in func components

//props creates an object of all of the 
//props passed in

//pass in a key prop into the html element 
//when you iterate--or else will cause a warning 
//on the console

//we're able to see the artists list
//because it's no longer being directly 
//rendered

//props are coming from the route we have
//set up - props are being passed in
//from the route

notes from MuseumInput

//doesn't need mapStateToProps because props are
//coming down from MuseumsContainer
//

//controlled form can mean values assigned to your input 
//options are controlled
//by local state or the redux store

notes from Museums.js

//have to check to see if props are defined 

//since this is a func component - props are 
//coming in as props not this.props

//can be a functional component since it
//will receive props from parent Museum 
//Container 
//this component's job is to render Museums

//{props.museums && props.museums.map(museum =>
  //li key={museum.id}>//
    // Museum
      //  {...museum}
    ///>
    //button onClick={() => handleDelete(museum)}>
      //  Delete
    ///button>
    ///li>
//)}

artist container notes

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

//switch returns the first route that matches
//that path and won't render other 
//components once it finds a match
//solves problem of artist component being
//rendered on new artist page

//don't have to have exact as the path
//when using switch

//Route exact path='/' render={() => {
                        //return (
                          //  <\Redirect to='/artists' />
                        //)
                    //}}
                    ///>


Museum Container notes

//containers are usually class as they 
//typically have state and also
//functionality

//rendering our whole MuseumsContainer 
//inside our Artist Component
//that means that MuseumsContainer
//can receive props about the artist 
//that is rendering it and can pass 
//those props down to its children
//also because of the serializer

//MuseumsContainer needs to know about 
//the artist that is rendering the 
//container, so we can send the 
//MuseumsContainer props 

//send down props to Museums Component
//through the artist prop that we send 
//to Museum Container, which then passes
//it down to Museums Component

//'this.props.artist &&' to check if 
//this.props.artist exists, then we 
//will move on the second part which is the 
//array of museums

//serializer helps associate museums and
//artist

//no routes in this container so props 
//are from Artist, not from router props













