import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
    
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/locations">Locations</NavLink>
            <NavLink exact to="/locations/new">Add A New Travel Location</NavLink>
        </nav>
    );
}

export default NavBar