import React from "react";
import { ReactComponent as GradientCart } from "../svgs/Gradient_Cart.svg";
import StandardButton from "../components/StandardButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import TableContext from "../context/TableContext";

const ViewCart = ({ cartData }) => {
  const { table } = useContext(TableContext);
  return (
    <div className="w-full h-20 p-4 bg-white shadow-custom-shadow justify-between items-center inline-flex fixed bottom-0 left-0">
      <div className="grow shrink basis-0 h-[42px] justify-start items-center gap-2 flex">
        <div className="w-10 h-10 relative">
          <GradientCart />
          <div className="w-5 h-5 left-[20px] top-[-5px] absolute bg-[#e3200f] rounded-[50px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-[11px] font- font-['Inter'] leading-3">
              {cartData.carts.length}
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start inline-flex">
          <div className="justify-start items-start gap-0.5 inline-flex">
            <div className="text-center text-[#1d1f1f] text-sm font-normal font-['Inter'] leading-none">
              Total Price
            </div>
          </div>
          <div className="justify-start items-start inline-flex">
            <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-relaxed">
              {cartData.total_price}
            </div>
          </div>
        </div>
      </div>
      <Link to={`/table/${table.tableNo}/cart`}>
        <StandardButton buttonText={"View Cart"} />
      </Link>
    </div>
  );
};

export default ViewCart;
