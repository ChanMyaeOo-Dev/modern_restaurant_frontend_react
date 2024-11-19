import React from "react";

const DishSpecialInstruction = ({ handleSpecialRequest }) => {
  return (
    <section className="flex flex-col py-4 mt-2 w-full bg-white">
      <h3 className="px-5 w-full text-lg font-medium leading-none text-black">
        Special Requests
      </h3>

      <div className="flex flex-col px-5 mt-4 w-full text-sm text-gray-800 bg-white">
        <textarea
          className="flex-1 border-gray-300 text-sm shrink gap-2 px-3 pt-2.5 pb-16 w-full bg-gray-100 rounded-lg min-h-[96px]"
          placeholder="Add a note"
          aria-label="Special requests"
          onChange={handleSpecialRequest}
        ></textarea>
      </div>
    </section>
  );
};

export default DishSpecialInstruction;
