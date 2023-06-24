
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ProviderSignup() {

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        contactNumber: ""

    }

    const onSubmit = (values, onSubmitprops) => {
        console.log(values)
        onSubmitprops.isSubmitting(false)
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().min(8, "Must be atleast 8 characters or more").required("Required!"),
        confirmPassword: Yup.string().min(8, "Must be atleast 8 characters or more").required("Required!"), // needs to check match
        contactNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid")
    })


    return (
        <div className="signup">

            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                {
                    (formik) => {
                        console.log(formik.isValid);
                        return (
                            <Form className="form-group">
                                {/* <div className="form-control">
                                    <label htmlFor="type">Account / Provider type </label>
                                    <Field as="radio"> Business </Field>
                                    <Field as="radio"> Individual</Field>
                                </div> */}

                                <div className="form-control">
                                    <label htmlFor="name" >Full Name</label>
                                    <Field
                                        placeholder="please enter your name"
                                        id="name"
                                        name="name"

                                    >
                                    </Field>
                                    <ErrorMessage name="name">
                                        {
                                            (ErrorMessage) => <div className="error">{ErrorMessage}</div>

                                        }
                                    </ErrorMessage>
                                </div>

                                <div className="form-control">
                                    <label htmlFor="email">Email Address</label>
                                    <Field
                                        placeholder="please enter your email id"
                                        name="email"
                                        id="email"
                                    ></Field>
                                    <ErrorMessage name="email">
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
                                        id="password"
                                        name="password" />
                                    <ErrorMessage name="name">
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
                                        id="confirm-password"
                                        name="confirm-password" />
                                    <ErrorMessage name="name"

                                    >
                                        {
                                            (ErrorMessage) => <div className="error">{ErrorMessage}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="contactNumber">Contact Number</label>
                                    <Field
                                        type="
    
    number"
                                        placeholder="phone number"
                                        id="contactNumber"
                                        name="contactNumber"
                                    ></Field>
                                    <ErrorMessage name="name">
                                        {
                                            (ErrorMessage) => <div className="error">{ErrorMessage}</div>
                                        }
                                    </ErrorMessage>
                                </div>


                                <div className="form-control">
                                    <label htmlFor="address">Address</label>
                                    <Field
                                        placeholder="Address"
                                        id="address"
                                        name="address"
                                    ></Field>
                                </div>

                                {/* <div className="form-control">
                                    <label htmlFor="country">Country</label>
                                    <Field
                                        as="dropdown"
                                        id="country"
                                        name="country"
                                    ></Field>
                                </div> */}

                                <div className="form-control">
                                    <label htmlFor="state">State</label>
                                    <Field
                                        id="state"
                                        name="state"
                                    ></Field>
                                </div>

                                <div className="form-control">
                                    <label htmlFor="zipcode">Zipcode</label>
                                    <Field
                                        id="zipcode"
                                        name="zipcode"
                                    ></Field>
                                </div>

                                {/* <div className="form-control">
                                    <label htmlFor="category">Category</label>
                                    <Field
                                        as="dropdown"
                                        id="category"
                                        name="category"
                                    ></Field>
                                </div> */}


                                {/* <div className="form-control">
                                    <Field
                                        as="checkbox"
                                        className="terms"
                                        id="terms-condition"
                                        name="terms-condition"
                                    > By creating an account, you agree to our Terms and Conditions, Privacy Policy and Cookies Policy</Field>
                                </div> */}

                            </Form >
                        )
                    }
                }


            </Formik>
        </div >

    )
}

export default ProviderSignup