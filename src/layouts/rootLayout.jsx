// import React from 'react'

import Logo from '/sacredbox-logo.png';
import '../styles/rootLayout.css'
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { fetchData } from '../utils/localStorage';


export function RootLoader() {
    const login = fetchData('login');
    console.log(login);
    return { login };
}

function RootLayout() {

    const { login } = useLoaderData();
    // console.log(login.email);

    return (
        <div className='root'>
            <header>
                <nav>
                    <ul>
                        <Link to='/'><img className='logo' src={Logo} alt="sb-logo" /></Link>
                        {
                            login?.email ? <button className='btn no-background'> Priya </button>
                                :
                                <div className='signup-btn'>
                                    <li ><NavLink to='/login'>  Sign in </NavLink> </li>
                                    <li ><NavLink to='/create'> Register </NavLink></li>
                                </div>
                        }
                        {/* <div className='signup-btn'>
                            <li ><NavLink to='/login'>  Sign in </NavLink> </li>
                            <li ><NavLink to='/create'> Register </NavLink></li>
                        </div> */}

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