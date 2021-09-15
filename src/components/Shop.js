import { useState } from "react";
import ProductCard from "./ProductCard";
import uniqid from "uniqid";
import ItemPage from "./ItemPage";
import Cart from "./Cart";


//Monst complicated component; Responsible for the entire shop page
const Shop = () => {

    //State is used just to hold all the items currently available by the shop
    const [productArray] = useState([<ProductCard onClick={displayItemPage} key={uniqid()} genres={["best"]} product="White"/>,
    <ProductCard onClick={displayItemPage} key={uniqid()} genres={["best", "favorites"]} product="White White"/>,
    <ProductCard onClick={displayItemPage} key={uniqid()} genres={["new", "favorites"]} product="Off-White White"/>,
    <ProductCard onClick={displayItemPage} key={uniqid()} genres={["best","new"]} product="Soft White"/>,
    <ProductCard onClick={displayItemPage} key={uniqid()} genres={["favorites", "new"]} product="Hard White"/>,
    <ProductCard onClick={displayItemPage} key={uniqid()} genres={["best", "favorites"]} product="Ivory White"/>,
    <ProductCard onClick={displayItemPage} key={uniqid()} genres={["new"]} product="Salt White"/>,
    <ProductCard onClick={displayItemPage} key={uniqid()} genres={["new"]} product="Porcelain White"/>,
    <ProductCard onClick={displayItemPage} key={uniqid()} genres={["new"]} product="Chiffon White"/>,
    <ProductCard onClick={displayItemPage} key={uniqid()} genres={["new"]} product="Snow White"/>]);

    //This state is actively used and changed to reflect the filter option selected
    const [displayArray, setDisplayArray] = useState(productArray);

    //This state is used to display the ItemPage a product once a product card is clicked
    const [displayItem, setDisplayItem] = useState(null);

    //This state is used to manage the cart items for handling order details
    const [cart, setCart] = useState([]);


    //function for adding an order to the cart
    function addItemToOrder(item) {
        let currentCart = cart;
        let repeat = false;
        let index = null;
        for (let i = 0; i < cart.length; i++) {
            if (currentCart[i].product === item.product) {
                repeat = true;
                index = i;
            }
        }
        if (repeat) {
            currentCart[index].quantity = parseInt(currentCart[index].quantity) + parseInt(item.quantity);
            setCart(currentCart);
        }
        else {
            currentCart.push(item);
            setCart(currentCart);
        }
        
    }


    //function passed to the displayItemPage function to close the ItemPage
    function closeDisplayItem() {
        setDisplayItem(null);
    }

    //Function first gets the name of product and then uses that title to create an ItemPage
    function displayItemPage(e) {
        let finding = true;
        let target = e.target;
        while(finding) {
            if (target.className === "productCard") {
                finding = false;
                continue;
            }
            target = target.parentElement;
        }
        const itemName = target.children[1].children[0].innerHTML;
        setDisplayItem(<ItemPage addItemToOrder={addItemToOrder} itemName={itemName} onClick={closeDisplayItem} />);
    }



    //These "sort" functions are used by the filter table on the left to filter items by the options listed
    function sortByAll() {
        let array = productArray;
        setDisplayArray(array);
    }

    function sortByBest() {
        let array = productArray;
        array = array.filter( card => {
            console.log(card.props.genres.includes("best"));
            return card.props.genres.includes("best");
        })
        console.log(array);
        setDisplayArray(array);
    }

    function sortByFavorites() {
        let array = productArray;
        array = array.filter( (card) => {
            return card.props.genres.includes("favorites");
        })
        console.log(array);
        setDisplayArray(array);
    }

    function sortByNew() {
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
            {displayItem}
            <Cart addItemToOrder={addItemToOrder} cart={cart} />
        </div>
    );
}

export default Shop;