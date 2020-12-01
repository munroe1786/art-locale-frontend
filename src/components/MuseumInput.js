import React from 'react';
import {connect} from 'react-redux';

class MuseumInput extends React.Component {
    state = {
        name: '',
        location: '',
        description: ''
    }

    handleChange = () => {

    }

    render() {
        return (
            <div>
                <form>
                    <label>Museum Name:</label>
                        <input type="text"
                            name="name"
                            value={this.state.name}


                            />
                    <label>Museum Location:</label>
                        <input type="text"
                            name="location"
                            value={this.state.location}
                            
                            />
                    <label>Museum Description:</label>
                        <input type="text"
                            name="description"
                            value={this.state.description}
                            
                            />
                </form>
            </div>
        )
    }
}

export default connect(null, )(MuseumInput);

//doesn;t need mapStateToProps because props are
//coming down from MuseumsContainer
//

//controlled form can mean values assigend to your input 
//options are controlled
//by local state or the redux store