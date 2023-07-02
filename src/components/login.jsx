// import { useState } from 'react'
import Logo from '../assets/sb-logo-resized.png';

import { TextField, Button, styled } from '@mui/material';

import './CreateAccount'
import { Link } from 'react-router-dom';

function Login() {

    const StyledTextField = styled(TextField)({
        padding: '0.1rem',
        marginTop: '1rem',
        label: {
            fontSize: '1rem',
            fontWeight: '500',
        },

    })
    return (
        <div className="login-form">
            <img className="logo-image" src={Logo} alt="sacredbox-logo" />
            <h2>Hi, Welcome Back!</h2>

            <form className="login"   >
                <div className="form-control">
                    <StyledTextField
                        label='Email Address'
                        variant='outlined'
                        type="text"
                        id='email'
                        required
                        size='small'

                    />
                </div>

                <div className="form-control">
                    <StyledTextField
                        label="Password"
                        variant='outlined'
                        type='password'
                        id='password'
                        size='small'
                    />
                </div>

                <Link className='forgot-password' to='/'>Forgot Password?</Link>
                <Button id="btn" type='submit' variant='contained' fullWidth> Login </Button>
                <p> Don`t have an account yet? <Link to='/create'> Sign up </Link></p>


            </form>
        </div >);

}

export default Login
