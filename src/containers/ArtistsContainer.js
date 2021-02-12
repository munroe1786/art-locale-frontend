import React from 'react';
import Artists from '../components/Artists';
import ArtistInput from '../components/ArtistInput';
import Artist from '../components/Artist';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {fetchArtists} from '../actions/fetchArtists';
import NavBar from '../components/NavBar';

class ArtistsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchArtists()
    }

    render() {
        return(
            <div>
                <NavBar />
                <Switch>
                <Route exact path='/' render={() => {
                        return (
                          <Redirect to='/artists' />
                        )
                    }}
                    />
                    <Route path='/artists/new' component={ArtistInput}/>
                    <Route path='/artists/:id' render={(routerProps) => <Artist {...routerProps} artists={this.props.artists}/> } />
                    <Route path='/artists' render={(routerProps) => <Artists {...routerProps} artists={this.props.artists}/> } />
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps, {fetchArtists})(ArtistsContainer);