import { useState } from "react";
import CartItem from "./CartItem";


//Component for the shopping car that will slide out from the right side of the page when button is clicked
const Cart = () => {

    const [cartClass, setCartClass] = useState("hiddenCart");
    const [cart, setCart] = useState([]);

    function toggleCart() {
        if (cartClass === "hiddenCart") {
            setCartClass("displayCart");
        }
        else {
            setCartClass("hiddenCart");
        }
    }

    function addItem(newItem) {
        let oldCart = cart;
        oldCart.push(newItem);
        setCart(oldCart);
    }

    return (
        <div className={cartClass} >
            <button onClick={toggleCart} className="cartBtn" />
            <h2 className="cartTitle" >Cart</h2>
        </div>
    );
}



export default Cart;