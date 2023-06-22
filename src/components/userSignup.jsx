
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function UserSignup() {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        contactNumber: ''

    }

    const onSubmit = (values) => {
        console.log(values)
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().min(8, 'Must be atleast 8 characters or more').required('Required!'),
        confirmPassword: Yup.string().min(8, 'Must be atleast 8 characters or more').required('Required!'), // needs to check match
        contactNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    })
    return (
        <div className='signup'>
            <h2> User Signup</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                <Form>
                    <div className="form-control">
                        <label htmlFor="name" >Name</label>
                        <Field
                            placeholder='please enter your name'
                            id='name'
                            name='name'
                        />
                        <ErrorMessage name='name'>
                            {
                                (ErrorMessage) => <div className="error">{ErrorMessage}</div>
                            }
                        </ErrorMessage>
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Email Address</label>
                        <Field
                            placeholder='please enter your email id'
                            name='email'
                            id='email'
                        ></Field>
                        <ErrorMessage name='email'>
                            {
                                (ErrorMessage) => <div className="error">{ErrorMessage}</div>
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
                        <ErrorMessage name='name'>
                            {
                                (ErrorMessage) => <div className="error">{ErrorMessage}</div>
                            }
                        </ErrorMessage>
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm-password" > Password </label>
                        <Field
                            type="password"
                            placeholder="8+ characters required"
                            id='confirm-password'
                            name='confirm-password' />
                        <ErrorMessage name='name'>
                            {
                                (ErrorMessage) => <div className="error">{ErrorMessage}</div>
                            }
                        </ErrorMessage>
                    </div>
                    <div className="form-control">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <Field
                            type='number'
                            placeholder='please enter your phone number'
                            id='contactNumber'
                            name='contactNumber'
                        ></Field>
                        <ErrorMessage name='name'>
                            {
                                (ErrorMessage) => <div className="error">{ErrorMessage}</div>
                            }
                        </ErrorMessage>
                    </div>
                    <div className="form-control">
                        <Field
                            as='checkbox'
                        > By creating an account, you agree to our Terms and Conditions, Privacy Policy and Cookies Policy</Field>
                    </div>

                </Form >
            </Formik>
            <a className='forgot-password'>Forgot Password?</a>
            <button type='submit'> Login </button>

            <p> Don`t have an account yet? <a href="" target='_blank'> Sign up </a> </p>

        </div>

    )
}

export default UserSignup