// TODO: create a component that displays a single bakery item

import React from "react";

export default function BakeryItem(props) {
    const name = props.name;
    const image = props.image;
    const description = props.description;
    const price = props.price;

    return(
        <div className="bakeryItem">
            <img alt="bakeryItem" src={image}></img>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <button onClick={() => props.addToCart(name, price)}>Add to Cart</button>
        </div>
    )
}
