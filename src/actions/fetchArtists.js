export function fetchArtists() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/artists')
        .then(res => res.json())
        .then(artists => dispatch({
            type: 'FETCH_ARTISTS',
            payload: artists
        }))
    }
}