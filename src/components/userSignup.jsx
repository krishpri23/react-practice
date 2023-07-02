// import React from 'react'

import { Button, Checkbox, TextField, FormControlLabel } from '@mui/material';

import { styled } from '@mui/material';
// import { useState } from 'react';



const StyledTextField = styled(TextField)({
    padding: '0.1rem',
    marginTop: '1rem',
    label: {
        fontSize: '1rem',
        fontWeight: '500',
    },

})

function UserSignup() {

    // const [signupFormData, setSignupFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     contact: '',
    //     address: '',
    //     selectState: '',
    //     country: '',
    //     termsConditions: ''

    // })
    // const [stateVal, setStateVal] = useState('')

    // const handleStateChange = (event) => {
    //     setStateVal(event.target.value)
    //     console.log(event.target.value);
    // }


    return (
        <div className=" User-signup" >

            <form>

                <div className="form-control" >
                    <StyledTextField
                        label='Name'
                        id=" name"
                        size='small'
                        required
                    />

                </div>

                <div className="form-control">

                    <StyledTextField
                        label='Email Address'
                        name=" email"
                        size='small'
                        required
                    />
                </div>

                <div className="form-control">

                    <StyledTextField
                        type="password"
                        label='Password'
                        id=" password"
                        size='small'
                        required
                    />

                </div>

                <div className="form-control">

                    <StyledTextField
                        label='Confirm password'
                        type="password"
                        size='small'
                        id=" confirmpassword"
                        required

                    />
                </div>

                <div className="form-control">
                    <StyledTextField
                        label='Contact number'
                        type=" number"
                        size='small'
                        id=" contactNumber"
                        required

                    />
                </div>
                <div className="form-control">
                    <FormControlLabel
                        label='I accept terms & conditions'
                        control={
                            <Checkbox
                                required

                            />}
                    ></FormControlLabel>

                </div>
                <Button id="btn" type='submit' variant='contained' fullWidth> Signup </Button>

            </form >
        </div >

    )
}

export default UserSignup