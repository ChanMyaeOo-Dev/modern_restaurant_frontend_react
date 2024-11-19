import React, { useContext } from "react";
import Header from "../components/Header";
import CategoriesImage from "../images/Categorie.png";
import ProductCart from "../components/ProductCart";
import ViewCart from "../components/ViewCart";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CartContext from "../context/CartContext";
import Loading from "../components/Loading/Loading";

const CategoriesProduct = () => {
  const { cart } = useContext(CartContext);
  const { categoryId, tableNo: paramTableNo } = useParams();
  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetch(`category/${categoryId}`);
  const apiCallBody = {
    table_id: paramTableNo,
  };
  const { data: cartData, loading, error } = useFetch(`all_carts`, apiCallBody);

  const category = categories && categories.items;
  console.log(categories);

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + parsePrice(item.price) * item.quantity,
      0
    );
  };

  if (categoriesLoading) return <Loading />;
  if (categoriesError) return <div>Error: {categoriesError.message}</div>;

  return (
    <React.Fragment>
      <div className="flex flex-col w-full bg-white fixed top-0 left-0 z-10 overflow-hidden h-[112px]">
        <Header leftIcon={false} />
        <section className="flex gap-1 items-start px-4 pt-1 pb-3 w-full bg-white">
          <div className="flex flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px]">
            <h1 className="text-2xl font-semibold leading-none text-black">
              {categories ? categories.category : "Category"}
            </h1>
          </div>
        </section>
        {/* <img
          src={categories.category_image}
          className="absolute bottom-[-24px] right-[-24px] w-[124px]"
        /> */}
      </div>
      <div className="mx-auto p-4 mt-[112px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {category.map((dish, index) => (
            <ProductCart key={index} {...dish} />
          ))}
        </div>
      </div>
      {cartData.carts
        ? cartData.carts.length > 0 && <ViewCart cartData={cartData} />
        : ""}
    </React.Fragment>
  );
};

export default CategoriesProduct;
