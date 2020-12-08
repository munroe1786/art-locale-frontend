export const deleteArtist = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/artists/${artist.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(artist => dispatch({
            type: 'DELETE_ARTIST',
            payload: artist
        }))
    }
}