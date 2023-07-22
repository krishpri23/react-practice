import { Link, NavLink, Form } from 'react-router-dom';
import Logo from '/sacredbox-logo.png';
import '../styles/navbar.css';

function NavBar({ login }) {
    return (
        <nav className='navbar'>
            <ul>
                <Link to='/'><img className='logo' src={Logo} alt="sb-logo" /></Link>
                {
                    login?.email && login ?
                        (
                            <Form className='signup-btn' action='/logout' method='post' onSubmit={(event) => {
                                if (!confirm('Are you sure you want to logout?')) {
                                    event.preventDefault();
                                }
                            }} >
                                <button className='btn profile'> Shruthi Laya </button>
                                <button className='btn logout' type='submit' > Log out</button>

                            </Form>
                        )
                        :
                        <div className='signup-btn'>
                            <li ><NavLink to='/login'>  Sign in </NavLink> </li>
                            <li ><NavLink to='/create'> Register </NavLink></li>
                        </div>
                }
            </ul>
        </nav>
    )
}

export default NavBar