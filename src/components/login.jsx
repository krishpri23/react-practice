// import { useState } from 'react'
import Logo from '../assets/sb-logo-resized.png';
import { TextField, Button, styled, Box, Typography } from '@mui/material';
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

    const StyledBox = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
    })
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '400px',
            justifyContent: 'center',
            m: '3rem'
        }}>
            <Box
                src={Logo}
                component='img'
                sx={{
                    width: '180px',
                    height: '60px',
                    m: 0,
                }} />
            <Typography variant='h1'>Hi, Welcome Back!</Typography>

            <form>
                <StyledBox>
                    <StyledTextField
                        label='Email Address'
                        type="text"
                        name='email'
                        required
                        size='small'
                        fullWidth
                    />
                </StyledBox>

                <StyledBox>
                    <StyledTextField
                        label="Password"
                        type='password'
                        name='password'
                        required
                        size='small'
                        fullWidth
                    />
                </StyledBox>

                <Link className='forgot-password' to='/'>  <Typography variant='h3' sx={{
                    mt: 3,
                    mr: 1,
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>Forgot Password? </Typography></Link>
                <Button id="btn" type='submit' variant='contained' fullWidth> Login </Button>
                <Typography variant='body2'> Don`t have an account yet? <Link to='/create'> Sign up </Link></Typography>

            </form>
        </Box>
    );
}

export default Login
