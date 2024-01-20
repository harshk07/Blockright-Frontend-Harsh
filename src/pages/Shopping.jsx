import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../Global.css";
import { Card1 } from "../components/Card1";
import Footer from "../layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Carousel2 } from "../components/Carousel2";
import axios from "axios";

export const Shopping = () => {
  const navigate = useNavigate();

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
              console.log(filteredData)
            setNftData(filteredData);
          })
          .catch(function (error) {
            console.error(error);
          });
      }, []);
  return (
    <div className="bg-black">
      <Navbar />
      <section className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto mt-10">
        <div className=" my-10">
          <Carousel2 />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center mr-[665px]">
            <div className="ml-5">
              <h2 className="text-white text-4xl font-semibold">
                Explore Product
              </h2>
              <div className="border-b  border-blue-700 w-[32rem] mt-3"></div>

              <div className="flex gap-3 mb-0  ">
                <div className="mt-5">
                  <p className="text-2xl ml-1 mb-2 text-white">Price</p>
                  <div className="dropdown mb-28">
                    <label tabIndex={0} className="btn m-1">
                      Highest Price
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to="/">Item 1</Link>
                      </li>
                      <li>
                        <Link to="/">Item 2</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-2xl ml-1 mb-2 text-white">Likes</p>
                  <div className="dropdown mb-28">
                    <label tabIndex={0} className="btn m-1">
                      Most Liked
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to="/">Item 1</Link>
                      </li>
                      <li>
                        <Link to="/">Item 2</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-2xl ml-1 mb-2 text-white">Creator</p>
                  <div className="dropdown mb-28">
                    <label tabIndex={0} className="btn m-1">
                      Verified only
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to="/">Item 1</Link>
                      </li>
                      <li>
                        <Link to="/">Item 2</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[-5rem]">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2  xl:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {nftData.map((item)=>(
              <div onClick={()=>navigate(`/market/${item._id}`)} className="cursor-pointer">
                <Card1
                  imgSource={item.images[0]}
                  title={item.merchTitle}
                  description={item.description}
                  comment=""
                />
              </div>
            ))}
            {/* Add more Card1 components here */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
