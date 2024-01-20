import React, { useEffect,useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import axios from "axios";
import { BiSearchAlt2 } from "react-icons/bi";
import { NFTcard } from "./NFTcard";
export const Shop = () => {
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
    <div className="w-[100%]">
      <div className="mt-5 flex justify-between 2xl:mx-9 ">
        <div className="ml-7 flex justify-between items-center border-2">
          <input
            type="search"
            placeholder="search"
            className="h-8 w-[500px] focus:outline-none pl-2 block  p-4 dark:bg-white dark:text-black"
          />
          <div className="">
            <BiSearchAlt2 size={25} className=" text-gray-400" />
          </div>
        </div>
        <div className=" mr-7">
          <IoMdAddCircleOutline size={35} className=" text-gray-400" />
        </div>
      </div>

      <div className="mx-2 my-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        { nftData.map((item)=>(
             <NFTcard
              pair={item.price}
              pair1={item.discount}
              description={item.description}
              pair2="Here are the biggest"
              img={item.images[0]}
              heading={item.merchTitle}
              l_url="/license"
            />
        ))}
      </div>
    </div>
  );
};
