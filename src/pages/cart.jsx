import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import CartBody from "../components/CartBody";
import OrderFooter from "../components/OrderFooter";
import useFetch from "../hooks/useFetch";
import { useParams, useNavigate, redirect } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import axios from "axios";
import { API_URL } from "../services/API_URL";

const Cart = () => {
  const { tableNo } = useParams();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Table ID and item ID
  const apiCallBody = {
    table_id: tableNo,
  };
  const { data: cartData, loading, error } = useFetch(`all_carts`, apiCallBody);

  useEffect(() => {
    if (cartData && cartData.carts) {
      setCart(cartData.carts);
    }
  }, [cartData]);
  const handlePlaceOrder = () => {
    axios
      .post(`${API_URL}/make_payment`, {
        amount: "20000",
      })
      .then((response) => {
        // Ensure the redirect URL is valid
        if (response.data.redirect_url) {
          window.location.href = response.data.redirect_url; // Use window.location.href for redirection
        } else {
          console.error("Redirect URL not found in response");
        }
      })
      .catch((error) => {
        alert("Error sending data: " + error); // Corrected alert message
      });

    // navigate(`/table/${tableNo}`);
  };
  // const handlePlaceOrder = () => {
  //   axios
  //     .post(`${API_URL}/orders`, {
  //       table_id: tableNo,
  //     })
  //     .then((response) => {
  //       console.log("Data sent successfully:", response.data);
  //     })
  //     .catch((error) => {
  //       alert("Error sending data:", error);
  //     });

  //   navigate(`/table/${tableNo}`);
  // };

  const updateCart = async (id, newQuantity) => {
    const data = new URLSearchParams();
    data.append("id", id);
    data.append("quantity", newQuantity);

    try {
      const response = await axios.put(`${API_URL}/carts`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log(response.data);

      // Update the local cart state without reloading the page
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
    } catch (error) {
      console.error(error);
    }
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + 1;
          updateCart(id, newQuantity);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedCart;
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          updateCart(id, newQuantity);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedCart;
    });
  };

  const deleteItem = async (id) => {
    const data = new URLSearchParams();
    data.append("cart_id", id);

    try {
      const response = await axios.delete(`${API_URL}/carts`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      });
      console.log(response.data);

      // Remove the item from the cart state
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Navigation leftIcon={true} routeName={"Cart"} routeBody={"Table-T12"} />
      <CartBody
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        deleteItem={deleteItem}
      />
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full">
          <OrderFooter
            buttonText={"Place Order"}
            getTotalPrice={parseInt(cartData.total_price)}
            handleAction={handlePlaceOrder}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
