import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
    
    return (
        <nav class="navbar">
            <NavLink className="logo" exact to="/">Globetrotter</NavLink>
            <NavLink className="navlink" exact to="/locations">Locations</NavLink>
            <NavLink className="navlink" exact to="/mypassport">My Passport</NavLink>
            <NavLink className="navlink" exact to="/mybucketlist">My Bucket List</NavLink>
        </nav>
    );
}

export default NavBar