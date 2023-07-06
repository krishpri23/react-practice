
import { DevTool } from '@hookform/devtools';
import { TextField, Box, Button, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

function UserSignup() {

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
        termsConditions: yup.bool().oneOf([true], 'You must agree to terms & conditions').required()
    });


    const StyledTextField = styled(TextField)({
        padding: '0.1rem',
        marginTop: '1rem',
        label: {
            fontSize: '1rem',
            fontWeight: '500',
        },
    });
    const { register, handleSubmit, control, formState } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            contactNumber: '',
            termsConditions: '',

        },
        mode: 'onChange',
        criteriaMode: 'all',
        resolver: yupResolver(schema)
    });


    const { errors, isValid, } = formState;


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

                <div>
                    <StyledTextField
                        label='Name'
                        name="name"
                        id="name"
                        required
                        size='small'
                        fullWidth
                        {...register('name')}
                    />
                    <Typography variant='h4'>{errors.name?.message} </Typography>

                </div>

                <div>

                    <StyledTextField
                        label='Email Address'
                        name="email"
                        size='small'
                        fullWidth
                        required
                        {...register('email')}
                    />
                    <Typography variant='h4'>{errors.email?.message} </Typography>
                </div>


                <div >

                    <StyledTextField
                        type="password"
                        label='Password'
                        name="password"
                        size='small'
                        fullWidth
                        required
                        {...register('password')}

                    />
                    <Typography variant='h4'>{errors.password?.message} </Typography>
                </div>

                <div>

                    <StyledTextField
                        label='Confirm password'
                        type="password"
                        size='small'
                        fullWidth
                        name="confirmPassword"
                        required
                        {...register('confirmPassword')}

                    />
                    <Typography variant='h4'>{errors.confirmPassword?.message} </Typography>

                </div>

                <div>
                    <StyledTextField
                        label='Contact number'
                        type="number"
                        size='small'
                        fullWidth

                        name="contactNumber"
                        required
                        {...register('contactNumber')}
                    />
                    <Typography variant='h4'>{errors.contactNumber?.message} </Typography>
                </div>
                <div >
                    <FormControlLabel
                        label='I accept terms & conditions'
                        name='termsConditions'
                        control={
                            <Checkbox
                                required

                            />}
                    ></FormControlLabel>

                </div>
                <Button id="btn" type='submit' variant='contained' fullWidth disabled={!isValid}> Signup </Button>
            </form>
            <DevTool control={control} />
        </Box>
    )
}
export default UserSignup