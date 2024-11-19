import React from "react";
import Home from "./pages/home";
import Cart from "./pages/cart";
import CategoriesProduct from "./pages/categoriesProduct";
import ProductDetail from "./pages/productDetail";
import OrderDetail from "./pages/orderDetail";
import Kitchen from "./pages/kitchen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { TableProvider } from "./context/TableContext";

const Provider = () => {
  const location = useLocation();

  const pageTransition = {
    initial: { x: "30%", opacity: 0.3 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-80%", opacity: 0.3 },
  };

  return (
    <TableProvider>
      <CartProvider>
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route
              path="/table/:tableNo"
              element={
                <PageWrapper pageTransition={pageTransition}>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/table/:tableNo/cart"
              element={
                <PageWrapper pageTransition={pageTransition}>
                  <Cart />
                </PageWrapper>
              }
            />
            <Route
              path="/table/:tableNo/category/:categoryId"
              element={
                <PageWrapper pageTransition={pageTransition}>
                  <CategoriesProduct />
                </PageWrapper>
              }
            />
            <Route
              path="/table/:tableNo/items/:dishId"
              element={
                <PageWrapper pageTransition={pageTransition}>
                  <ProductDetail />
                </PageWrapper>
              }
            />
            <Route
              path="/table/:tableNo/order"
              element={
                <PageWrapper pageTransition={pageTransition}>
                  <OrderDetail />
                </PageWrapper>
              }
            />
            <Route
              path="/kitchen"
              element={
                <PageWrapper pageTransition={pageTransition}>
                  <Kitchen />
                </PageWrapper>
              }
            />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </AnimatePresence>
      </CartProvider>
    </TableProvider>
  );
};

const PageWrapper = ({ children, pageTransition }) => {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Provider;
