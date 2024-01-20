import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../layout/Footer";
import { Card1 } from "../components/Card1";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Tabs } from "../components/Tabs";
import { Carousel1 } from "../components/Carousel1";
import axios from "axios";
import { Dropdown } from "../components/Dropdown";
import { Navigate } from "react-router-dom";

export const Market = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const { id } = useParams();
  console.log(id);
  const [numberOfPieces, setNumberOfPieces] = useState(1);

  const handleIncreasePieces = () => {
    setNumberOfPieces((prev) => prev + 1);
  };

  const handleDecreasePieces = () => {
    if (numberOfPieces > 1) {
      setNumberOfPieces((prev) => prev - 1);
    }
  };
  const [nftData, setNftData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://127.0.0.1:8000/ecommerce/getAll/",
      params: { adminId: "64f85ac8a4fb9e04cd207be5" },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.response)
        const filteredData = response.data.response.filter(
          (item) => item.isPublished === true
        );
        console.log(filteredData);
        setNftData(filteredData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const youMayLike = nftData.slice(0, 4);

  //Selecting the selected item
  const selectItem = nftData.find((item) => item._id === id);

  console.log(selectItem);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  const Navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-black">
      <Navbar />
      <div className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
        <section className="body-font">
          <div className="container mx-auto flex px-5 my-24 md:flex-row flex-col items-center">
            <div className="">
              <Carousel1
                firstElement={selectItem ? selectItem.images[0] : null}
              />
            </div>
            <div className="ml-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-4">
              {/* <p className="text-gray-600"> {selectItem ? selectItem.walletAddress : "No Wallet Address here."}</p> */}
              {/* <h1 className="text-3xl font-bold text-white">
                {selectItem ? selectItem.merchTitle : "Item Does Not Exist"}
              </h1>
              <p className="leading-relaxed text-white font-normal mb-">
                {selectItem ? selectItem.description : "Description Not Found."}
              </p> */}

              <div className="flex gap-20 mb-8">
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 -mt-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-3 ">
                <div className="bg-white p-5 mb-5 overflow-hidden mx-3">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-900 text-2xl">{selectItem ? selectItem.merchTitle : "Item Does Not Exist"}</p>
                    <p className="font-bold text-gray-900 text-2xl">${selectItem ? selectItem.price : "..."}</p>
                  </div>
                  <div className="mx-3">
                    <div className="flex b bg-white mb-4">
                      <div className="w-24 h-28 mt-8 ">
                        <img
                          className="w-24 h-28"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLwGb3KPeGRFGXJuTQIBwU1RA-taAyI-5r3Td5EYCBWz0YlyKFmrvTsl6ExLT5Xfwj-8&usqp=CAU"
                          alt="cloth img"
                        />
                        <div className="flex mt-2 items-baseline">
                          <button
                            onClick={handleDecreasePieces}
                            className="flex items-center justify-center font-semibold w-5 h-5 rounded-full text-white bg-red-500 absolute"
                          >
                            -
                          </button>
                          {/* <p className="text-black inline ml-9">1</p> */}
                          <button
                            onClick={handleIncreasePieces}
                            className="flex items-center justify-center font-semibold w-5 h-5 rounded-full text-white bg-red-500 absolute ml-16 mb-10"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col pl-2 mt-7 items-baseline gap-1">
                        {/* <div className="flex gap-20">
                          <p className="font-bold">{selectItem ? selectItem.merchTitle : "Item Does Not Exist"}</p>
                          <p className="font-bold">${selectItem ? selectItem.price : "..."}</p>
                        </div> */}
                        {Array.from({ length: numberOfPieces }).map(
                          (_, index) => (
                            <div key={index} className="flex gap-[8rem] ">
                              <p className="font-normal flex items-center">
                                <input
                                  type="number"
                                  placeholder="0"
                                  max={10}
                                  min={0}
                                  value={quantity} // Bind value to quantity state
                                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))} // Update quantity state on change
                                  className="w-9 pt-1 pl-2 border-none pb-1 outline-none bg-white border border-black mr-1"
                                />
                                <span className="text-black font-semibold">Piece</span>
                              </p>
                              <Dropdown
                                size="Size"
                                size1="X"
                                size2="XL"
                                size3="XXL"
                                size4="XXXL"
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-end gap-2 mx-3">
                    {/* <Country /> */}
                    {/* <City /> */}
                  </div>
                  <div className="border-b border-1 border-slate-800 mt-6 mx-3"></div>
                  <div className="my-2 flex gap-60 text-end mx-3">
                    <div className="text-black text-lg font-normal">
                      Subtotal <br />
                      Shipping
                    </div>
                    <div className="text-black font-semibold text-lg">
                      ${selectItem ? selectItem.price * quantity : "-"}
                      <br />
                      $80
                    </div>
                  </div>
                  <div className="border-b border-1 border-slate-800 mx-3"></div>
                  <div className="w-[23rem] flex items-baseline mt-4 mx-3">
                    <p className="text-black text-xl font-medium">Total</p>
                    <p className="text-black text-xs ml-[14rem] ">$</p>
                    <p className="text-black text-xl font-semibold ml-1">
                      {selectItem ? selectItem.price*quantity + 80 : "-"}
                    </p>
                  </div>
                  <div className="text-center items-center w-auto py-5 ">
                    <button className="text-white bg-black hover:bg-slate-600 rounded-lg w-[23rem] text-lg py-1 px-4" onClick={() => Navigate("/ConfirmorderPage")}>
                      Proceed to order details
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="flex justify-center gap-3 mb-2">
                <Link to="/ConfirmorderPage">
                  <button className="inline-flex text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <a href="/">Proceed</a>
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
        </section>

        <div className="bg-white">
          <Tabs description={selectItem ? selectItem.description : "Description Not Found."} />
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
            <Link to="/Market">
              <Card1
                imgSource={item.images[0]}
                title={item.merchTitle}
                description={item.description}
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Market;
