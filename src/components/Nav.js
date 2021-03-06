import "./App.css";
import { Link } from "react-router-dom";


//Just a simple navbar to navigate to different pages of the website; used to navigate the router component
const Nav = () => {
    return (
        <nav>
            <div className="title">
                <Link to="/">
                    <h3 className="logo">Blindr</h3>
                </Link>
            </div>
            <ul className="navbar">
                <Link to="/">
                    <li className="nav-link">Home</li>
                </Link>
                <Link to="/shop">
                    <li className="nav-link">Shop</li>
                </Link>
                <Link to="/about">
                    <li className="nav-link">About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;