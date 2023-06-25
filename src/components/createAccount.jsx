
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UserSignup from './userSignup';
import ProviderSignup from './providerSignup';
// import UserSignup from './UserSignup';

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

    return (
        <div className="signup-form">
            <h2>Sign up</h2>
            <p> Already have an account yet? <Link to='/'> Sign in </Link> </p>
            <p>Which one are you?</p>
            <div className="create-profile">
                <div onClick={handleUserForm}>
                    <h3>User</h3>
                </div>
                <div onClick={handleProviderForm}>
                    <h3> Provider </h3>
                </div>
            </div>


            {userForm && <UserSignup />}
            {providerForm && <ProviderSignup />}

        </div>
    )
} 
 
export default CreateAccount; 