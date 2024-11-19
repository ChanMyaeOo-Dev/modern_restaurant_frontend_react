import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import TableContext from "../context/TableContext";

const Header = ({ leftIcon }) => {
  const { tableNo } = useParams();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <nav className="flex gap-5 justify-between items-center py-2 pr-4 pl-3 w-full text-sm font-medium leading-none text-black whitespace-nowrap min-h-[56px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/09a5b45c11d5c1ab3560ce2ef37a3114a7dbac46a584357479b62899ce298dfa?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        onClick={handleBack}
      />

      <div
        onClick={() => {
          navigate(`/table/${tableNo}/order`);
        }}
        className={`flex gap-1 justify-center items-center self-stretch pr-4 pl-3 my-auto bg-gray-100 min-h-[40px] rounded-[50px] ${
          leftIcon ? "visible" : "hidden"
        }`}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cdcbe7d85d747627bc89b68bbf348f4f32f358b28e82eeebeb99e0084b97d2a?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />

        <div className="self-stretch my-auto">Orders</div>
      </div>
    </nav>
  );
};

export default Header;
