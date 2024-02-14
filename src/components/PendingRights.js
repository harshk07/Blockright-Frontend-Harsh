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
          className="mt-10 border-2 border-dashed rounded-lg border-cyan-800 hover:bg-slate-600 hover:border-2 hover:border-dashed flex justify-center w-[35rem] gap-5 py-5 px-5 items-center text-gray-300"
        >
          {Object.entries(rightsData).map(([rightsType, rights]) => (
            <div key={rightsType} className="">
              <p className="text-xl font-bold">{rights.merchTitle}</p>
              <p className="border-[1.5px] border-b mt-1"></p>
              <div>
                <div className="flex gap-3 py-2">
                  <div>
                    <p className="text-sm">
                      {rights.merchantQuantity || 0} {rightsType} Minted{" "}
                      {rights.licenseFees || 0} license Fees{" "}
                    </p>
                  </div>
                  <div className="leading-0 flex">
                    <div>
                      <p className="text-2xl m-0 p-0 font-semibold">
                        ${rights.merchantQuantity * rights.licenseFees || 0}
                      </p>
                      <p className="text-xs -mt-1 ml-2"> Earned</p>
                    </div>
                  </div>
                </div>
                <p className="border-1 border-b"></p>
              </div>
            </div>
          ))}
          <div className="w-[8rem] h-[8rem]">
            <img
              src={imgSrc}
              alt="image of nft"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      );
    }
    return null;
  };

  if (errorMessage) {
    return (
      <div className="text-xl font-bold flex items-center justify-center gap-3 w-[32rem]">
        <Link to="/NftPage">
          <div className="border-2 border-dashed rounded-xl text-xl mb-[1rem] border-cyan-800 hover:bg-slate-600 hover:border-2 hover:border-dashed flex py-3.5 justify-center items-center">
            <h1>Mint your NFT Merch</h1>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10">
      {pendingRightsData.map((item, index) => renderRightsCard(item, index))}
    </div>
  );
};

export default PendingRights;
