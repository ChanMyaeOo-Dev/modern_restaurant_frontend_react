import React from "react";
import { useState } from "react";

const DishInstructionItem = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex justify-between items-center px-5 py-3 w-full rounded-lg">
      <div className="flex-1 shrink self-stretch my-auto text-[15px] font-normal text-black basis-0">
        {text}
      </div>

      <div className="flex gap-2 items-center self-stretch my-auto w-6">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only peer"
          />
          <div
            className={`w-6 h-6 bg-white rounded-md border-2 border-gray-300 peer-checked:bg-[#28BF5D] peer-checked:border-[#28BF5D] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-[#28BF5D] transition-all duration-300 ease-in-out`}
          >
            {isChecked && (
              <svg
                className="w-full h-full p-[2px] fill-none stroke-white stroke-[3px]"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default DishInstructionItem;
