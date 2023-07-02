
import { Link } from 'react-router-dom';


import { useState } from 'react';
import { Button } from '@mui/material';
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

    const buttonStyles = {
        padding: '0.7rem'

    }

    return (
        <div className="signup-form">
            <h2>Sign up</h2>
            <p> Already have an account yet? <Link to='/'> Sign in </Link> </p>
            <p>Which one are you?</p>
            <div className="create-profile">

                <Button type='submit' variant='outlined' onClick={handleUserForm} style={buttonStyles}>  User </Button>
                <Button type='submit' variant='outlined' onClick={handleProviderForm} style={buttonStyles}> Provider </Button>

            </div>


            {userForm && <UserSignup />}
            {providerForm && <ProviderSignup />}

        </div>
    )
}

export default CreateAccount; 