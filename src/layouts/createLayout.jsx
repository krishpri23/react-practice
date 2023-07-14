
import { Link, Outlet } from 'react-router-dom';
import '../styles/createLayout.css'

function CreateLayout() {

    return (
        <div className='create-form'>
            <section>
                <h1> Sign Up</h1>
                <h4> Already have an account yet? <Link to='/login'> Sign in </Link> </h4>
                <h4>Which one are you?</h4>
            </section>
            <main>
                <div className='select-type'>
                    <Link to='userSignup'> User </Link>
                    <Link to='providerSignup'> Provider</Link>
                </div>
                <Outlet />
            </main>
        </div>
    )
}

export default CreateLayout; 