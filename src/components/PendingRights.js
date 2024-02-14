import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";

const PendingRights = () => {
  const [pendingRightsData, setPendingRightsData] = useState([]);

  const { fetchedWalletId, setFetchedWalletId } =
    useContext(WalletIDMainContext);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://127.0.0.1:8000/drm/getSpecificRight/",
      params: { wallet_id: "65c4f232ecc0bd903efc8211" },
    };

    axios
      .request(options)
      .then(function (response) {
        setPendingRightsData(response.data.response);
        console.log("pending rights ka data: ", response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="mt-10">
      <div>
        <h3>Your requested rights are :-</h3>
      </div>
      <div>
        {pendingRightsData.map((item, index) => {
          const nftId = item.nftId;
          console.log("pending rights ka item: ", item)
          console.log("Pending Rights page ka nftId", nftId)
          const rightsType = Object.keys(item)[1];
          const rightsData = item[rightsType];
          const imgSource = item.imgSrc;
          console.log("PendingRights ka img source: ", imgSource)

          return (
            <div
              key={index}
              className="mt-5 border-2 border-dashed rounded-lg border-cyan-800 hover:bg-slate-600 hover:border-2 hover:border-dashed flex justify-center gap-5 py-5 px-5 items-center text-gray-300"
            >
              <div className="">
                <h4>NFT ID: {nftId}</h4>
                <h4>Merch Type: {rightsType}</h4>
                <div className="flex gap-3 py-2">
                  <div>
                    <p className="text-sm">
                      Merchant Quantity: {rightsData.merchantQuantity || 0}
                    </p>
                    <p className="text-sm">
                      Merch Title: {rightsData.merchTitle || "Not specified"}
                    </p>
                    <p className="text-sm">
                      License Fees: {rightsData.licenseFees || 0}
                    </p>
                  </div>
                  <div className="leading-0 flex">
                    <div>
                      <p className="text-2l m-0 p-0 font-semibold">
                        Approx. Earnings: ${rightsData.merchantQuantity * rightsData.licenseFees || 0}
                      </p>
                    </div>
                    <div>
                      <img className="w-[8rem] h-[8rem]" src={imgSource} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h4>
          Contact us at contact@blockright.com if rights are not allocated for more than 7 days
        </h4>
      </div>
    </div>

  );
};

export default PendingRights;
