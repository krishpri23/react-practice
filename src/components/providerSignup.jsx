// import React from 'react'

function ProviderSignup() {
    return (
        <div className=" provider-signup" >

            <form>
                <div className="form-control">
                    <label htmlFor="name" >Full Name</label>
                    <input
                        placeholder=" please enter your name"
                        id=" name"
                        name=" name"
                    />

                </div>

                <div className="form-control">
                    <label htmlFor="email">Email Address</label>
                    <input
                        placeholder=" please enter your email id"
                        name=" email"
                        id=" email"
                    />

                </div>

                <div className="form-control">
                    <label htmlFor="password" > Password </label>
                    <input
                        type="password"
                        placeholder="8+ characters required"
                        id=" password"
                        name=" password" />

                </div>
                <div className="form-control">
                    <label htmlFor="confirm-password" > Password </label>
                    <input
                        type="password"
                        placeholder="8+ characters required"
                        id=" confirm-password"
                        name=" confirm-password" />

                </div>
                <div className="form-control">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        type=" number"
                        placeholder=" please enter your phone number"
                        id=" contactNumber"
                        name=" contactNumber"
                    />

                </div>


            </form >

        </div >

    )
}

export default ProviderSignup