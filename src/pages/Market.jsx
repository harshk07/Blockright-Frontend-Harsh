import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../layout/Footer";
import { Card1 } from "../components/Card1";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Tabs } from "../components/Tabs";
import { Carousel1 } from "../components/Carousel1";
import axios from "axios";
import { Dropdown } from "../components/Dropdown";
import { useCart } from "../context/cart/CartContext";
import { DropdownColor } from "../components/DropdownColor";

export const Market = () => {
  const [numberOfPieces, setNumberOfPieces] = useState(1);
  const [quantities, setQuantities] = useState(Array(numberOfPieces).fill(1));
  const [selectedSizes, setSelectedSizes] = useState(
    Array(numberOfPieces).fill("")
  );
  const [selectedColor, setSelectedColor] = useState(
    Array(numberOfPieces).fill("")
  );
  // const [selectedColor, setSelectedColor] = useState("");
  const [nftData, setNftData] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const itemsToAdd = quantities.map((quantity, index) => ({
      productId: selectItem._id,
      title: selectItem.merchTitle,
      imgSource: selectItem.images[0],
      price: selectItem.price,
      quantity: quantity,
      size: selectedSizes[index], // Use selected size for each piece
      color: selectedColor[index],
    }));
    console.log("selected Product ID in Market page:", selectItem._id);

    itemsToAdd.forEach((item) => addToCart(item));
  };

  const handleIncreasePieces = () => {
    setNumberOfPieces((prev) => prev + 1);
    setQuantities((prevQuantities) => [...prevQuantities, 1]);
    setSelectedSizes((prevSizes) => [...prevSizes, ""]);
    setSelectedColor((prevColor) => [...prevColor, ""]);
  };

  const handleDecreasePieces = () => {
    if (numberOfPieces > 1) {
      setNumberOfPieces((prev) => prev - 1);
      setQuantities((prevQuantities) => prevQuantities.slice(0, -1));
      setSelectedSizes((prevSizes) => prevSizes.slice(0, -1));
      setSelectedColor((prevColor) => prevColor.slice(0, -1));
    }
  };

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const handleSizeChange = (index, size) => {
    const newSizes = [...selectedSizes];
    newSizes[index] = size;
    setSelectedSizes(newSizes);
  };

  const handleColorChange = (index, color) => {
    const newColor = [...selectedColor];
    newColor[index] = color;
    setSelectedColor(newColor);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://127.0.0.1:8000/ecommerce/getAll/",
      params: { adminId: "64f85ac8a4fb9e04cd207be5" },
    };

    axios
      .request(options)
      .then(function (response) {
        const filteredData = response.data.response.filter(
          (item) => item.isPublished === true
        );
        console.log("filter data", filteredData);
        setNftData(filteredData);
        console.log("nft data inside", filteredData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const youMayLike = nftData.slice(0, 4);
  console.log("nftdata outside", nftData);
  const selectItem = nftData.find((item) => item._id === id);
  return (
    <div className="bg-black">
      <Navbar />
      <div className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
        <section className="body-font">
          <div className="container mx-auto flex px-5 mt-10 md:flex-row flex-col items-start">
            <Carousel1
              firstElement={selectItem ? selectItem.images[0] : null}
            />
            <div className="ml-2 flex flex-col mb-10 items-center text-center">
              <div className="flex flex-col mb-16 items-center text-center gap-3 ">
                <div className="bg-white p-[2.5rem] mb-5 overflow-hidden mx-3">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-900 text-2xl">
                      {selectItem
                        ? selectItem.merchTitle
                        : "Item Does Not Exist"}
                    </p>
                    <p className="font-bold text-gray-900 text-2xl">
                      ${selectItem ? selectItem.price : "..."}
                    </p>
                  </div>
                  <div className="mx-3">
                    <div className="flex b bg-white mb-4">
                      <div className="w-24 h-28 mt-8 ">
                        {selectItem && (
                          <img
                            className="w-[12rem] object-contain"
                            src={selectItem.images[0]}
                            alt="NFT image"
                          />
                        )}

                        <div className="flex mt-2 gap-14">
                          <button
                            onClick={handleDecreasePieces}
                            className="flex items-center justify-center font-semibold w-5 h-5 rounded-full text-white bg-red-500"
                          >
                            -
                          </button>
                          <button
                            onClick={handleIncreasePieces}
                            className="flex items-center justify-center font-semibold w-5 h-5 rounded-full text-white bg-red-500"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col pl-2 mt-7 items-baseline gap-1">
                        {Array.from({ length: numberOfPieces }).map(
                          (_, index) => (
                            <div key={index} className="flex gap-[1rem] ">
                              <p className="font-normal flex items-center">
                                <input
                                  type="number"
                                  placeholder="0"
                                  max={10}
                                  min={0}
                                  value={quantities[index]}
                                  onChange={(e) =>
                                    handleQuantityChange(
                                      index,
                                      parseInt(e.target.value, 10)
                                    )
                                  }
                                  className="w-9 pt-1 pl-2 border-none pb-1 outline-none bg-white border border-black mr-1"
                                />
                                <span className="text-black font-semibold">
                                  Piece
                                </span>
                              </p>
                              <Dropdown
                                size="Size"
                                onSelectSize={(size) =>
                                  handleSizeChange(index, size)
                                }
                              />
                              <DropdownColor
                                color="Color"
                                onSelectColor={(color) =>
                                  handleColorChange(index, color)
                                }
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-1 border-slate-800 mt-[6rem] mx-3"></div>
                  <div className="my-2 flex gap-[17rem] text-end mx-3">
                    <div className="text-black flex flex-col text-lg font-normal">
                      <span>Subtotal</span>
                      <span>Shipping</span>
                    </div>
                    <div className="text-black font-semibold text-lg">
                      $
                      {selectItem
                        ? selectItem.price *
                          quantities.reduce((acc, qty) => acc + qty, 0)
                        : "-"}
                      <br />
                      $80
                    </div>
                  </div>
                  <div className="border-b border-1 border-slate-800 mx-3"></div>
                  <div className="w-[23rem] flex items-baseline mt-4 mx-3">
                    <p className="text-black text-xl font-medium">Total</p>
                    <p className="text-black text-xl ml-[18rem] ">$</p>
                    <p className="text-black text-xl font-semibold ml-1">
                      {selectItem
                        ? selectItem.price *
                            quantities.reduce((acc, qty) => acc + qty, 0) +
                          80
                        : "-"}
                    </p>
                  </div>
                  <div className="text-center items-center w-auto py-5 ">
                    <button
                      className="text-white bg-black hover:bg-slate-600 rounded-lg w-[23rem] text-lg py-1 px-4"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white">
          <Tabs
            description={
              selectItem ? selectItem.description : "Description Not Found."
            }
          />
        </div>

        <div className="bg-blue-600 text-center font-semibold py-4 mb-10">
          <p className="text-white text-2xl">Buy Authentic, Support Creator</p>
          <p className="text-white text-3xl">
            Exclusive License web3 goodies here.
          </p>
        </div>
        <div className="text-center mt-20 font-bold">
          <p className="text-white text-3xl">You may also like</p>
        </div>

        <div className="grid grid-cols-4 mt-4">
          {youMayLike.map((item) => (
            <div
              key={item._id}
              onClick={() => {
                navigate(`/market/${item._id}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer"
            >
              <Card1
                imgSource={item.images[0]}
                title={item.merchTitle}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
