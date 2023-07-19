import { Link, NavLink, Form } from 'react-router-dom';
import Logo from '/sacredbox-logo.png';


function NavBar({ login }) {
    return (
        <nav>
            <ul>
                <Link to='/'><img className='logo' src={Logo} alt="sb-logo" /></Link>
                {
                    login?.email && login ?
                        (
                            <Form action='/logout' method='post' onSubmit={(event) => {
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