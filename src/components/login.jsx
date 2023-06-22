
import Logo from '../assets/sb-logo-resized.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Login() {

    const initialValues = {
        email: "",
        password: ""
    }

    const onSubmit = (values) => {
        console.log(values)
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required!'),
        password: Yup.string().min(8, 'Must be atleast 8 characters or more').required('Required!')
    })

    return (
        <div className="login-form">
            <img className="logo-image" src={Logo} alt="sacredbox-logo" />
            <h2>Hi, Welcome Back!</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>

                <Form className="login" >
                    <div className="form-control">
                        <label htmlFor="email"> Email Address </label>
                        <Field
                            type="text"
                            placeholder="hello@email.com"
                            id='email'
                            name='email' />
                        <ErrorMessage name='email'>
                            {
                                (ErrorMessage) => <div className='error'>{ErrorMessage}</div>
                            }
                        </ErrorMessage>
                    </div>

                    <div className="form-control">
                        <label htmlFor="password" > Password </label>
                        <Field
                            type="password"
                            placeholder="8+ characters required"
                            id='password'
                            name='password' />
                        <ErrorMessage name='password' >
                            {
                                (ErrorMessage) => <div className='error'>{ErrorMessage}</div>
                            }
                        </ErrorMessage>
                    </div>

                </Form>
            </Formik >
            <a className='forgot-password'>Forgot Password?</a>
            <button type='submit'> Login </button>
            <p> Don`t have an account yet? <a href="" target='_blank'> Sign up </a> </p>
        </div >);
}

export default Login;
