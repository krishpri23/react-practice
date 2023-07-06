
import { Link } from 'react-router-dom';


import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import ProviderSignup from './ProviderSignup';
import UserSignup from './UserSignup';

function CreateAccount() {
    const [userForm, setUserForm] = useState(false);
    const [providerForm, setProviderForm] = useState(false);

    const handleUserForm = () => {
        setUserForm(true)
        setProviderForm(false)
    }

    const handleProviderForm = () => {
        setUserForm(false)
        setProviderForm(true)
    }

    // const buttonStyles = {
    //     padding: '0.7rem'

    // }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textTransform: 'capitalize',
            padding: '0.9rem 2rem',
            maxWidth: '700px',
            m: 'auto auto',
            backgroundColor: 'whitesmoke',
        }}>
            <Typography variant='h1' sx={{ mt: 2, }}> Sign Up</Typography>
            <Typography variant='body2'> Already have an account yet? <Link to='/'> Sign in </Link> </Typography>
            <Typography variant='body2'>Which one are you?</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>

                <Button type='submit' variant='outlined' onClick={handleUserForm} >  User </Button>
                <Button type='submit' variant='outlined' onClick={handleProviderForm} > Provider </Button>

            </Box>

            {userForm && <UserSignup />}
            {providerForm && <ProviderSignup />}

        </Box>
    )
}

export default CreateAccount; 