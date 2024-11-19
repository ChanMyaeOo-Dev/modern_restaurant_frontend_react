import React from "react";

function Content({ routeName, routeBody }) {
  return (
    <section className="flex gap-1 items-start px-4 pt-1 pb-3 w-full bg-white min-h-[72px]">
      <div className="flex flex-col flex-1 gap-1 shrink justify-center w-full basis-0 min-w-[240px]">
        <h1 className="text-2xl font-semibold leading-none text-black">
          {routeName}
        </h1>

        <p className="mt-1 text-sm leading-none text-gray-500">{routeBody}</p>
      </div>
    </section>
  );
}

export default Content;
