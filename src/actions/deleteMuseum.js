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