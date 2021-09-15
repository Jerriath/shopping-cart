import { useState } from "react";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import Greyscreen from "./GreyScreen";
import uniqid from "uniqid";


//Component for the shopping car that will slide out from the right side of the page when button is clicked
const Cart = (props) => {

    const [cartClass, setCartClass] = useState("hiddenCart");
    const [btnClass, setBtnClass] = useState("cartBtn");
    const [screenClass, setScreenClass] = useState("cartGreyscreenHidden");

    function closeCart() {
        setCartClass("hiddenCart");
        setBtnClass("cartBtn");
        setScreenClass("cartGreyscreenHidden");
    }

    function toggleCart() { 
        if (cartClass === "hiddenCart") {
            setCartClass("displayCart");
            setBtnClass("cartBtnShowing");
            setScreenClass("cartGreyscreenShowing")
        }
        else {
            setCartClass("hiddenCart");
            setBtnClass("cartBtn");
            setScreenClass("cartGreyscreenHidden");
        }
    }
    return (
        <div className={cartClass} >
            <button onClick={toggleCart} className={btnClass} ></button>
            <h2 className="cartTitle">Current Cart</h2>
            <div className="cartDetails">
                {props.cart.map((item, i) => {return <CartItem key={uniqid()} product={item.product} quantity={item.quantity}/>})}
            </div>
            <CartCheckout cart={props.cart}/>
            <Greyscreen classProperty={screenClass} onClick={closeCart} />
        </div>
    );
}



export default Cart;