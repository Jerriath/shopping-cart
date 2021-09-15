import blinds from "../imgs/products/blinds.jpeg";



const CartItem = (props) => {

    //Simple component that makes up the items in the shopping cart
    return (
        <div className="cartItem">
            <hr className="cartLine" />
            <div className="detailHolder">
                <img className="cartImg" alt="Blinds" src={blinds} />
                <div className="details">
                    <h3 className="itemTitle">{props.product}</h3>
                    <h3 className="itemPrice">{"Quanitity: " + props.quantity}</h3>
                    <h3 className="itemPrice">{"$" + Math.floor((props.quantity * 989.99) * 100) / 100}</h3>
                </div>
            </div>
            
        </div>
    )
}

export default CartItem;