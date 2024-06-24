import React from "react";
import { useNavigate } from "react-router-dom";
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";
import { useContext } from "react";

export const Nft = ({ imgSource, name, nftId }) => {
  const navigate = useNavigate();
  const { setNftName, setFetchNftImage, setNftId } =
    useContext(WalletIDMainContext);

  function handleSubmit(imgSource, name, nftId) {
    const data = { imgSource: imgSource, name: name, nftId: nftId };
    console.log(data);
    setNftName(name);
    setFetchNftImage(imgSource);
    setNftId(nftId);
    navigate("/Rightspage", { state: { data } });
  }

  return (
    <div
      className="text-center flex flex-col items-center cursor-pointer"
      onClick={() => handleSubmit(imgSource, name, nftId)}
    >
      <div className="h-48 w-48 border-4 border-black hover:border-white transition-colors">
        <img
          src={imgSource}
          alt="select Nfts"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="my-1 max-w-[175px] flex justify-center">
        <div className="text-blue-700 font-sans text-lg font-semibold">
          {name}
        </div>
      </div>
    </div>
  );
};
