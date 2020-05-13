import React from 'react';
import './NavBar.css';

const logo = require('../../pic/logga.png');
const NavBar = () => {

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="menu">
                <ul className='navbar-items'>

                </ul>
            </div>
        </div>
    );
}

export default NavBar;