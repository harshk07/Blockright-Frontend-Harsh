import React, { useContext, useEffect, useState } from "react";
import { VscLinkExternal } from "react-icons/vsc";
import axios from "axios";
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";
import { Link, useNavigate } from "react-router-dom";

const Punk = () => {
  const { fetchedWalletId, fetchRights, setFetchRights } =
    useContext(WalletIDMainContext);
  const navigate = useNavigate();
  console.log("fetched rights hai ye", fetchRights);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchRightsData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/user/getRights/",
          { params: { walletId: "65c4f232ecc0bd903efc8211" } }
        );
        console.log(response);
        if (response.data.message) {
          setErrorMessage(response.data.message);
          return;
        }
        const rightsData = Object.values(response.data);
        console.log("Ye rights data hai:", rightsData);
        setFetchRights(rightsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRightsData();
  }, [fetchedWalletId]);

  const renderRightsCard = (item, index) => {
    const hasCapRights =
      item.capRights &&
      item.capRights.merchantQuantity !== undefined &&
      item.capRights.licenseFees !== undefined;
    const hasTshirtRights =
      item.tshirtRights &&
      item.tshirtRights.merchantQuantity !== undefined &&
      item.tshirtRights.licenseFees !== undefined;
    const hasHoodieRights =
      item.hoodieRights &&
      item.hoodieRights.merchantQuantity !== undefined &&
      item.hoodieRights.licenseFees !== undefined;
    const hasMugRights =
      item.mugRights &&
      item.mugRights.merchantQuantity !== undefined &&
      item.mugRights.licenseFees !== undefined;

    const shouldRenderCard =
      hasCapRights || hasTshirtRights || hasHoodieRights || hasMugRights;

    const hasProductId =
      item.capRights.productId ||
      item.tshirtRights.productId ||
      item.hoodieRights.productId ||
      item.mugRights.productId;

    if (shouldRenderCard) {
      return (
        <div
          key={index}
          className="mt-10 border-2 border-dashed rounded-lg border-cyan-800 hover:bg-slate-600 hover:border-2 hover:border-dashed flex justify-center w-[35rem] gap-5 py-5 px-5 items-center text-gray-300"
        >
          <div className="">
            <p className="text-xl font-bold">
              {item.tshirtRights.merchTitle ||
                item.capRights.merchTitle ||
                item.hoodieRights.merchTitle ||
                item.mugRights.merchTitle}
            </p>
            <p className="border-[1.5px] border-b mt-1"></p>
            {/* cap */}
            {item.capRights.merchantQuantity * item.capRights.licenseFees >
              0 && (
                <>
                  <div className="flex justify-between gap-3 py-2">
                    <div>
                      <p className="text-sm">
                        {item.capRights.merchantQuantity || 0} capRights Minted{" "}
                        {item.capRights.licenseFees || 0} license Fees{" "}
                      </p>
                      <p className="text-sm">
                        {" "}
                        {item.capRights.soldQuantity} sold, {item.capRights.availableQuantity} left
                      </p>
                    </div>
                    <div className="leading-0 flex">
                      <div>
                        <p className="text-2xl m-0 p-0 font-semibold">
                          $
                          {item.capRights.merchantQuantity *
                            item.capRights.licenseFees || 0}
                        </p>
                        <p className="text-xs -mt-1 ml-2"> Earned</p>
                      </div>
                      <div className="text-2xl ml-2 mt-3">
                        {item.capRights.productId ? (
                          <VscLinkExternal
                            className="hover:cursor-pointer"
                            onClick={() => {
                              navigate(`/ProductInfo/${hasProductId}`);
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <p className="border-1 border-b"></p>
                </>
              )}
            {/* Tshirt */}
            {item.tshirtRights.merchantQuantity *
              item.tshirtRights.licenseFees >
              0 && (
                <>
                  <div className="flex justify-between gap-3 py-2">
                    <div>
                      <p className="text-sm">
                        {item.tshirtRights.merchantQuantity || 0} tshirtRights
                        Minted {item.tshirtRights.licenseFees || 0} license Fees{" "}
                      </p>
                      <p className="text-sm">
                        {" "}
                        {item.tshirtRights.soldQuantity} sold, {item.tshirtRights.availableQuantity} left
                      </p>
                    </div>
                    <div className="leading-0 flex">
                      <div>
                        <p className="text-2xl m-0 p-0 font-semibold">
                          $
                          {item.tshirtRights.merchantQuantity *
                            item.tshirtRights.licenseFees || 0}
                        </p>
                        <p className="text-xs -mt-1 ml-2"> Earned</p>
                      </div>
                      <div className="text-2xl ml-2 mt-3">
                        {item.tshirtRights.productId ? (
                          <VscLinkExternal
                            className="hover:cursor-pointer"
                            onClick={() => {
                              navigate(`/ProductInfo/${hasProductId}`);
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <p className="border-1 border-b"></p>
                </>
              )}
            {/* HoodieRights */}
            {item.hoodieRights.merchantQuantity *
              item.hoodieRights.licenseFees >
              0 && (
                <>
                  <div className="flex justify-between gap-3 py-2">
                    <div>
                      <p className="text-sm">
                        {item.hoodieRights.merchantQuantity || 0} hoodieRights
                        Minted {item.hoodieRights.licenseFees || 0} license Fees{" "}
                      </p>
                      <p className="text-sm">
                        {" "}
                        {item.hoodieRights.soldQuantity} sold, {item.hoodieRights.availableQuantity} left
                      </p>
                    </div>
                    <div className="leading-0 flex">
                      <div>
                        <p className="text-2xl m-0 p-0 font-semibold">
                          $
                          {item.hoodieRights.merchantQuantity *
                            item.hoodieRights.licenseFees || 0}
                        </p>
                        <p className="text-xs -mt-1 ml-2"> Earned</p>
                      </div>
                      <div className="text-2xl ml-2 mt-3">
                        {item.hoodieRights.productId ? (
                          <VscLinkExternal
                            className="hover:cursor-pointer"
                            onClick={() => {
                              navigate(`/ProductInfo/${hasProductId}`);
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <p className="border-1 border-b"></p>
                </>
              )}
            {/* mugRights */}
            {item.mugRights.merchantQuantity * item.mugRights.licenseFees >
              0 && (
                <>
                  <div className="flex justify-between gap-3 py-2">
                    <div>
                      <p className="text-sm">
                        {item.mugRights.merchantQuantity || 0} mugRights Minted{" "}
                        {item.mugRights.licenseFees || 0} license Fees{" "}
                      </p>
                      <p className="text-sm">
                        {" "}
                        {item.mugRights.soldQuantity} sold, {item.mugRights.availableQuantity} left
                      </p>
                    </div>
                    <div className="leading-0 flex">
                      <div>
                        <p className="text-2xl m-0 p-0 font-semibold">
                          $
                          {item.mugRights.merchantQuantity *
                            item.mugRights.licenseFees || 0}
                        </p>
                        <p className="text-xs -mt-1 ml-2"> Earned</p>
                      </div>
                      <div className="text-2xl ml-2 mt-3">
                        {item.mugRights.productId ? (
                          <VscLinkExternal
                            className="hover:cursor-pointer"
                            onClick={() => {
                              navigate(`/ProductInfo/${hasProductId}`);
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <p className="border-1 border-b"></p>
                </>
              )}
          </div>
          <div className="w-[8rem] h-[8rem]">
            <img
              src={item.imgSrc}
              alt="image of nft"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      );
    }
    return null;
  };

  console.log("Fetch rights here", fetchRights);

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
  return <div>{fetchRights.map(renderRightsCard)}</div>;
};

export default Punk;
