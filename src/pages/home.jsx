import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ChevronStates } from "../svgs/chevron-states.svg";
import { ReactComponent as Cart } from "../svgs/Cart.svg";
import { ReactComponent as Search } from "../svgs/search.svg";
import CategoriesList from "../components/CategoriesList";
import DishList from "../components/DishList";
import ViewCart from "../components/ViewCart";
import CartContext from "../context/CartContext";
import TableContext from "../context/TableContext";
import useFetch from "../hooks/useFetch";
import "../pages/home.css";

const Home = () => {
  const { tableNo: paramTableNo } = useParams();
  const { table, setTable } = useContext(TableContext);
  const { cart } = useContext(CartContext);
  const [dishList, setDishList] = useState([
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/91929e316eabacbb45ac12b0c42d88b8fe9d5f38d67d7904934928d2716e16eb?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091",

      title: "Ankimo Ponzu",

      price: "MMK 15,000.00",

      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/84f6a2d0feb2fd4c5a795b0a4737dda83f4be3c0fa705783a0a3f7d4442e3664?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091",
    },

    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/91929e316eabacbb45ac12b0c42d88b8fe9d5f38d67d7904934928d2716e16eb?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091",

      title: "Spicy Hotate",

      price: "MMK 9,000.00",

      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/84f6a2d0feb2fd4c5a795b0a4737dda83f4be3c0fa705783a0a3f7d4442e3664?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/91929e316eabacbb45ac12b0c42d88b8fe9d5f38d67d7904934928d2716e16eb?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091",

      title: "Spicy Hotate",

      price: "MMK 9,000.00",

      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/84f6a2d0feb2fd4c5a795b0a4737dda83f4be3c0fa705783a0a3f7d4442e3664?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/91929e316eabacbb45ac12b0c42d88b8fe9d5f38d67d7904934928d2716e16eb?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091",

      title: "Spicy Hotate",

      price: "MMK 9,000.00",

      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/84f6a2d0feb2fd4c5a795b0a4737dda83f4be3c0fa705783a0a3f7d4442e3664?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091",
    },
  ]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();
  const apiCallBody = {
    table_id: paramTableNo,
  };
  const { data: cartData, loading, error } = useFetch(`all_carts`, apiCallBody);
  const {
    data: hotData,
    hotloading,
    hoterror,
  } = useFetch(`hot_items`, apiCallBody);

  console.log("Hot Items", hotData);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    setTable(paramTableNo);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [paramTableNo, setTable]);

  const handleButtonClick = () => {
    navigate(`/table/${table.tableNo}/cart`);
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={`NavBar fixed top-0 left-0 shadow-custom-shadow ${
          hasScrolled ? "shadow-custom-shadow" : "shadow-none"
        }`}
      >
        <div className="div">
          <div className="text-wrapper">You're in Table</div>
          <div className="div-2">
            <div className="text-wrapper-2">Table - T{table.tableNo}</div>
            <ChevronStates className="chevron-states" color="#1D1F1F" />
          </div>
        </div>
        <div className="div-2">
          <div className="div-3">
            <Search className="icon-instance-node" />
          </div>
          <div className="div-3">
            <Cart className="icon-instance-node" onClick={handleButtonClick} />
          </div>
        </div>
      </div>
      {/* Section Header */}
      <div className="container-fluid mt-14 mb-24">
        <div className="_Section">
          <div className="text-wrapper">Menu</div>
          <div className="div">Show All</div>
        </div>
        <div className="_Image_Container mb-4">
          <CategoriesList />
        </div>
        {/* Dish you must try */}
        <DishList dishList={hotData.data} />
      </div>
      {/* View Cart */}
      {cartData.carts
        ? cartData.carts.length > 0 && <ViewCart cartData={cartData} />
        : ""}
    </div>
  );
};

export default Home;
