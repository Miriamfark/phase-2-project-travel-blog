import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
    
    return (
        <nav class="navbar">
            <NavLink className="navlink" exact to="/">Home</NavLink>
            <NavLink className="navlink" exact to="/locations">Locations</NavLink>
            <NavLink className="navlink" exact to="/mypassport">My Passport</NavLink>
        </nav>
    );
}

export default NavBar