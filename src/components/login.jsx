
// import { useState } from 'react'
// import Logo from '../assets/sb-logo-resized.png';
import './create-account'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../styles/login.css'
import banner from '../assets/login.svg'


function Login() {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            'email': '',
            'password': '',
        }
    })

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='login'>
            <img src={banner} alt="banner-img" />
            <form className='login-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2>Hi, Welcome back!</h2>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        label='Email Address'
                        name='email'
                        required
                        {...register('email')}
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        label='Password'
                        name='password'
                        required
                        {...register('email')}
                    />
                </div>
                <p><Link className='forgot-password' to='/'> Forgot Password? </Link></p>
                <button id='btn' type='submit'> Login </button>
                <h3> Don`t have an account yet? <Link to='/create'> Sign up </Link></h3>
            </form >
        </div >
    );
}

export default Login
