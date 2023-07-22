//rrd
import { useNavigate, Link } from 'react-router-dom/';

// rhf library
import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//auth
import * as yup from "yup";

//styles
import '/src/styles/Signup/providerSignup.css'

//json
import country from '/src/data/country.json';

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
        city: yup.string().required('City is required'),
        areaCode: yup.string().required('Area code is required'),
        termsConditions: yup.bool().oneOf([true], 'You must agree to terms & conditions'),
        businessType: yup.string().required('Radio option is required')
    });

    const form = useForm({
        defaultValues: {
            businessType: '',
            name: '',
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

    const { register, handleSubmit, control, formState, reset } = form;
    const { errors, isSubmitted } = formState;
    const navigate = useNavigate();


    const onSubmit = (data) => {
        console.log(data);
        isSubmitted ? navigate('/login') : ''
        reset()
    }

    const onError = (errors) => {
        console.log('form errors ', errors);
    }



    return (
        <main>
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

                    <p className='error radio'>{errors.businessType?.message} </p>
                </div>

                <div className='form-control'>
                    <label htmlFor="name"> Name</label>
                    <input type="text"
                        name="name"
                        id="name"
                        required
                        {...register('name')} />
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
                    <input
                        name='selectState'
                        id="selectState"
                        required
                        {...register('selectState')}
                        defaultValue={''}
                    />
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
                        <option value=''>Select a country</option>
                        {
                            country.map((item) => (
                                <option key={item.code} value={item.name}> {item.name} </option>
                            ))
                        }

                    </select>
                    <p className='error'>{errors.country?.message} </p>
                </div>

                <div className='form-control' >
                    <label htmlFor="areaCode">Zipcode / Postal Code</label>
                    <input
                        name="areaCode"
                        id="areaCode"
                        required
                        {...register('areaCode')}
                        defaultValue={''}
                    />
                    <p className='error'>{errors.areaCode?.message} </p>
                </div>

                <div className='form-control' >
                    <label htmlFor="city">City</label>
                    <input
                        name="city"
                        id="city"
                        required
                        {...register('city')}
                        defaultValue={''}
                    />
                    <p className='error'>{errors.city?.message} </p>
                </div >

                <div >
                    <input
                        type="checkbox"
                        name="termsConditions"
                        id="termsConditions"
                        {...register('termsConditions')} />
                    <label className='terms-label' htmlFor="termsConditions"> <Link href='#'> I agree to terms and conditions </Link> </label>
                    <p className='error terms'>{errors.termsConditions?.message} </p>
                </div>
                <button className='btn' type='submit' > Signup </button>
            </form >
            <DevTool control={control}></DevTool>
        </main >

    )
}

export default ProviderSignup