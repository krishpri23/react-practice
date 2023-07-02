// import React from 'react'

import { Button, Checkbox, MenuItem, TextField, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';

import { useState } from 'react';
import { styled } from '@mui/material';


const StyledTextField = styled(TextField)({
    padding: '0.1rem',
    marginTop: '1rem',
    label: {
        fontSize: '1rem',
        fontWeight: '500',
    },

})

function ProviderSignup() {

    // const [signupFormData, setSignupFormData] = useState({
    //     businessType: '',
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
    const [stateVal, setStateVal] = useState('')

    const handleStateChange = (event) => {
        setStateVal(event.target.value)
        console.log(event.target.value);
    }


    return (
        <div className=" provider-signup">

            <form >
                <div className="form-control" >
                    <FormLabel sx={{ fontWeight: '600', color: 'black' }}> Business Type</FormLabel>
                    <RadioGroup
                        name='business-type'
                        row

                    >
                        <FormControlLabel control={<Radio size='small' />} label='Individual' value='Individual'></FormControlLabel>
                        <FormControlLabel control={<Radio size='small' />} label='Business' value='Business'></FormControlLabel>
                    </RadioGroup >
                </div>

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
                    <StyledTextField
                        label='Address'
                        type=" text"
                        size='small'
                        required

                    />
                </div>


                <div className="form-control">
                    <StyledTextField
                        label='Select State'
                        select
                        type=" text"
                        size='small'
                        value={stateVal}
                        onChange={handleStateChange}
                        required
                    >

                        <MenuItem value='california'>California</MenuItem>
                        <MenuItem value='newyork'>New York</MenuItem>
                    </StyledTextField>
                </div>

                <div className="form-control">
                    <StyledTextField
                        label='Select Country'
                        select
                        type=" text"
                        size='small'
                        id=" country"
                        required

                    >
                        <MenuItem value='usa'>United States of America</MenuItem>
                        <MenuItem value='uk'> United Kingdom </MenuItem>
                    </StyledTextField>
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

export default ProviderSignup