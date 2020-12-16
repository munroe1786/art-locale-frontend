export const addMuseum = (museum, artistId) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/artists/${artistId}/museums`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(museum)
        })
        .then(response => response.json())
        .then(artist => dispatch({type: 'ADD_MUSEUM', payload: artist}))
    }
}


















//response will have the artist associated with
//this new museum because of how the backend 
//is set up - artist has many museums

//take that artist and dispatch it to our reducer
//saves some work in our reducer

//history.push can work as a redirect 