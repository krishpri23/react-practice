
import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import '/src/styles/signup.css'
import '/src/styles/provider-signup.css'
import { useNavigate } from 'react-router-dom/';
import { Link } from 'react-router-dom/dist';


function ProviderSignup() {
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
        contactNumber: yup.string().required('Contact number is required'),
        address: yup.string().required('Address is required'),
        selectState: yup.string().required('State is required'),
        country: yup.string().required('Country is required'),
        city: yup.string().required('City is required'),
        areaCode: yup.string().required('Area code is required'),
        termsConditions: yup.bool().oneOf([true], 'You must agree to terms & conditions')
    });

    const form = useForm({
        defaultValues: {
            businessType: '',
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            contactNumber: '',
            address: '',
            selectState: '',
            country: '',
            city: '',
            areaCode: '',
            termsConditions: 'true',

        },
        mode: 'onChange',
        criteriaMode: 'all',
        resolver: yupResolver(schema)
    });

    const { register, handleSubmit, control, watch, formState, reset } = form;
    const { errors, isSubmitted } = formState;
    const navigate = useNavigate();
    const country = watch('country');


    const onSubmit = (data) => {
        console.log(data);
        isSubmitted ? navigate('/login') : ''
        reset()
    }

    const onError = (errors) => {
        console.log('form errors ', errors);
    }

    return (
        <div>
            <form className='provider-form' onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <div className='form-control' >
                    <input
                        className='radio-input'
                        type='radio'
                        id='Individual'
                        name='businessType'
                        value='Individual'

                    />
                    <label className='radio-label' htmlFor="Individual"> Individual</label>

                    <input
                        className='radio-input'
                        type='radio'
                        id='Business'
                        name='businessType'
                        value='Business'

                    />
                    <label className='radio-label' htmlFor="Business"> Business</label>

                </div>

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
                        type="tel"
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
                        {...register('selectState', {
                            disabled: country === ''
                        })}
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

                    >

                        {/* <option value='usa'>United States of America</option>
                        <option value='uk'> United Kingdom </option> */}
                    </select>
                    <p className='error'>{errors.country?.message} </p>
                </div>

                <div className='form-control' >
                    <label htmlFor="areaCode">Zipcode / Postal Code</label>
                    <input
                        name="areaCode"
                        id="areaCode"
                        required
                        {...register('areaCode', {
                            disabled: country === ''
                        })}
                        defaultValue={''}
                    />
                    <p className='error'>{errors.areaCode?.message} </p>
                </div>

                <div className='form-control' >
                    <label htmlFor="city">City</label>
                    <select
                        name="city"
                        id="city"
                        required
                        {...register('city', {
                            disabled: country === "",
                        })}
                        defaultValue={''}
                    >
                        <option value='mh'>Morgan Hill</option>
                        <option value='sj'> San Jose </option>

                    </select>
                </div >

                <div >
                    <input
                        type="checkbox"
                        name="termsConditions"
                        id="termsConditions"
                        {...register('termsConditions')} />
                    <label className='terms-label' htmlFor="termsConditions"> <Link href='#'> I agree to terms and conditions </Link> </label>
                    {/* <p className='error'>{errors.termsConditions?.message} </p> */}
                </div>
                <button type='submit' > Signup </button>
            </form >
            <DevTool control={control}></DevTool>
        </div >

    )
}

export default ProviderSignup