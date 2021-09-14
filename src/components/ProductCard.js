import blinds from "../imgs/products/blinds.jpeg";


const ProductCard = (props) => {

    //Component used on the shop page and is created for each product being sold
    return ( 
        <div onClick={props.onClick} className="productCard" >
            <img className="productImg" alt="Blinds" src={blinds} />
            <div className="productDetails">
                <h3 className="productTitle">{props.product}</h3>
                <h3 className="price">$989.99</h3>
            </div>
        </div>
    )
}

export default ProductCard;