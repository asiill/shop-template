import React from "react";
import { Link } from "react-router-dom";

const ItemCard = (id, name, price) => {
    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default ItemCard;