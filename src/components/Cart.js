import { useState } from "react";
import CartItem from "./CartItem";


//Component for the shopping car that will slide out from the right side of the page when button is clicked
const Cart = (props) => {

    const [cartClass, setCartClass] = useState("hiddenCart");
    const [btnClass, setBtnClass] = useState("cartBtn");

    function toggleCart() { 
        if (cartClass === "hiddenCart") {
            setCartClass("displayCart");
            setBtnClass("cartBtnShowing");
        }
        else {
            setCartClass("hiddenCart");
            setBtnClass("cartBtn");
        }
    }

    return (
        <div className={cartClass} >
            <button onClick={toggleCart} className={btnClass} ></button>
            <div className="cartDetails">
                <h2 className="cartTitle" >Cart</h2>
            </div>
        </div>
    );
}



export default Cart;