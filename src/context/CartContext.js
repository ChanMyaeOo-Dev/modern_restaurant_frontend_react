import React, { createContext, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
