import React from "react";
import { ReactComponent as Kitchen_empty } from "../../svgs/Kitchen_Empty.svg";

const EmptyState = ({ fetchOrders }) => {
  return (
    <div className="flex overflow-hidden flex-col bg-white h-[100vh] justify-center align-middle items-center">
      <Kitchen_empty />
      <div className="flex flex-col align-middle items-center justify-center gap-2 mb-4">
        <h3 className="text-3xl font-semibold">Yay! No orders to cook</h3>
        <p className="text-sm font-normal text-gray-500">
          There is no order right now in kitchen.
        </p>
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={fetchOrders}
      >
        Refresh Orders
      </button>
    </div>
  );
};

export default EmptyState;
