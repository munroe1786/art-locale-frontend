import React from 'react';

class ArtistInput extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <label>Artist Name:</label>
                        <input type='text' placeholder='Name' /><br/>
                    <label>Style:</label>
                        <input type='text' placeholder='Style' />
                </form>
            </div>
        )
    }
}

export default ArtistInput;



















//in order to have a controlled form, you 
//can use local state or have form 
//data available in the redux store