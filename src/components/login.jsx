// import React from 'react'
import Logo from '../assets/sb-logo-resized.png';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';


function Login() {

    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;


    const onSubmit = (data) => {
        console.log('form is submitted', data)
    }
    return (
        <div className="login-form">
            <img className="logo-image" src={Logo} alt="sacredbox-logo" />
            <h2>Hi, Welcome Back!</h2>

            <form className="login" onSubmit={handleSubmit(onSubmit)} noValidate >
                <div className="form-control">
                    <label htmlFor="email"> Email Address </label>
                    <input
                        type="text"
                        placeholder="hello@email.com"
                        id='email'
                        {...register('email', {
                            pattern: {
                                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                message: 'Invalid email format'
                            },
                            required: {
                                value: true,
                                message: 'Email Address is required'
                            }
                        })}
                    />
                </div>

                <p className='error'>{errors.email?.message}</p>

                <div className="form-control">
                    <label htmlFor="password" > Password </label>
                    <input
                        type="password"
                        placeholder="8+ characters required"
                        id='password'
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Password is required'
                            }
                        })} />

                </div>

                <p className='error'>{errors.password?.message}</p>


                <a className='forgot-password'>Forgot Password?</a>
                <button type='submit'> Login </button>
                <p> Don`t have an account yet? <Link to='/create'> Sign up </Link></p>

                <DevTool control={control} />
            </form>
        </div >);

}

export default Login
