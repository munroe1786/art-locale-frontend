export const editArtist = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/artists/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(artist => dispatch({
            type: 'EDIT_ARTIST',
            payload: artist
        }))
    }
}