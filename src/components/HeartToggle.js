import React from 'react'

class HeartToggle extends React.Component {
        
        state = {
            display: false
        }

        handleClick = () => {
            this.setState(previousState => {
                return {
                    display: !previousState.display
                }
            })
        }

        render() {
            return(
                <div>
                    <button onClick={this.handleClick}>{this.state.display ? '♥' : '♡'}</button>
                </div>
            )
    }
}


export default HeartToggle;