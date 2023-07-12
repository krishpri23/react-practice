// import React from 'react'

import Logo from '../assets/sb-logo-resized.png';
import '../styles/root-layout.css'
import { Link, NavLink, Outlet } from 'react-router-dom';

function RootLayout() {

    return (
        <div className='root'>
            <header>
                <nav>
                    <ul>
                        <Link to='/'><img src={Logo} alt="sb-logo" /></Link>
                        <li ><NavLink to='/login'>  Sign in </NavLink> </li>
                        <li ><NavLink to='/create'> Register </NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>

    )
}

export default RootLayout