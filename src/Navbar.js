import React from 'react';
import { Link } from 'react-router-dom';  

const Navbar = () => { 
    return (
        <nav className="navbar">
            <h1>My Music AI</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/register">Register</Link>
            </div> 
        </nav>
    );
};
export default Navbar;