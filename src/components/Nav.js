import "./App.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="title">
                <h3 className="logo">Blindr</h3>
            </div>
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;