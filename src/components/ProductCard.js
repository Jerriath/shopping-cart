


const ProductCard = (props) => {


    return (
        <div className="productCard">
            <img alt="Blinds" src="../imgs/products/blinds.jpeg" />
            <h3 className="productTitle">{props.productName}</h3>
            <h3 className="price">$989.99</h3>
        </div>
    )
}

export default ProductCard;