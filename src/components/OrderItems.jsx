import React from "react";
import OrderItem from "./OrderItem";

const OrderItems = ({ orderList }) => {
  console.log("OrderList:", orderList);

  return (
    <section className="flex flex-col gap-3 pt-3 mt-[124px]">
      <div className="flex flex-col gap-3 px-4 w-full">
        {orderList.map((orders, index) => {
          return orders.order_items.map((order, index) => {
            return <OrderItem key={index} item={order} />;
          });
        })}
      </div>
    </section>
  );
};

export default OrderItems;
