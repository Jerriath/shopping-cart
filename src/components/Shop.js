import ProductCard from "./ProductCard";

const Shop = () => {

    return (
        <div className="shop">
            <h1>Shop</h1>
            <ProductCard product="White"/>
            <ProductCard product="White White"/>
            <ProductCard product="Off-White White"/>
            <ProductCard product="Soft White"/>
            <ProductCard product="Hard White"/>
            <ProductCard product="Eggshell White"/>
        </div>
    )
}

export default Shop;