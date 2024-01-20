import React from "react";
import { useState } from "react";
import WalletIDMainContext from "./WalletIDMainContext";
const WalletIDMainState = (props) => {
  const [fetchedWalletAddress, setFetchedWalletAddress] = useState("");
  const [fetchedNftDetails, setFetchedNftDetails] = useState({
    "src": "",
    "name": "",
    "price": "",
  });
  const [nftName, setNftName] = useState("");
  const [nftId, setNftId] = useState("");
  const [fetchedWalletId, setFetchedWalletId] = useState("");
  const [fetchRights, setFetchRights] = useState([]);
  const [fetchedWalletType, setFetchedWalletType] = useState("");
  const [fetchNftImage, setFetchNftImage] = useState("");
  return (
    <WalletIDMainContext.Provider
      value={{ fetchedWalletAddress, setFetchedWalletAddress,
        fetchedNftDetails, setFetchedNftDetails, 
        nftName, setNftName, 
        fetchedWalletId, setFetchedWalletId,
        fetchRights, setFetchRights,
        fetchedWalletType, setFetchedWalletType,
        fetchNftImage, setFetchNftImage,nftId, setNftId }}
    >
      {props.children}
    </WalletIDMainContext.Provider>
  );
};

export default WalletIDMainState;
