import React from "react";

const OrderInfo = () => {
  return (
    <section>
      <div className="flex flex-col pt-1 pr-4 pb-3 pl-4 bg-white min-h-[72px]">
        <h1 className="text-2xl font-semibold leading-none text-black">
          Order Number: 20
        </h1>

        <time className="mt-1 text-sm leading-none text-gray-500">
          Wed 22 Nov 12:19PM
        </time>
      </div>
    </section>
  );
};

export default OrderInfo;
