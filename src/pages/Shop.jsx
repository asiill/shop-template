import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard.jsx";

const Shop = () => {
    return (
        <section id="shop">
            <h1>Items...</h1>
            <Link to="/shop-template/shop/1">Item 1</Link>
            <Link to="/shop-template/shop/2">Item 2</Link>
        </section>
    );
};

export default Shop;