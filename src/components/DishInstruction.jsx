import React from "react";
import DishInstructionItem from "./DishInstructionItem";

const DishInstruction = () => {
  const instructionItems = [
    { text: "Less Spicy" },

    { text: "No MSG" },

    { text: "More Cheese" },
  ];

  return (
    <section className="flex flex-col py-4 mt-2 w-full bg-white">
      <h3 className="px-5 w-full text-lg font-semibold leading-none text-black whitespace-nowrap">
        Instructions
      </h3>

      <div className="flex flex-col mt-4 w-full bg-white">
        {instructionItems.map((item, index) => (
          <DishInstructionItem key={index} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default DishInstruction;
