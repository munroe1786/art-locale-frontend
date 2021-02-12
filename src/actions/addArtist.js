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