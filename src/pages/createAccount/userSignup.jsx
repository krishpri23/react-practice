
import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import '/src/styles/Signup/signup.css';
import '/src/styles/Signup/userSignup.css'
import { Link, useNavigate } from 'react-router-dom';

function UserSignup() {

    const schema = yup.object({
        firstName: yup.string().required('Name is required')
            .matches(/^([^0-9]*)$/, 'Name should not contains numbers.')
            .max(40, 'Name should not exceed 40 characters'),
        lastName: yup.string().required('Name is required')
            .matches(/^([^0-9]*)$/, 'Name should not contains numbers.')
            .max(40, 'Name should not exceed 40 characters'),
        username: yup.string().required('Username is required')
            .matches(RegExp('^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$'), 'Must begin with letters and 8-20 characters long'),
        email: yup.string().email('Invalid Email Address').required('Email is required'),
        password: yup.string().required('Password is required')
            .min(8, 'Min of 8 characters')
            .matches(RegExp('(.*[a-z].*)'), '1 lowercase letter')
            .matches(RegExp('(.*[A-Z].*)'), '1 uppercase letter')
            .matches(RegExp('(.*\\d.*)'), '1 number')
            .matches(RegExp('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!~]).*$'), '1 special character'),
        confirmPassword: yup.string().required('Please confirm your password')
            .oneOf([yup.ref('password')], 'Passwords must match'),
        termsConditions: yup.bool().oneOf([true], 'You must agree to terms & conditions').required()
    });

    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            termsConditions: true,

        },
        mode: 'onChange',
        criteriaMode: 'all',
        resolver: yupResolver(schema)
    });

    const { register, handleSubmit, control, formState } = form;
    const { errors, isSubmitted } = formState;
    const navigate = useNavigate();


    const onSubmit = (data) => {
        console.log(data);
        isSubmitted ? navigate('/login') : ' ';
    }

    const onError = (error) => {
        console.log(error);
    }

    return (

        <div>
            <form className='user-form' onSubmit={handleSubmit(onSubmit, onError)} noValidate >

                <div className='form-control'>
                    <label htmlFor="firstName"> First Name</label>
                    <input type="text"
                        name="firstName"
                        id="firstName"
                        required
                        {...register('firstName')} />
                    <p className='error'>{errors.firstName?.message} </p>
                </div>

                <div className='form-control'>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        name="lastName"
                        id="lastName"
                        required
                        {...register('lastName')}
                    />
                    <p className='error'>{errors.lastName?.message} </p>
                </div>
                <div className='form-control'>
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        id="username"
                        type='text'
                        required
                        {...register('username')}

                    />
                    <p className='error'>{errors.username?.message} </p>
                </div>

                <div className='form-control'>
                    <label htmlFor="email">Email Address</label>
                    <input
                        name="email"
                        required
                        {...register('email')}
                    />
                    <p className='error' >{errors.email?.message} </p>
                </div>


                <div className='form-control'>
                    <label htmlFor="Password">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        {...register('password')}

                    />
                    <p className='error'>{errors.password?.message} </p>
                </div>

                <div className='form-control'>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input

                        type="password"

                        name="confirmPassword"
                        required
                        {...register('confirmPassword')}
                    />
                    <p className='error'>{errors.confirmPassword?.message} </p>
                </div>

                <div >
                    <input
                        type="checkbox"
                        name="termsConditions"
                        id="termsConditions"
                        {...register('termsConditions')} />
                    <label className='terms-label' htmlFor="termsConditions"> <Link href='#'> I agree to terms and conditions </Link> </label>
                    {/* <p className='error'>{errors.termsConditions?.message} </p> */}
                </div>
                <button className='btn' type='submit' > Signup </button>
            </form>
            <DevTool control={control} />
        </div>
    )
}
export default UserSignup