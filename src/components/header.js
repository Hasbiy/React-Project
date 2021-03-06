import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import Logo from '../logo.png';

function Header() {
    return(
        <header>
            <div id="logo">
                <Link to="/web">
                    <img src={Logo} alt="Js Pro Logo" width="50%"/>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/web" className="active">Web</Link>
                </li>
                <li>
                    <Link to="/desktop">Desktop</Link>
                </li>
                <li>
                    <Link to="/mobile">Mobile</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header; 