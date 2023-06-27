// import React from 'react'

import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

function ProviderSignup() {

    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
        console.log('form is submitted', data)
    }
    return (
        <div className=" provider-signup" >

            <form>
                <div className="form-control" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name" >Full Name</label>
                    <input
                        placeholder=" please enter your name"
                        id=" name"
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'please enter your name'
                            }
                        })}
                    />

                </div>
                <p className='error'>{errors.name?.message}</p>
                <div className="form-control">
                    <label htmlFor="email">Email Address</label>
                    <input
                        placeholder=" please enter your email id"
                        name=" email"
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
                        id=" password"
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Password is required'
                            }
                        })}
                    />

                </div>
                <p className='error'>{errors.password?.message}</p>
                <div className="form-control">
                    <label htmlFor="confirmpassword" > Confirm Password </label>
                    <input
                        type="password"
                        placeholder="confirm password"
                        id=" confirmpassword"
                        {...register('confirmpassword', {
                            required: {
                                value: true,
                                message: 'Password is required'
                            }
                        })}
                    />
                </div>
                <p className='error'>{errors.confirmpassword?.message}</p>
                <div className="form-control">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        type=" number"
                        placeholder=" please enter your phone number"
                        id=" contactNumber"
                        {...register('contactNumber', {
                            required: {
                                value: true,
                                message: 'Contact number is required'
                            }
                        })}
                    />
                </div>
                <p className='error'>{errors.contactNumber?.message}</p>

                <div className="form-control">
                    <input
                        type=" checkbox"
                        className=" terms"
                    />
                </div>
                <button type='submit'> Signup </button>
                <DevTool control={control} />
            </form >
        </div>

    )
}

export default ProviderSignup