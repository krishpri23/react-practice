

import Logo from '../assets/sb-logo-resized.png'

function CreateAccount() {
    return (

        <div className="create-account">
            <img className="logo-image" src={Logo} alt="sacredbox-logo" />
            <form className="create-account-form">
                <h2>Create an account</h2>
                <div className="create-user">
                    <div className="user-title">
                        <h3>I'm a user</h3>
                        <h1>Seeking for a service </h1>
                    </div>
                    {/* <input className="radio-btn" type="radio" name="type" value="user" /> */}

                </div>

                <div className="create-provider">
                    <div className="provider-title">
                        <h3>I'm a service provider </h3>
                        <h1> Interested in registering in the platform </h1>
                    </div>
                    {/* <input type="radio" name="type" value="user" /> */}

                </div>

                <button id="create-btn">Continue</button>

                <p> Already have an account yet? <a href="" target='_blank'> Sign in </a> </p>
            </form>
        </div>);
}

export default CreateAccount;