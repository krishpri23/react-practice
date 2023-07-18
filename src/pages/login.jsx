
import '../layouts/createLayout'
import { Link, Form } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../styles/login.css'
import banner from '/login.png'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';



// HelloRavi23!

function Login() {

    const schema = yup.object({
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup.string().required('Password is required')
            .min(8, 'Min of 8 characters')
            .matches(RegExp('(.*[a-z].*)'), '1 lowercase letter')
            .matches(RegExp('(.*[A-Z].*)'), '1 uppercase letter')
            .matches(RegExp('(.*\\d.*)'), '1 number')
            .matches(RegExp('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!~]).*$'), '1 special character'),
    })

    const { register, formState } = useForm({
        defaultValues: {
            'email': '',
            'password': '',
        },
        mode: 'onchange',
        criteriaMode: 'all',
        resolver: yupResolver(schema)
    })

    const { errors } = formState


    return (
        <div className='login'>
            <div className='banner'>
                <img src={banner} alt="banner-img" />
                <h1> Unlock Spiritual Awakening </h1>
            </div>
            <Form className='login-form' method='post' noValidate>
                <h2>Hi, Welcome back!</h2>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name='email'
                        required
                        {...register('email')}
                    />
                    <p className='error' >{errors.email?.message} </p>
                </div>

                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name='password'
                        required
                        {...register('password')}
                    />
                    <p className='error'>{errors.password?.message} </p>
                </div>
                <p><Link className='forgot-password' to='/'> Forgot Password? </Link></p>
                <button className='btn' type='submit'> Login </button>
                <h3> Don`t have an account yet? <Link to='/create'> Sign up </Link></h3>
            </Form >
        </div >
    );
}

export default Login

