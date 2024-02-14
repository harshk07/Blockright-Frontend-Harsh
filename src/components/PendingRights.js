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
            params: { wallet_id: "65c4f232ecc0bd903efc8211" },
          }
        );
        console.log("Pending rights data:", response.data.response);

        setErrorMessage(response.data.message);
        setPendingRightsData(response.data.response);
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
        <div
          key={index}
          className="mt-4 flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="md:flex-shrink-0">
            <img
              src={imgSrc}
              alt="image of nft"
              className="h-32 w-full object-cover md:h-full md:w-36"
            />
          </div>
          <div className="p-4 flex flex-col justify-between leading-normal">
            {Object.entries(rightsData).map(([rightsType, rights]) => (
              <div key={rightsType} className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {rights.merchTitle}
                </div>
                <p className="text-gray-700 text-base">
                  {rights.merchantQuantity || 0} {rightsType} minted at $
                  {rights.licenseFees || 0} license fee each.
                </p>
                <div className="mt-4">
                  <span className="text-sm font-semibold">Total Earned: </span>
                  <span className="text-lg font-bold">
                    ${rights.merchantQuantity * rights.licenseFees || 0}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  if (errorMessage) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Link
          to="/NftPage"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <div>Mint your NFT Merch</div>
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 flex">
      {pendingRightsData.map((item, index) => renderRightsCard(item, index))}
    </div>
  );
};

export default PendingRights;
