export default function artistReducer(state = {artists: []}, action) {
    //debugger
    switch (action.type) {
        case 'FETCH_ARTISTS':
            return {artists: action.payload}
        default:
            return state
    }
}

//the cases in our switch are checking 
//the action type
//

//whatever we return from our reducer
//will be our new state

//want artists to point to the array 
//that came back from the fetch request
//action.payload is an array of artist objects
//artists is the key and the array is the value
