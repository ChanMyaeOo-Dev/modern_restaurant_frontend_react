import React from "react";
import CategoriesCard from "./categoriesCard";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading/Loading";

const CategoriesList = () => {
  const { data: categories, loading, error } = useFetch("categories");

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="flex gap-2 items-start px-0">
      <div className="flex overflow-x-auto hide-scrollbar flex-col flex-1 shrink items-start w-full basis-0 min-w-[240px]">
        <div className="flex gap-2 px-4 items-start">
          {categories.data.slice(0, 5).map((category, index) => (
            <CategoriesCard key={index} {...category} />
          ))}
        </div>
        <div className="flex gap-2 px-4 items-start mt-2">
          {categories.data.slice(5).map((category, index) => (
            <CategoriesCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesList;
