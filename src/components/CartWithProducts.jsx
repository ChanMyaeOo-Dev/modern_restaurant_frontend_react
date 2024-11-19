import React from "react";
import { ReactComponent as PlusIcon } from "../svgs/plus.svg";
import { ReactComponent as MinusIcon } from "../svgs/minus.svg";
import { ReactComponent as TrashIcon } from "../svgs/trash.svg";
import { Link, useNavigate } from "react-router-dom";

function CartWithProducts({
  id,
  imageSrc,
  name,
  price,
  quantity,
  special_request,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}) {
  const navigate = useNavigate();
  return (
    <div className="flex px-4 overflow-hidden flex-col justify-center py-3.5 w-full">
      <div className="flex gap-2 justify-center items-center w-full">
        <div className="flex relative">
          <div
            onClick={() => deleteItem(id)}
            className="p-2 absolute left-[-12px] top-[-12px] bg-red-50 rounded-full shadow-sm cursor-pointer"
          >
            <TrashIcon className="w-4 h-4" />
          </div>
          <img
            onClick={() => navigate(`/items/${id}`)}
            loading="lazy"
            src={imageSrc}
            alt={`${name} dish`}
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.33] w-[72px] cursor-pointer"
          />
        </div>

        <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
          <div className="flex gap-2 justify-center items-center w-full">
            <div
              onClick={() => navigate(`/items/${id}`)}
              className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 cursor-pointer"
            >
              <h3 className="text-base font-semibold text-black">{name}</h3>

              <div className="flex items-start mt-1 w-full text-sm leading-none whitespace-nowrap text-zinc-900">
                <span>{price} Ks</span>
              </div>

              <p className="text-xs mt-1 leading-none text-gray-400">
                {special_request}
              </p>
            </div>

            <div className="flex gap-2 justify-center items-center self-stretch my-auto">
              <button
                className="flex flex-col justify-center items-center self-stretch px-1.5 my-auto w-9 h-9 bg-white min-h-[36px] rounded-[91px]"
                aria-label="Decrease quantity"
                onClick={() => decreaseQuantity(id, quantity - 1)}
              >
                <MinusIcon />
              </button>

              <div className="self-stretch my-auto w-6 text-base font-medium leading-7 text-center min-w-[24px] text-zinc-900">
                {quantity}
              </div>

              <button
                className="flex flex-col justify-center items-center self-stretch px-2 my-auto w-9 h-9 bg-white min-h-[36px] rounded-[91px]"
                aria-label="Increase quantity"
                onClick={() => increaseQuantity(id, quantity + 1)}
              >
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartWithProducts;
