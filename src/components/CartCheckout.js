import { Link } from "react-router-dom";




const CartCheckout = (props) => {

    let price = Math.floor((props.cart.length * 989.99) * 100) / 100;
    let tax = Math.floor((price * .07) * 100) / 100;    //Tax is not dynamically adjusted and is simply just kept at 7%
    let grandTotal = Math.floor((price + tax) * 100) / 100;



    return (
        <div className="checkout" >
            <hr className="cartLine" />
            <hr className="cartLine" />
            <div className="checkoutDetails">
                <p className="checkoutFont">{"Subtotal: $" + price}</p>
                <p className="checkoutFont">{"Tax: $" + tax}</p>
                <p className="checkoutFont">{"Grand Total: $" + grandTotal}</p>
                <Link to="/thankyou">
                    <button className="purchase">Purchase</button>
                </Link>
            </div>
        </div>
    );
}

export default CartCheckout;