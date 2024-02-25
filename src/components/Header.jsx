import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    return (
        <header>
            <div className="logo-wrapper">
                <Link to="/shop-template/">
                    Logo
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/shop-template/">
                    Home
                </Link>
                <Link to="/shop-template/about">
                    About
                </Link>
                <Link to="/shop-template/portfolio">
                    Portfolio
                </Link>
                <Link to="/shop-template/shop">
                    Shop
                </Link>
                <Link to="/shop-template/cart">
                    Cart
                </Link>
                <Link to="/shop-template/contact">
                    Contact
                </Link>
            </div>
        </header>
    );
};

export default Header;