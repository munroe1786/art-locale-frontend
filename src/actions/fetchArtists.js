export function fetchArtists() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/artists')
        .then(res => res.json())
        .then(artists => dispatch({
            type: 'FETCH_ARTISTS',
            payload: artists
        }))
    }
}
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