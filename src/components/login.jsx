
// import { useState } from 'react'
// import Logo from '../assets/sb-logo-resized.png';
import './create-account'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../styles/login.css'
import banner from '../assets/search.svg'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

function Login() {

    const navigate = useNavigate();

    const schema = yup.object({
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup.string().required('Password is required')
    })

    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            'email': '',
            'password': '',
        },
        mode: 'onchange',
        criteriaMode: 'all',
        resolver: yupResolver(schema)
    })

    const { errors } = formState;

    const onSubmit = (data) => {
        console.log(data);
        navigate('/');

    }

    const onError = (error) => {
        console.log(error);
    }

    return (
        <div className='login'>
            <img src={banner} alt="banner-img" />
            <form className='login-form' onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <h2>Hi, Welcome back!</h2>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name='email'
                        required
                        {...register('email')}
                    />
                    <p className='error' >{errors.email?.message} </p>
                </div>

                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name='password'
                        required
                        {...register('password')}
                    />
                    <p className='error'>{errors.password?.message} </p>
                </div>
                <p><Link className='forgot-password' to='/'> Forgot Password? </Link></p>
                <button id='btn' type='submit'> Login </button>
                <h3> Don`t have an account yet? <Link to='/create'> Sign up </Link></h3>
            </form >

        </div >
    );
}

export default Login
