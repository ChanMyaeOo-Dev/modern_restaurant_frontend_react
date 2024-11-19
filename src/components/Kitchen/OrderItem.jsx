import React from "react";

const OrderItem = ({ items }) => {
  const { quantity, item, special_request } = items;
  const { name, options, isVoided } = item;

  return (
    <li className={`flex gap-2 items-start p-3 w-full`}>
      <div className={`w-6 font-medium tracking-tighter`}>{quantity}x</div>
      <div className="flex flex-col flex-1 shrink basis-0">
        <div className={`font-medium`}>{name}</div>
        <div className="self-start text-xs mt-1 text-gray-400">
          {special_request}
        </div>

        {options && (
          <div className="self-start mt-1 text-gray-600">
            {options.map((option, index) => (
              <div key={index}>{option}</div>
            ))}
          </div>
        )}

        {isVoided && (
          <div className="self-start mt-1 text-red-600 whitespace-nowrap">
            Voided
          </div>
        )}
      </div>
    </li>
    // <h2>Item</h2>
  );
};

export default OrderItem;
