import "./App.css";
import React, { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  function addToCart(name, price) {
    setCartItems([
      ...cartItems,
      {name: name}
    ]);
    setTotalPrice(totalPrice + price);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( 
      // TODO: map bakeryData to BakeryItem components
      <BakeryItem name={item.name} image={item.image} description={item.description} price={item.price} addToCart={addToCart}/> 
      )
      )
      }

      <div className="cart">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cartItems.map((item, index) => (
          <p>{item.name}</p>
        )
        )
        }

        <h3>Total: ${totalPrice}</h3>
      </div>
    </div>
  );
}

export default App;
