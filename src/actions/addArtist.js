export const addArtist = (data) => {
    debugger
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/artists`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        

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



