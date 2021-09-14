import blinds from "../imgs/products/blinds.jpeg";
import GreyScreen from "./GreyScreen";
import IncrementScale from "./IncrementScale";
import { useState } from "react";


//Component for the page that opens when a ProductCard is clicked
const ItemPage = (props) => {

    //The state is used to control the state of the actual item page; Default is closed and opens when ProductCard is clicked


    return (
        <div>
            <div className="itemPage">
                <img className="itemImg" alt="Blinds" src={blinds} />
                <div className="itemDetails" >
                    <h1 className="itemTitle">{props.itemName}</h1>
                    <h3 className="itemPrice">$989.99</h3>
                    <IncrementScale />
                    <button className="checkoutBtn">Add to Cart</button>                    
                </div>
            </div>
            <GreyScreen onClick={props.onClick} />
        </div>

    )
}

export default ItemPage;