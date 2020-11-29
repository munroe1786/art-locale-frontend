export const addArtist = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/artists', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(artist => dispatch({
            type: 'ADD_ARTIST',
            payload: artist
        }))
    }
}


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



