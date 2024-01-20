// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Define initial state and reducer
const CartContext = createContext();
const initialState = { items: [] };

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, items: [...state.items, action.payload] };
        default:
            return state;
    }
};

// Create context

// Create a custom hook for using the CartContext
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

// Create CartProvider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = (index) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: index });
    };

    return (
        <CartContext.Provider value={{ cart: state, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
