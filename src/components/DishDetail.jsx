import React from "react";
import { motion } from "framer-motion";

const DishDetail = ({ dish }) => {
  return (
    <section className="flex flex-col px-5 py-2 w-full bg-white">
      <motion.div className="flex flex-col w-full">
        <h2 className="text-xl font-semibold text-black">{dish.name}</h2>

        <div className="flex gap-0.5 items-start w-full text-lg font-normal text-gray-800">
          <span>MMK </span>

          <div className="flex items-start whitespace-nowrap">{dish.price}</div>
        </div>
      </motion.div>

      <p className="mt-3 text-sm text-gray-500 font-normal">
        {dish.description}
      </p>
    </section>
  );
};

export default DishDetail;
