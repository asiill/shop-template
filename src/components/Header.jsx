import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="logo-wrapper">
                <Link to="/shop-template/">
                    <h1>Logo</h1>
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
                <Link to="/shop-template/contact">
                    Contact
                </Link>
            </div>
        </>
    );
};

export default Header;