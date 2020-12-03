import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <Link to='/artists' style={{paddingRight: '10px'}}>Artists</Link>
            <Link to='/artists/new'> Add Artist</Link>
        </div>
    )
}

export default NavBar;