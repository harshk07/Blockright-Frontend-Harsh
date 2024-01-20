import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import { Footer2 } from "../layout/Footer2";
import { Nft } from "../components/Nft";
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";
import { useContext } from "react";
import axios from "axios";

export const NftPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { fetchedWalletId,setFetchedWalletId,fetchedWalletAddress } = useContext(WalletIDMainContext);
  const [apiResponseData, setApiResponseData] = useState([]);

  useEffect(() => {
    // Make an API request to fetch data dynamically
    axios
      .get("http://127.0.0.1:8000/nft/get/", {
        params: { userID: "651bcd37b800bfb8b3a0edb6" },
      })
      .then((response) => {
        // Set the API response data in the state
        setApiResponseData(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  }, []);

  // Define a function to chunk the array into rows of 3
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <div className="bg-black">
      <Navbar2 value={fetchedWalletAddress} />
      <div className="min-h-[100vh]">
        <section className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
          <div className="text-slate-300">
            <div className="text-center">
              <h3 className="text-3xl font-semibold mt-5 pt-[40px] text-white">
                Select an asset for allocation of digital rights
              </h3>
              <p className="my-2 font-light text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos,
                <br />
                reprehenderit! Lorem ipsum dolor sit icing elit. Possimus.
              </p>
            </div>
            <div className="mt-16 px-10">
              {chunkArray(apiResponseData, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-around space-x-3">
                  {row.map((item, index) => (
                    <Nft
                      key={index}
                      imgSource={item.cached_file_url}
                      name={item.name}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer2 />
    </div>
  );
};
