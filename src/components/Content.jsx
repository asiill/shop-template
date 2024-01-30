import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from  "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import Shop from "../pages/Shop.jsx";
import Item from "../pages/Item.jsx";
import Cart from "../pages/Cart.jsx";
import Contact from "../pages/Contact.jsx";
import "../styles/Content.css";

const Content = () => {
    return (
        <main>
            <Routes>
                <Route path="/shop-template/*" element={<Home />} />
                <Route path="/shop-template/about" element={<About />} />
                <Route path="/shop-template/portfolio" element={<Portfolio />} />
                <Route path="/shop-template/shop" element={<Shop />} />
                <Route path="/shop-template/shop/:itemId" element={<Item />} />
                <Route path="/shop-template/cart" element={<Cart />} />
                <Route path="/shop-template/contact" element={<Contact />} />
            </Routes>
        </main>
    );
};

export default Content;