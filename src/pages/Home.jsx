import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Welcome</h1>
            <Link to = {"/shop-template/shop"}>
                <button>Shop now</button>
            </Link>
        </>
    );
};

export default Home;