import React from "react";
import { Link, useParams } from "react-router-dom";

function DishCard({ id, photo, name, price, iconSrc }) {
  const { tableNo } = useParams();
  return (
    <Link
      to={`/table/${tableNo}/items/${id}`}
      className="flex relative flex-col pb-2 w-60"
    >
      <img
        loading="lazy"
        src={photo}
        alt={name}
        className="object-cover z-0 self-center w-60 max-w-full rounded aspect-[1.33]"
      />

      <div className="flex z-0 flex-col mt-2 w-full">
        <h3 className="text-base font-semibold text-black">{name}</h3>

        <p className="mt-1 text-sm leading-none text-zinc-900">MMK {price}</p>
      </div>

      {iconSrc && (
        <div
          className="flex absolute right-2 z-0 gap-2 items-start p-1.5 w-8 h-8 bottom-[67px] rounded-[50px]"
          style={{ backgroundColor: "#1C8A43" }}
        >
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain w-5 aspect-square"
          />
        </div>
      )}
    </Link>
  );
}

export default DishCard;
