import ProductCard from "./ProductCard";

const Shop = () => {

    return (
        <div className="shop">
            <div className="filter">
                
            </div>
            <div className="products">
                <ProductCard product="White"/>
                <ProductCard product="White White"/>
                <ProductCard product="Off-White White"/>
                <ProductCard product="Soft White"/>
                <ProductCard product="Hard White"/>
                <ProductCard product="Eggshell White"/>
            </div>
        </div>
        
    )
}

export default Shop;