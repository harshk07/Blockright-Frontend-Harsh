import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";
import { Link } from "react-router-dom";

const PendingRights = () => {
  const [pendingRightsData, setPendingRightsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const { fetchedWalletId } = useContext(WalletIDMainContext);

  useEffect(() => {
    const fetchPendingRights = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/drm/getSpecificRight/",
          {
            params: { wallet_id: "667944130332c767df39ef87" },
          }
        );
        console.log("Pending rights data:", response.data.response);
        // if (response.data.response.length === 0) {
        //   setErrorMessage("No rights Requested");
        // }
        setPendingRightsData(response.data.response);
        // console.log(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPendingRights();
  }, [fetchedWalletId]);

  const renderRightsCard = (item, index) => {
    const { nftId, imgSrc, ...rightsData } = item;
    const shouldRenderCard =
      Object.keys(rightsData).length > 0 &&
      Object.values(rightsData).some(
        (rights) => rights.merchantQuantity > 0 && rights.licenseFees > 0
      );

    if (shouldRenderCard) {
      return (
        <div className="">
          <div
            key={index}
            className="mt-4 flex bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="md:flex-shrink-0">
              <img
                src={imgSrc}
                alt="image of nft"
                className="h-32 w-full object-cover md:h-full md:w-36"
              />
            </div>
            <div className="p-4 leading-normal flex flex-col">
              {Object.entries(rightsData).map(([rightsType, rights]) => (
                <div key={rightsType} className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    {rights.merchTitle}
                  </div>
                  <p className="text-gray-700 text-base">
                    {rights.merchantQuantity || 0} {rightsType} minting for $
                    {rights.licenseFees || 0} license fee each.
                  </p>
                  <div className="mt-4">
                    <span className="text-sm font-semibold">
                      Total Earned:{" "}
                    </span>
                    <span className="text-lg font-bold">
                      ${rights.merchantQuantity * rights.licenseFees || 0}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  if (errorMessage) {
    return (
      <div className="flex flex-col items-center w-[50%] justify-center mt-10">
        <p className="text-blue-500">{errorMessage}</p>
        <Link to="/NftPage">
          <div className="border-2 border-dashed rounded-xl text-2xl border-cyan-800 hover:bg-slate-600 hover:border-2 hover:border-dashed p-3 flex justify-center items-center">
            <h1>Mint your NFT Merch</h1>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col">
      {pendingRightsData.map((item, index) => renderRightsCard(item, index))}
    </div>
  );
};

export default PendingRights;
