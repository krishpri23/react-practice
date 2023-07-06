// import React from 'react'

import { Button, Checkbox, MenuItem, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, Box } from '@mui/material';

import { useState } from 'react';
import { styled } from '@mui/material';
import '../styles/Signup.css'


const StyledTextField = styled(TextField)({
    padding: '0.1rem',
    marginTop: '0.5rem',
    label: {
        fontSize: '1rem',
        fontWeight: '500',
    },
    fullWidth: 'true',
    size: 'small',

})

function ProviderSignup() {

    const [signupFormData, setSignupFormData] = useState({
        businessType: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        contactNumber: '',
        address: '',
        selectState: '',
        country: '',
        termsConditions: true,


    });

    const [formErrors, setFormErrors] = useState({
        businessType: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        contactNumber: '',
        address: '',
        selectState: '',
        country: '',
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
    const validateState = () => {

        if (signupFormData.selectState === '') {
            return 'Please select a state';
        }

    }
    const validateCountry = () => {
        if (!signupFormData.country) {
            return 'Please select a country';
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
        const stateError = validateState();
        const countryError = validateCountry();
        const termsError = validateTerms();

        if (nameError || emailError || passwordError || contactError || confirmPasswordError || stateError || countryError || termsError) {
            setFormErrors({
                name: nameError,
                email: emailError,
                password: passwordError,
                contactNumber: contactError,
                confirmPassword: confirmPasswordError,
                selectState: stateError,
                country: countryError,
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
                <div >
                    <FormLabel sx={{ fontWeight: '600', color: 'black' }} required> Business Type</FormLabel>
                    <RadioGroup
                        name='businessType'
                        row
                    >
                        <FormControlLabel
                            label='Individual'
                            onChange={handleChange}
                            name='businessType'
                            value='Individual'
                            size='small'
                            fullWidth
                            checked={signupFormData.businessType === 'Individual'}
                            control={
                                <Radio />
                            }

                        >
                        </FormControlLabel>

                        <FormControlLabel
                            label='Business'
                            size='small'
                            onChange={handleChange}
                            name='businessType'
                            value='Business'

                            checked={signupFormData.businessType === 'Business'}
                            control={
                                <Radio />
                            }
                        >
                        </FormControlLabel>
                    </RadioGroup >

                </div>

                <div  >
                    <StyledTextField
                        label='Name'
                        name="name"
                        size='small'
                        required
                        value={signupFormData.name}
                        onChange={handleChange}
                        fullWidth
                    />
                    {formErrors.name && <span className='error'>{formErrors.name}</span>}
                </div>

                <div >
                    <StyledTextField
                        label='Email Address'
                        name="email"
                        size='small'
                        fullWidth
                        type='email'
                        required
                        value={signupFormData.email}
                        onChange={handleChange}

                    />
                    {formErrors.email && <span className='error'> {formErrors.email} </span>}
                </div>

                <div>
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

                <div >
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

                <div >
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
                    <StyledTextField
                        label='Address'
                        type=" text"
                        size='small'
                        fullWidth
                        name='address'
                        required
                        value={signupFormData.address}
                        onChange={handleChange}

                    />
                </div>


                <div >
                    <StyledTextField
                        label='Select State'
                        select
                        type="text"
                        size='small'
                        fullWidth
                        name='selectState'
                        value={signupFormData.selectState}
                        onChange={handleChange}
                        required
                    >

                        <MenuItem value='california'>California</MenuItem>
                        <MenuItem value='newyork'>New York</MenuItem>
                    </StyledTextField>
                    {formErrors.selectState && <span className='error'> {formErrors.selectState} </span>}
                </div>

                <div >
                    <StyledTextField
                        label='Select Country'
                        select
                        type=" text"
                        size='small'
                        fullWidth
                        name="country"
                        required
                        value={signupFormData.country}
                        onChange={handleChange}


                    >
                        <MenuItem value='usa'>United States of America</MenuItem>
                        <MenuItem value='uk'> United Kingdom </MenuItem>
                    </StyledTextField>
                    {formErrors.country && <span className='error'> {formErrors.country} </span>}
                </div>

                <div >
                    <FormControlLabel
                        label='I accept terms & conditions'
                        control={
                            <Checkbox
                                required
                                checked={signupFormData.termsConditions}
                                name='termsConditions'
                                onChange={handleChange}
                                fullWidth
                            />}
                    ></FormControlLabel>
                    {formErrors.termsConditions && <span className='error'> {formErrors.termsConditions} </span>}

                </div>
                <Button id="btn" type='submit' variant='contained' fullWidth> Signup </Button>
            </form >
        </Box >

    )
}

export default ProviderSignup