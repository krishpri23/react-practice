
import { NavLink } from 'react-router-dom';
import '../styles/notFound.css';
import Img from '../assets/Scarecrow.png'

function NotFound() {
    return (
        <div className="not-found">
            <img src={Img} alt="not-found" />
            <div className="content">
                <h1>I have bad news for you</h1>
                <p> The page you are looking for might be removed or temporarily unavailable</p>
                <NavLink to='/'>Back to homepage</NavLink>
            </div>
        </div>
    )
}

export default NotFound