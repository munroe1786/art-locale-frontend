export const deleteMuseum = (museumId, artistId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/artists/${artistId}/museums/${museumId}`, {
            method: 'DELETE'   
        })
        .then(response => response.json())
        .then(artist => dispatch({
            type: 'DELETE_MUSEUM',
            payload: artist
        }))
    }
}



//this action needs the museum ID and the artist
//ID since they are associated

//mimicing add museum - which instead of sending
//back the museum, we sent back the artist 
//from the backend, which simplified what
//we needed to do in the reducer