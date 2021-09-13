import "./App.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="title">
                <h3 className="logo">Blindr</h3>
            </div>
            <ul className="navbar">
                <Link to="/">
                    <li className="nav-link">Home</li>
                </Link>
                <Link to="/shop">
                    <li className="nav-link">Shop</li>
                </Link>
                <Link to="/contact">
                    <li className="nav-link">Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;