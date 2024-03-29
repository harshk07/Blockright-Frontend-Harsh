import React, { useState, useEffect } from "react";
import { useCart } from "../context/cart/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function CartPage2() {
  const { cart, removeFromCart } = useCart();
  const location = useLocation();
  const [productDetails, setProductDetails] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0); // State to hold the total

  useEffect(() => {
    setProductDetails(
      cart.items.map((item) => ({
        productId: item.productId,
        productTitle: item.title,
        productImage: item.imgSource,
        price: item.price,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
        verificationId: "RNO123",
      }))
    );
  }, [cart.items]);

  useEffect(() => {
    const calculatedSubtotal = productDetails.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
  }, [productDetails]);

  useEffect(() => {
    // Assuming shipping and tax are constants
    const shipping = 30;
    const tax = 35;
    const calculatedTotal = subtotal + shipping + tax;
    setTotal(calculatedTotal);
  }, [subtotal]);

  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    console.log("Products after checking out:", productDetails);
    console.log("Before going to the myForm page.. state : ", location.state);
    navigate("/myForm", { state: { productDetails } });
  };
  const handleRemoveItemClick = (itemIndex) => {
    removeFromCart(itemIndex);
    console.log(`Item at index ${itemIndex} removed from the cart`);
  };

  return (
    <>
      {Navbar}
      <div>
        <div
          className="w-full absolute z-10 right-0 h-[80] overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div
            className="flex md:flex-row bg-blue-700 flex-col justify-center"
            id="cart"
          >
            <div
              className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
              id="scroll"
            >
              <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                Products
              </p>
              {cart.items.length === 0 ? (
                <div className="w-full mt-20 text-center text-gray-500">
                  Please add items into the cart
                </div>
              ) : (
                cart.items.map((item, index) => (
                  <div
                    key={index}
                    className="md:flex items-center mt-14 py-8 border-t border-gray-200"
                  >
                    <div className="w-1/4">
                      <img
                        src={item.imgSource}
                        alt={item.title}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                        {item.title}
                      </p>
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">
                          North wolf bag
                        </p>
                        <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                          <option>{item.quantity}</option>
                        </select>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Size: {item.size}
                      </p>
                      <p className="text-xs leading-3 text-gray-600 py-4">
                        Color: {item.color}
                      </p>
                      <p className="w-96 text-xs leading-3 text-gray-600">
                        Composition: 100% calf leather
                      </p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                            Add to favorites
                          </p>
                          <p
                            onClick={() => handleRemoveItemClick(index)}
                            className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                          >
                            Remove
                          </p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
              <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-gray-800">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      ${subtotal.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800">$30</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">$35</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      ${total.toFixed(2)} {/* Display total */}
                    </p>
                  </div>
                  <button
                    onClick={handleProceedToCheckout}
                    className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {` /* width */
        #scroll::-webkit-scrollbar {
          width: 1px;
        }

        /* Track */
        #scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        #scroll::-webkit-scrollbar-thumb {
          background: rgb(133, 132, 132);
        }
      `}
      </style>
    </>
  );
}

export default CartPage2;
