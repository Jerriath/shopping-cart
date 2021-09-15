import { Link } from "react-router-dom";



const About = () => {

    //Simple order confirmation page
    return (
        <div className="thankYou">
            <div className="thankYouDetails">
                <hr className="thankYouLine" />
                <h1 className="thankYouMsg">Thank You For Your Order!</h1>
                <hr className="thankYouSmallLine" />
                <Link to="/">
                    <button className="thankYouBtn">Return Home</button>
                </Link>
                <hr className="thankYouLine" />
            </div>
        </div>
    )
}

export default About;