import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="home">
            <div className="welcomeMsg">
                <h1>Welcome,</h1>
                <h2>To a new world of home privacy</h2>
                <Link to="/shop">
                    <button className="homeShopBtn">Shop</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;