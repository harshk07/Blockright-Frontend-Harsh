import React from 'react';
import { useCart } from '../context/cart/CartContext';

const CartPage = () => {
    const { cart, removeFromCart } = useCart();

    const handleRemoveItemClick = (itemIndex) => {
        removeFromCart(itemIndex);
        console.log(`Item at index ${itemIndex} removed from the cart`);
    };

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-semibold mb-8">Shopping Cart</h2>
            <ul className="divide-y divide-gray-300">
                {cart.items.map((item, index) => (
                    <li key={index} className="py-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLwGb3KPeGRFGXJuTQIBwU1RA-taAyI-5r3Td5EYCBWz0YlyKFmrvTsl6ExLT5Xfwj-8&usqp=CAU' // Replace with the actual image source
                                alt={item.title}
                                className="w-16 h-16 object-cover mr-4"
                            />
                            <div>
                                <p className="text-lg font-semibold">{item.title}</p>
                                <p className="text-gray-600">${item.price}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <p className="mr-4">Quantity: {item.quantity}</p>
                            <p className="mr-4">Size: {item.size}</p>
                            <p>Color: {item.color}</p>
                        </div>
                        <p className="mt-4">Subtotal: ${item.price * item.quantity}</p>
                        <button
                            onClick={() => handleRemoveItemClick(index)}
                            className="text-white bg-red-500 px-3 py-1 mt-2 rounded-md"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartPage;
