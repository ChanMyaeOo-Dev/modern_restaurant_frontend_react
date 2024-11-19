import React from "react";
import DishCard from "./DishCard";

function DishList({ dishList }) {
  return (
    <section className="flex overflow-hidden flex-col w-[100vw]">
      <h2 className="self-stretch px-4 py-2 w-full text-xl font-semibold tracking-tight leading-snug text-zinc-900">
        Dishes you must try
      </h2>

      <div className="flex overflow-x-auto hide-scrollbar px-4 mt-2 w-full">
        <div className="flex gap-4 items-start">
          {dishList &&
            dishList.map((dish, index) => <DishCard key={index} {...dish} />)}
        </div>
      </div>
    </section>
  );
}

export default DishList;
