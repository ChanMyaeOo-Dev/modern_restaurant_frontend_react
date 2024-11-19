import React from "react";
import CartEmptyState from "./CartEmptyState";
import { useState } from "react";
import CartWithProductsList from "./CartWithProductsList";

const CartBody = ({ cart, increaseQuantity, decreaseQuantity, deleteItem }) => {
  // const [menuItems, setmenuItems] = useState([
  //   {
  //     id: 1,
  //     name: "Ankimo Ponzu",
  //     price: 15000,
  //     quantity: 1,
  //     imageSrc:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/0db8a88a57d4b2340a2a4628005d8dc04adfe1145feca0259ff9782de67ff25a?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091",
  //   },

  //   {
  //     id: 2,
  //     name: "Spicy Hotate",
  //     price: 9000,
  //     quantity: 1,
  //     imageSrc:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/bbe48d88d542a69fc395051c79cde7bf0b1c3cad8e3611d4cccd0f7a946b0ea2?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091",
  //   },

  //   {
  //     id: 3,
  //     name: "Organic Hiyayakko",
  //     price: 4000,
  //     quantity: 1,
  //     imageSrc:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/835c0778c70cd18a0aa1f227215e2e5636d41df9afebe69c8231fd3f9da6d6be?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091",
  //   },
  // ]);

  // const onIncreatement = (name) => {
  //   const newItem = menuItems.map((item) =>
  //     item.name === name ? { ...item, quantity: item.quantity + 1 } : item
  //   );
  //   setmenuItems(newItem);
  // };

  // const onDecreatement = (name) => {
  //   const updatedItems = menuItems.map((item) => {
  //     if (item.name === name) {
  //       const newQuantity = Math.max(item.quantity - 1, 0);
  //       return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
  //     }
  //     return item;
  //   });

  //   // Remove items with quantity equal to 0
  //   const filteredItems = updatedItems.filter((item) => item !== null);

  //   setmenuItems(filteredItems);
  // };

  return (
    <React.Fragment>
      {cart && cart.length ? (
        <CartWithProductsList
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          deleteItem={deleteItem}
          cart={cart}
        />
      ) : (
        <CartEmptyState />
      )}
    </React.Fragment>
  );
};

export default CartBody;
