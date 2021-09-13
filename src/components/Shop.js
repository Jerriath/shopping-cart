import { useState } from "react";
import ProductCard from "./ProductCard";
import uniqid from "uniqid";

const Shop = () => {

    const [productArray, setProductArray] = useState([<ProductCard key={uniqid()} genres={["best"]} product="White"/>,
    <ProductCard key={uniqid()} genres={["best", "favorites"]} product="White White"/>,
    <ProductCard key={uniqid()} genres={["new", "favorites"]} product="Off-White White"/>,
    <ProductCard key={uniqid()} genres={["best","new"]} product="Soft White"/>,
    <ProductCard key={uniqid()} genres={["favorites", "new"]} product="Hard White"/>,
    <ProductCard key={uniqid()} genres={["best", "favorites"]} product="Ivory White"/>,
    <ProductCard key={uniqid()} genres={["new"]} product="Salt White"/>,
    <ProductCard key={uniqid()} genres={["new"]} product="Porcelain White"/>,
    <ProductCard key={uniqid()} genres={["new"]} product="Chiffon White"/>,
    <ProductCard key={uniqid()} genres={["new"]} product="Snow White"/>]);

    const [displayArray, setDisplayArray] = useState(productArray);

    function sortByAll() {
        console.log("all");
        let array = productArray;
        setDisplayArray(array);
    }

    function sortByBest() {
        console.log("best");
        let array = productArray;
        array = array.filter( card => {
            console.log(card.props.genres.includes("best"));
            return card.props.genres.includes("best");
        })
        console.log(array);
        setDisplayArray(array);
    }

    function sortByFavorites() {
        console.log("favorites");
        let array = productArray;
        array = array.filter( (card) => {
            return card.props.genres.includes("favorites");
        })
        console.log(array);
        setDisplayArray(array);
    }

    function sortByNew() {
        console.log("new");
        let array = productArray;
        array = array.filter( card => {
            return card.props.genres.includes("new");
        })
        console.log(array);
        setDisplayArray(array);
    }


    return (
        <div className="shop">
            <div className="filter">
                <ul className="filterTable">
                    <li>
                        <button onClick={sortByAll} className="filterOption">All</button>
                    </li>
                    <li>
                        <button onClick={sortByBest} className="filterOption">Best Sellers</button>
                    </li>
                    <li>
                        <button onClick={sortByFavorites} className="filterOption">Favorites</button>
                    </li>
                    <li>
                        <button onClick={sortByNew} className="filterOption">Newest Styles</button>
                    </li>
                </ul>
            </div>
            <div className="products">
                {displayArray}
            </div>
        </div>
    );
}

export default Shop;