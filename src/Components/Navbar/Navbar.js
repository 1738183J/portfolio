import React from "react";
import './Navbar.scss';

const Navbar = props => {

    return (
        
        <div className='navbar'>
            <ul className='LinksOnePager'>
                <li>HOME</li>
                <li>ABOUT ME</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
};

export default Navbar;
