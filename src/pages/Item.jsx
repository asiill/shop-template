import React from "react";
import { useParams } from "react-router-dom";

const Item = () => {
    const { id } = useParams();
    return (
        <section>
            <h1>Item {id}</h1>
        </section>
    )
};

export default Item;