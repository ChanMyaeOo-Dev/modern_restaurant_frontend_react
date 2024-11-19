import React from "react";
import { ReactComponent as PlusIcon } from "../svgs/plus.svg";
import { ReactComponent as MinusIcon } from "../svgs/minus.svg";

const DishAddonsItem = ({
  name,
  price,
  quantity,
  onIncreatement,
  onDecreatement,
}) => {
  return (
    <div className="flex justify-between items-center px-5 py-2 w-full rounded-lg min-h-[64px]">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
        <div className="text-base font-normal text-black">{name}</div>

        <div className="mt-1 text-sm font-normal leading-none text-gray-500">
          +MMK {price}
        </div>
      </div>
      {quantity > 0 ? (
        <div className="flex gap-2 justify-center items-center self-stretch my-auto text-2xl font-medium leading-none text-center whitespace-nowrap text-zinc-900">
          <button
            className="flex justify-center p-2 bg-white rounded-full border-[1px]"
            onClick={() => onDecreatement(name)}
          >
            <MinusIcon />
          </button>

          <div className="self-stretch my-auto w-6 text-base leading-7 text-zinc-900">
            {quantity}
          </div>

          <button
            className="flex justify-center p-2 bg-white rounded-full border-[1px]"
            onClick={() => onIncreatement(name)}
          >
            <PlusIcon />
          </button>
        </div>
      ) : (
        <button
          className="flex justify-center p-2 border-[1px] bg-white rounded-full text-zinc-900"
          onClick={() => onIncreatement(name)}
        >
          <PlusIcon />
        </button>
      )}
    </div>
  );
};

export default DishAddonsItem;
