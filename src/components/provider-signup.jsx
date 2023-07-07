
import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import '../styles/signup.css'


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
        mode: 'onChange',
        criteriaMode: 'all',
        resolver: yupResolver(schema)
    });

    const { errors } = formState;

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='signup-form'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <input
                        type='radio'
                        id='Individual'
                        name='businessType'
                        value='Individual'
                    />
                    <label htmlFor="Individual"> Individual</label>
                    <input
                        type='radio'
                        id='Business'
                        name='businessType'
                        value='Business'

                    />
                    <label htmlFor="Business"> Business</label>

                </div>

                <div className='form-control'>
                    <label htmlFor="name"></label>
                    <input
                        name="name"
                        id="name"
                        required
                        {...register('name')}
                    />
                    <p className='error'>{errors.name?.message} </p>
                </div>

                <div className='form-control'>
                    <label htmlFor="email">Email Address</label>
                    <input
                        name="email"
                        id="email"
                        type='email'
                        required
                        {...register('email')}

                    />
                    <p className='error'>{errors.email?.message} </p>
                </div>

                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"

                        name="password"
                        required
                        {...register('password')}
                    />
                    <p className='error'>{errors.password?.message} </p>
                </div>

                <div className='form-control'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input

                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        {...register('confirmPassword')}
                    />
                    <p className='error'>{errors.confirmPassword?.message} </p>
                </div>

                <div className='form-control'>
                    <label htmlFor="contactNumber"> Contact Number</label>
                    <input

                        type="number"
                        name="contactNumber"
                        id="contactNumber"
                        required
                        {...register('contactNumber')}
                    />
                    <p className='error'>{errors.contactNumber?.message} </p>
                </div>

                <div className='form-control' >
                    <label htmlFor="address">Address</label>
                    <input
                        type=" text"
                        name='address'
                        id="address"
                        required
                        {...register('address')}
                    />
                    <p className='error'>{errors.address?.message} </p>
                </div>
                <div className='form-control'>
                    <label htmlFor="selectState">State</label>
                    <select
                        name='selectState'
                        id="selectState"
                        required
                        {...register('selectState')}
                        defaultValue={''}
                    >
                        <option value='california'>California</option>
                        <option value='newyork'>New York</option>
                    </select>
                    <p className='error'>{errors.selectState?.message} </p>
                </div>

                <div className='form-control' >
                    <label htmlFor="country">Country</label>
                    <select
                        name="country"
                        id="country"
                        required
                        {...register('country')}
                        defaultValue={''}

                    >
                        <option value='usa'>United States of America</option>
                        <option value='uk'> United Kingdom </option>
                    </select>
                    <p className='error'>{errors.country?.message} </p>
                </div>

                <div >
                    <input
                        type="checkbox"
                        name="termsConditions"
                        id="termsConditions"
                        {...register('termsConditions')} />
                    <label htmlFor="termsConditions"> I agree to terms and conditions </label>

                    <p className='error'>{errors.termsConditions?.message} </p>
                </div>
                <button type='submit' > Signup </button>
            </form >
            <DevTool control={control}></DevTool>
        </div >

    )
}

export default ProviderSignup