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