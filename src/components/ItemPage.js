import blinds from "../imgs/products/blinds.jpeg";
import Greyscreen from "./GreyScreen";
import IncrementScale from "./IncrementScale";
import { useState } from "react";


//Component for the page that opens when a ProductCard is clicked
const ItemPage = (props) => {

    const [value, setValue] = useState(1);


    function setValueFunc(e) {
        console.log(e.nativeEvent.data);
        let newValue = value + e.nativeEvent.data;
        setValue(parseInt(newValue));
    }
    
    function increment() {
        setValue(parseInt(value) + 1);
    }

    function decrement() {
        if (value === 0) {
            return;
        }
        setValue(parseInt(value) - 1)
    }


    function createOrder() {
        let order = {
            product: props.itemName,
            quantity: value,
        };
        console.log(order);
        props.addItemToOrder(order);
        props.onClick();
    }

    return (
        <div>
            <div className="itemPage">
                <img className="itemImg" alt="Blinds" src={blinds} />
                <div className="itemDetails" >
                    <h1 className="itemTitle">{props.itemName}</h1>
                    <h3 className="itemPrice">$989.99</h3>
                    <IncrementScale value={value} decrement={decrement} increment={increment} setValueFunc={setValueFunc} />
                    <button onClick={createOrder} className="checkoutBtn">Add to Cart</button>                    
                </div>
            </div>
            <Greyscreen classProperty={"greyscreen"} onClick={props.onClick} />
        </div>

    )
}

export default ItemPage;