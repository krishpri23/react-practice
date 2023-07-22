//rrd
import { Link } from 'react-router-dom';

//styles
import '../styles/signup.css';
import '/src/index.css';

//react state
import { useState } from 'react';
import UserSignup from '../components/userSignup';
import ProviderSignup from '../components/providerSignup';

function Signup() {


    const [selectedOption, setSelectedOption] = useState('service seeker');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <main>
            <div className='create-form'>
                <section>
                    <h1> Sign Up</h1>
                    <h4> Already have an account yet? <Link to='/login'> Sign in </Link> </h4>
                </section>

                <section>
                    <form action="post">
                        <div className='select-type'>

                            <input
                                className='radio-input'
                                type='radio'
                                value='service seeker'
                                onChange={handleChange}
                                checked={selectedOption === 'service seeker'}
                            />
                            <label className='radio-label' htmlFor="service seeker"> Service Seeker</label>

                            <input
                                className='radio-input'
                                type='radio'
                                value='service provider'
                                onChange={handleChange}
                                checked={selectedOption === 'service provider'}
                            />
                            <label className='radio-label' htmlFor="service provider"> Service Provider </label>
                        </div>
                    </form>

                    {
                        selectedOption === 'service seeker' ? <UserSignup /> : <ProviderSignup />
                    }
                </section>
            </div>
        </main>

    )
}

export default Signup; 