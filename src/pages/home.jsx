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
          <div
            className="div-3"
            onClick={() => navigate(`/table/${table.tableNo}/feedback`)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                stroke="#1D1F1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 12.0639V10.6151C9 10.1984 9.07813 9.76515 9.23438 9.31534C9.39536 8.8608 9.61316 8.43229 9.88778 8.02983C10.1671 7.62263 10.4796 7.27936 10.8253 7L12.0185 7.77415C11.7391 8.19555 11.5047 8.63589 11.3153 9.09517C11.1307 9.54972 11.0407 10.0516 11.0455 10.6009V12.0639H9ZM12.6009 12.0639V10.6151C12.6009 10.1984 12.679 9.76515 12.8352 9.31534C12.9962 8.8608 13.214 8.43229 13.4886 8.02983C13.768 7.62263 14.0805 7.27936 14.4261 7L15.6193 7.77415C15.34 8.19555 15.1056 8.63589 14.9162 9.09517C14.7315 9.54972 14.6416 10.0516 14.6463 10.6009V12.0639H12.6009Z"
                fill="black"
              />
            </svg>
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
