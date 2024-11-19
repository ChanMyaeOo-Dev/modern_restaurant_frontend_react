import React from "react";
import OrderItem from "./OrderItem";

const OrderCard = ({ order, handleCompleted }) => {
  const { id, table, order_time, order_items } = order;

  return (
    <article className="flex overflow-hidden flex-col w-full bg-white rounded-lg shadow">
      <header className="flex gap-10 justify-between items-center p-3 w-full bg-gray-200">
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-black">
            Table - {table}
          </h3>

          <time className="text-xs leading-loose text-gray-700">
            #{id}, {order_time}
          </time>
        </div>

        <div
          onClick={() => handleCompleted(id)}
          className={`cursor-pointer px-3 py-2 text-red-600 text-sm font-medium rounded bg-red-50
          `}
        >
          Completed
        </div>
      </header>

      <ul className="flex flex-col w-full text-sm leading-none">
        {order_items.map((items, index) => (
          <OrderItem key={index} items={items} />
        ))}
      </ul>
    </article>
    // <h2>Card</h2>
  );
};

export default OrderCard;
