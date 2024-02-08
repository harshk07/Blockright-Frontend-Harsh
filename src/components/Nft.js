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
      className="text-center flex"
      style={{ justifyContent: "center", flexDirection: "column" }}
      onClick={() => handleSubmit(imgSource, name, nftId)}
    >
      <div className="h-47 w-44 border-4 border-black hover:border-4 hover:border-white">
        <img
          src={imgSource}
          alt="select Nfts"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        className="my-1 flex max-w-[175px]"
        style={{ justifyContent: "center" }}
      >
        <div className="text-blue-700 font-sans text-l font-semibold">
          {name}
        </div>
      </div>
    </div>
  );
};
