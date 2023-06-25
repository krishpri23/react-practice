// import React from 'react'
import Logo from '../assets/sb-logo-resized.png'
import { Link } from 'react-router-dom';

// import React from 'react'

function Login() {
    return (
        <div className="login-form">
            <img className="logo-image" src={Logo} alt="sacredbox-logo" />
            <h2>Hi, Welcome Back!</h2>

            <form className="login" >
                <div className="form-control">
                    <label htmlFor="email"> Email Address </label>
                    <input
                        type="text"
                        placeholder="hello@email.com"
                        id='email'
                        name='email' />

                </div>

                <div className="form-control">
                    <label htmlFor="password" > Password </label>
                    <input
                        type="password"
                        placeholder="8+ characters required"
                        id='password'
                        name='password' />

                </div>
            </form>

            <a className='forgot-password'>Forgot Password?</a>
            <button type='submit'> Login </button>
            <p> Don`t have an account yet? <Link to='/create'> Sign up </Link></p>
        </div >);

}

export default Login
