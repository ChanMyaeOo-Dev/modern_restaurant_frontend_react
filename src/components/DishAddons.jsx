import React from "react";
import DishAddonsItem from "./DishAddonsItem";
import { useState } from "react";

const DishAddons = () => {
  const [addOnItems, setaddOnItems] = useState([
    { name: "Salmon", price: 1000, quantity: 1 },

    { name: "Coca-Cola", price: 800, quantity: 0 },

    { name: "Egg-plant", price: 500, quantity: 0 },
  ]);

  const onIncreatement = (name) => {
    const newItem = addOnItems.map((item) =>
      item.name === name ? { ...item, quantity: item.quantity + 1 } : item
    );
    setaddOnItems(newItem);
  };
  const onDecreatement = (name) => {
    const newItem = addOnItems.map((item) =>
      item.name === name ? { ...item, quantity: item.quantity - 1 } : item
    );
    setaddOnItems(newItem);
  };

  return (
    <section className="flex flex-col py-4 mt-2 w-full bg-white">
      <div className="flex flex-col px-5 w-full">
        <h3 className="text-lg font-semibold leading-none text-black">
          Add-Ons
        </h3>

        <p className="mt-1 font-normal text-sm text-gray-500">Choose up to 3</p>
      </div>

      <div className="flex flex-col mt-4 w-full bg-white">
        {addOnItems.map((item, index) => (
          <DishAddonsItem
            key={index}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncreatement={onIncreatement}
            onDecreatement={onDecreatement}
          />
        ))}
      </div>
    </section>
  );
};

export default DishAddons;
