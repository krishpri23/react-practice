// import React from 'react'

import { Button, Checkbox, TextField, FormControlLabel, Box } from '@mui/material';

import { styled } from '@mui/material';
import { useState } from 'react';
import '../styles/Signup.css'


const StyledTextField = styled(TextField)({
    padding: '0.1rem',
    marginTop: '1rem',
});


function UserSignup() {

    const [signupFormData, setSignupFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        contact: '',
        termsConditions: ''

    })

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        contactNumber: '',
        termsConditions: '',
    });

    const validateName = () => {
        if (signupFormData.name.trim() === '') {
            return 'Name is required';
        }
        return '';
    }

    const validateEmail = () => {
        if (!signupFormData.email.match(/^\S+@\S+\.\S+$/)) {
            return 'Invalid email format';
        }
        return '';
    }
    const validatePassword = () => {
        if (signupFormData.password.length < 8) {
            return 'Password should be atleast 8 characters';
        }
        return '';
    }

    const validateConfirmPassword = () => {
        if (!(signupFormData.password === signupFormData.confirmPassword)) {
            return 'Password does not match';
        }
        return '';
    }

    const validateContactNumber = () => {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(signupFormData.contactNumber)) {
            return 'Invalid contact number'
        }
        return ''
    }
    const validateTerms = () => {
        if (!signupFormData.termsConditions) {
            return 'Please agree to terms and conditions';
        }
        return ''
    }
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setSignupFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })

        setFormErrors(prevFormErros => {
            return {
                ...prevFormErros,
                [name]: ''
            }
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const nameError = validateName();
        const emailError = validateEmail();
        const passwordError = validatePassword();
        const confirmPasswordError = validateConfirmPassword();
        const contactError = validateContactNumber();
        const termsError = validateTerms();

        if (nameError || emailError || passwordError || contactError || confirmPasswordError || termsError) {
            setFormErrors({
                name: nameError,
                email: emailError,
                password: passwordError,
                contactNumber: contactError,
                confirmPassword: confirmPasswordError,
                termsConditions: termsError,
            })
        }
        else {
            console.log(signupFormData);
        }

    }

    return (
        <Box sx={{
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>

            <form onSubmit={handleSubmit}>

                <div>
                    <StyledTextField
                        label='Name'
                        name="name"
                        required
                        value={signupFormData.name}
                        onChange={handleChange}
                        size='small'
                        fullWidth
                    />
                    {formErrors.name && <span className='error'>{formErrors.name}</span>}

                </div>

                <div>

                    <StyledTextField
                        label='Email Address'
                        name="email"
                        size='small'
                        fullWidth
                        required
                        value={signupFormData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <span className='error'> {formErrors.email} </span>}
                </div>

                <div >

                    <StyledTextField
                        type="password"
                        label='Password'
                        name="password"
                        size='small'
                        fullWidth
                        required
                        value={signupFormData.password}
                        onChange={handleChange}

                    />
                    {formErrors.password && <span className='error'>{formErrors.password}</span>}

                </div>

                <div>

                    <StyledTextField
                        label='Confirm password'
                        type="password"
                        size='small'
                        fullWidth
                        name="confirmPassword"
                        required
                        value={signupFormData.confirmPassword}
                        onChange={handleChange}
                    />
                    {formErrors.confirmPassword && <span className='error'> {formErrors.confirmPassword} </span>}
                </div>

                <div>
                    <StyledTextField
                        label='Contact number'
                        type="number"
                        size='small'
                        fullWidth

                        name="contactNumber"
                        required
                        value={signupFormData.contactNumber}
                        onChange={handleChange}
                    />
                    {formErrors.contactNumber && <span className='error'> {formErrors.contactNumber} </span>}
                </div>
                <div >
                    <FormControlLabel
                        label='I accept terms & conditions'
                        value={signupFormData.termsConditions}
                        onChange={handleChange}
                        control={
                            <Checkbox
                                required

                            />}
                    ></FormControlLabel>

                </div>
                <Button id="btn" type='submit' variant='contained' fullWidth> Signup </Button>
            </form >
        </Box >

    )
}

export default UserSignup