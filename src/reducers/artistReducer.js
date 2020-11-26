export default function artistReducer(state = {artists: []}, action) {
    debugger
    switch (action.type) {
        case 'FETCH_ARTISTS':
            return state
        default:
            return state
    }
}

//the cases in our switch are checking 
//the action type
//