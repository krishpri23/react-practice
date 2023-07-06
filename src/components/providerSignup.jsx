
import { DevTool } from '@hookform/devtools';
import { TextField, Box, Button, Typography, FormControlLabel, Checkbox, RadioGroup, FormLabel, Radio, MenuItem } from '@mui/material';
import { styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const StyledTextField = styled(TextField)({
    padding: '0.1rem',
    marginTop: '0.5rem',
    label: {
        fontSize: '1rem',
        fontWeight: '500',
    },
})

function ProviderSignup() {
    const schema = yup.object({
        name: yup.string().required('Name is required')
            .matches(/^([^0-9]*)$/, 'Name should not contains numbers.')
            .max(40, 'Name should not exceed 40 characters'),
        email: yup.string().email('Invalid Email Address').required('Email is required'),
        password: yup.string().required('Password is required')
            .min(8, 'Min of 8 characters')
            .matches(RegExp('(.*[a-z].*)'), '1 lowercase letter')
            .matches(RegExp('(.*[A-Z].*)'), '1 uppercase letter')
            .matches(RegExp('(.*\\d.*)'), '1 number')
            .matches(RegExp('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!~]).*$'), '1 special character'),
        confirmPassword: yup.string().required('Please confirm your password')
            .oneOf([yup.ref('password')], 'Passwords must match'),
        contactNumber: yup.string().required('Contact number is required'),
        address: yup.string().required('Address is required'),
        selectState: yup.string().required('State is required'),
        country: yup.string().required('Country is required'),
        termsConditions: yup.bool().oneOf([true], 'You must agree to terms & conditions').required()
    });

    const { register, handleSubmit, control, formState } = useForm({
        defaultValues: {
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

        },
        mode: 'onBlur',
        criteriaMode: 'all',
        resolver: yupResolver(schema)
    });

    const { errors } = formState;

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Box sx={{
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%'

        }}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div >
                    <FormLabel sx={{ fontWeight: '600', color: 'black' }} required> Business Type</FormLabel>
                    <RadioGroup
                        name='businessType'
                        row
                    >
                        <FormControlLabel
                            label='Individual'
                            name='businessType'
                            value='Individual'
                            size='small'

                            control={
                                <Radio
                                />
                            }

                        >
                        </FormControlLabel>

                        <FormControlLabel
                            label='Business'
                            size='small'

                            name='businessType'
                            value='Business'
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
                        id="name"
                        size='small'
                        required
                        fullWidth
                        {...register('name')}
                    />
                    <Typography variant='h4'>{errors.name?.message} </Typography>
                </div>

                <div >
                    <StyledTextField
                        label='Email Address'
                        name="email"
                        id="email"
                        size='small'
                        fullWidth
                        type='email'
                        required
                        {...register('email')}

                    />
                    <Typography variant='h4'>{errors.email?.message} </Typography>
                </div>

                <div>
                    <StyledTextField
                        type="password"
                        id="password"
                        label='Password'
                        name="password"
                        size='small'
                        fullWidth
                        required
                        {...register('password')}
                    />
                    <Typography variant='h4'>{errors.password?.message} </Typography>
                </div>

                <div >
                    <StyledTextField
                        label='Confirm password'
                        type="password"
                        size='small'
                        fullWidth
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        {...register('confirmPassword')}
                    />
                    <Typography variant='h4'>{errors.confirmPassword?.message} </Typography>
                </div>

                <div >
                    <StyledTextField
                        label='Contact number'
                        type="number"
                        size='small'
                        fullWidth
                        name="contactNumber"
                        id="contactNumber"
                        required

                        {...register('contactNumber')}
                    />
                    <Typography variant='h4'>{errors.contactNumber?.message} </Typography>
                </div>

                <div >
                    <StyledTextField
                        label='Address'
                        type=" text"
                        size='small'
                        fullWidth
                        name='address'
                        id="address"
                        required
                        {...register('address')}
                    />
                    <Typography variant='h4'>{errors.address?.message} </Typography>
                </div>


                <div >
                    <StyledTextField
                        label='Select State'
                        select
                        type="text"
                        size='small'
                        fullWidth
                        name='selectState'
                        id="selectState"
                        required
                        {...register('selectState')}
                        defaultValue={''}

                    >

                        <MenuItem value='california'>California</MenuItem>
                        <MenuItem value='newyork'>New York</MenuItem>
                    </StyledTextField>
                    <Typography variant='h4'>{errors.selectState?.message} </Typography>
                </div>

                <div >
                    <StyledTextField
                        label='Select Country'
                        select
                        type=" text"
                        size='small'
                        fullWidth
                        name="country"
                        id="country"
                        required
                        {...register('country')}
                        defaultValue={''}

                    >
                        <MenuItem value='usa'>United States of America</MenuItem>
                        <MenuItem value='uk'> United Kingdom </MenuItem>

                    </StyledTextField>
                    <Typography variant='h4'>{errors.country?.message} </Typography>
                </div>

                <div >
                    <FormControlLabel
                        label='I accept terms & conditions'
                        control={
                            <Checkbox
                                required
                                name='termsConditions'
                                id="termsConditions"
                                {...register('termsConditions')}
                            />}
                    ></FormControlLabel>
                    <Typography variant='h4'>{errors.termsConditions?.message} </Typography>
                </div>
                <Button id="btn" type='submit' variant='contained' fullWidth> Signup </Button>
            </form >
            <DevTool control={control}></DevTool>
        </Box >

    )
}

export default ProviderSignup