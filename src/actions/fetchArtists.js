export function fetchArtists() {
    fetch('http://localhost:3000/api/v1/artists')
    .then(res => res.json())
    .then(data => console.log(data))
}

//action creator is just a function
//we dispatch an action 
//an action creator creates an action
//object and then that action object will 
//be dipatched to our reducer which will then
//return our new version of the state
//based on the action that we set