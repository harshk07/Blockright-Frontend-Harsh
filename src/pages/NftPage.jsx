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

  const { fetchedWalletId, fetchedWalletAddress } =
    useContext(WalletIDMainContext);
  console.log("Wallet id hai", fetchedWalletId);

  const [apiResponseData, setApiResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    axios
      .get("http://127.0.0.1:8000/nft/get/", {
        params: { userID: fetchedWalletId },
      })
      .then((response) => {
        setApiResponseData(response.data.response);
      })
      .catch((error) => {
        setError("Error fetching API data");
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetchedWalletId]);

  // Define a function to chunk the array into rows of 3
  const chunkArray = (array, size) => {
    return array.reduce(
      (acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]),
      []
    );
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  if (error) return <div>{error}</div>;

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
