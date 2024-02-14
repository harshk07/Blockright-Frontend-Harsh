import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../layout/Footer";
import { Card1 } from "../components/Card1";
import { Link } from "react-router-dom";
import { Tabs } from "../components/Tabs";
import { Carousel1 } from "../components/Carousel1";

export const ProductInfo = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="bg-black">
      <Navbar />
      <div className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
        <section className="body-font">
          <div className="container mx-auto flex px-5 my-24 md:flex-row flex-col items-center">
            <div className="">
              <Carousel1 />
            </div>
            <div className="ml-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-4">
              <p className="text-gray-600">0452340##546#$%^&*6864644</p>
              <h1 className="text-3xl font-bold text-white">
                #Punk 201-Exclusive Hoodies
              </h1>
              <p className="leading-relaxed text-white font-normal mb-">
                Copper mug try-hard pitchfork pour-oved tacos poke beard tote
                bag. Heirloom echo park mlkshk tote bag selvage hot chicken
                authentic tumeexagon try-hard chambray Lorem, ipsum dolor
                adipisicing elit. Assumenda..
              </p>

              <div className="flex gap-20 mb-8">
                <div>
                  <p className="font-semibold text-lh text-white">Size</p>
                  <div className="text-white font-semibold text-2xl w-64">
                    <button
                      type="button"
                      className={`pr-1 ${
                        selectedSize === "S" ? "text-slate-500" : "text-white"
                      }`}
                      onClick={() => handleSizeClick("S")}
                    >
                      S
                    </button>
                    <button
                      className={`px-2 ${
                        selectedSize === "M" ? "text-slate-500" : "text-white"
                      }`}
                      onClick={() => handleSizeClick("M")}
                    >
                      M
                    </button>
                    <button
                      className={`px-1 ${
                        selectedSize === "L" ? "text-slate-500" : "text-white"
                      }`}
                      onClick={() => handleSizeClick("L")}
                    >
                      L
                    </button>
                    <button
                      className={`px-2 ${
                        selectedSize === "XL" ? "text-slate-500" : "text-white"
                      }`}
                      onClick={() => handleSizeClick("XL")}
                    >
                      XL
                    </button>
                    <button
                      className={`px-2 ${
                        selectedSize === "XXL" ? "text-slate-500" : "text-white"
                      }`}
                      onClick={() => handleSizeClick("XXL")}
                    >
                      XXL
                    </button>
                    <button
                      className={`px-2 ${
                        selectedSize === "XXXL"
                          ? "text-slate-500"
                          : "text-white"
                      }`}
                      onClick={() => handleSizeClick("XXXL")}
                    >
                      XXXL
                    </button>
                  </div>

                  <div>
                    <p className="font-semibold text-lg text-white mt-5">
                      Color
                    </p>
                    <button
                      className={`rounded-full border-2 bg-white mx-2 p-3 ${
                        selectedColor === "white" ? "border-yellow-400" : ""
                      } hover:border-pink-400 hover:border-2`}
                      onClick={() => handleColorClick("white")}
                    ></button>

                    <button
                      className={`rounded-full border-2 bg-black mx-2 p-3 ${
                        selectedColor === "black" ? "border-yellow-400" : ""
                      }  hover:border-pink-400 hover:border-2`}
                      onClick={() => handleColorClick("black")}
                    ></button>

                    <button
                      className={`rounded-full border-2 bg-blue-600 mx-2 p-3 ${
                        selectedColor === "blue" ? "border-yellow-400" : ""
                      } hover:border-pink-400 hover:border-2`}
                      onClick={() => handleColorClick("blue")}
                    ></button>

                    <button
                      className={`rounded-full border-2 bg-red-600
                        mx-2 p-3 ${
                        selectedColor === "red" ? "border-yellow-400" : ""
                      } hover:border-pink-400 hover:border-2`}
                      onClick={() => handleColorClick("red")}
                    ></button>
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Price</p>
                  <h1 className="text-blue-600 font-bold text-7xl">$80</h1>
                </div>
              </div>

              <div className="flex justify-center gap-3 mb-2">
                <Link to="/ConfirmorderPage">
                  <button className="inline-flex text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <a href="/">Book Merch</a>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white">
          <Tabs />
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
          <Link to="/Market">
            <Card1
              imgSource="https://dummyimage.com/720x400"
              title="The Catalyzer"
              description="Phdoto booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              
            />
          </Link>
          <Link to="/Market">
            <Card1
              imgSource="https://dummyimage.com/720x400"
              title="The Catalyzer"
              description="Phdoto booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              
            />
          </Link>
          <Link to="/Market">
            <Card1
              imgSource="https://dummyimage.com/720x400"
              title="The Catalyzer"
              description="Phdoto booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              
            />
          </Link>
          <Link to="/Market">
            <Card1
              imgSource="https://dummyimage.com/720x400"
              title="The Catalyzer"
              description="Phdoto booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductInfo;