import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import CartBody from "../components/CartBody";
import OrderFooter from "../components/OrderFooter";
import useFetch from "../hooks/useFetch";
import { useParams, useNavigate, redirect } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import axios from "axios";
import { API_URL } from "../services/API_URL";
import StandardButton from "../components/StandardButton";
import { ReactComponent as XIcon } from "../svgs/x.svg";

const Cart = () => {
  const { tableNo } = useParams();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash"); // Default selection

  const handlePaymentConfirmation = () => {
    alert(`Payment confirmed via: ${paymentMethod}`);
    setIsOpen(false); // Close modal after confirming
  };

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
  // const handlePlaceOrder = () => {
  //   axios
  //     .post(`${API_URL}/make_payment`, {
  //       amount: "20000",
  //     })
  //     .then((response) => {
  //       // Ensure the redirect URL is valid
  //       if (response.data.redirect_url) {
  //         window.location.href = response.data.redirect_url; // Use window.location.href for redirection
  //       } else {
  //         console.error("Redirect URL not found in response");
  //       }
  //     })
  //     .catch((error) => {
  //       alert("Error sending data: " + error); // Corrected alert message
  //     });

  //   navigate(`/table/${tableNo}`);
  // };
  const handlePlaceOrder = () => {
    if (paymentMethod === "cash") {
      axios
        .post(`${API_URL}/orders`, {
          table_id: tableNo,
        })
        .then((response) => {})
        .catch((error) => {
          alert("Error sending data:", error);
        });

      navigate(`/table/${tableNo}`);
    } else {
      axios
        .post(`${API_URL}/make_payment`, {
          amount: "20000",
        })
        .then((response) => {
          console.log(
            "first =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
            response.data.redirect_url
          );
          if (response.data.redirect_url) {
            window.location.href = response.data.redirect_url;
          } else {
            console.error("Redirect URL not found in response");
          }
        })
        .catch((error) => {
          alert("Error sending data: " + error);
        });

      // navigate(`/table/${tableNo}`);
    }
  };

  const handlePayment = () => {
    setIsOpen(true);
  };

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
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 z-40 backdrop-blur-sm">
          {/* Modal Box */}
          <div className="bg-white p-4 rounded-lg shadow-lg w-full text-center">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
              <XIcon />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <h4 className="text-sm font-medium w-full text-start text-gray-500">
                Pay As
              </h4>
              {/* Payment Options */}
              <div className="flex items-start gap-3">
                <div
                  className={`flex align-center w-full px-4 h-[56px]  border rounded-lg ${
                    paymentMethod === "cash"
                      ? "border-[#33A031] bg-[#33a0311a] "
                      : "bg-slate-100"
                  }`}
                >
                  <label className="flex items-center space-x-2 w-full">
                    <span className="w-full text-start">Cash</span>
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                      className="form-radio text-[#33A031]"
                    />
                  </label>
                </div>

                <div
                  className={`flex align-center w-full px-4 h-[56px]  border rounded-lg ${
                    paymentMethod === "digital"
                      ? "border-[#33A031] bg-[#33a0311a] "
                      : "bg-slate-100"
                  }`}
                >
                  <label className="flex items-center space-x-2 w-full">
                    <span className="w-full text-start">Digital</span>
                    <input
                      type="radio"
                      name="payment"
                      value="digital"
                      checked={paymentMethod === "digital"}
                      onChange={() => setPaymentMethod("digital")}
                      className="form-radio text-[#33A031]"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full">
              <StandardButton
                buttonText={"Confirm"}
                buttonFunction={handlePlaceOrder}
              />
            </div>
          </div>
        </div>
      )}
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
            handlePayment={handlePayment}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
