import React from "react";
import StandardButton from "./StandardButton";
import { ReactComponent as PlusIcon } from "../svgs/plus.svg";
import { ReactComponent as MinusIcon } from "../svgs/minus.svg";

const DishFooter = ({
  addToCart,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <footer className="flex flex-col w-full shadow-custom-shadow">
      <div className="flex gap-5 justify-between items-center p-4 w-full bg-white shadow-md">
        <div className="flex gap-2 justify-center items-center self-stretch my-auto">
          <button
            onClick={decreaseQuantity}
            className="flex justify-center p-2 bg-white rounded-full border-[1px]"
          >
            <MinusIcon />
          </button>
          <div className="self-stretch my-auto w-8 text-2xl font-medium leading-none text-center min-w-[24px] text-zinc-900">
            {quantity}
          </div>

          <button
            onClick={increaseQuantity}
            className="flex justify-center p-2 bg-white rounded-full border-[1px]"
          >
            <PlusIcon />
          </button>
        </div>
        <StandardButton buttonText={"Add to Cart"} buttonFunction={addToCart} />
      </div>
    </footer>
  );
};

export default DishFooter;
