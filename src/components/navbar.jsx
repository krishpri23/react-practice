// import React from 'react'

import Logo from '../assets/sb-logo-resized.png';
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom/dist';

function AppBar() {

    return (
        <header>
            <nav>
                <ul>
                    <img src={Logo} alt="sb-logo" />
                    <li ><NavLink to='/login'>  Sign in </NavLink> </li>
                    <li ><NavLink to='/create'> Register </NavLink></li>
                </ul>

            </nav>
        </header>

    )
}

export default AppBar