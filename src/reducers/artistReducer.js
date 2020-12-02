export default function artistReducer(state = {artists: []}, action) {
    //debugger
    switch (action.type) {
        case 'FETCH_ARTISTS':
            return {artists: action.payload}
        case 'ADD_ARTIST':
            return {...state, artists: [...state.artists, action.payload]}
        case 'ADD_MUSEUM':
            let artists = state.artists.map(artist => {
                if (artist.id === action.payload.id) {
                    return action.payload
                } else {
                    return artist
                }
            })
            return {...state, artists: artists}
        case 'DELETE_MUSEUM':
            let artistsTwo = state.artists.map(artist => {
                if (artist.id === action.payload.id) {
                    return action.payload
                } else {
                    return artist
                }
            })
            return {...state, artists: artistsTwo}
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

//add museum involves replacing the entire account
//rather than shoveling the museum onto the 
//account