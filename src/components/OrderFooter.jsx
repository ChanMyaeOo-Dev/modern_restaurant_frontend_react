import React from "react";
import StandardButton from "./StandardButton";

const OrderFooter = ({ getTotalPrice, buttonText, handleAction }) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-4 pt-2 pb-4 mt-64 w-full text-center bg-white shadow-[0px_-1px_2px_rgba(15,15,16,0.06)]">
      <div className="flex flex-col justify-center w-full text-xl">
        <div className="flex justify-between items-center w-full">
          <div className="self-stretch my-auto font-medium text-gray-500 mb-3">
            Total
          </div>

          <div className="self-stretch my-auto font-semibold text-zinc-800">
            MMK {getTotalPrice}
          </div>
        </div>
      </div>
      {buttonText !== "NO" ? (
        <StandardButton buttonText={buttonText} buttonFunction={handleAction} />
      ) : (
        ""
      )}
    </section>
  );
};

export default OrderFooter;
