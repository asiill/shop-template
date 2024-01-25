import React from "react";
import { Link } from "react-router-dom";

const Item = (id, name, price) => {
    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default Item;