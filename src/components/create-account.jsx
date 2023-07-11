
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProviderSignup from './provider-signup';
import UserSignup from './user-signup';

import '../styles/create-account.css'

function CreateAccount() {
    const [userForm, setUserForm] = useState(true);
    const [providerForm, setProviderForm] = useState(false);

    const handleUserForm = () => {
        setUserForm(true);
        setProviderForm(false);
    }

    const handleProviderForm = () => {
        setProviderForm(true);
        setUserForm(false);
    }

    return (
        <div className='create-form'>
            <h1> Sign Up</h1>
            <h4> Already have an account yet? <Link to='/login'> Sign in </Link> </h4>
            <h4>Which one are you?</h4>
            <div className='select-type'>

                <button type='button' onClick={handleUserForm}>  User </button>
                <button type='button' onClick={handleProviderForm} > Provider </button>

            </div>
            {userForm && <UserSignup />}
            {providerForm && <ProviderSignup />}
        </div>
    )
}

export default CreateAccount; 