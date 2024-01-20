import React from 'react'
import { useNavigate } from 'react-router-dom'
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";
import { useContext } from "react";

export const Nft = ({ imgSource, name, price }) => {
  const navigate = useNavigate();
  const { setNftName, setFetchNftImage } = useContext(WalletIDMainContext);

  function handleSubmit(imgSource, name, price) {
    const data = { "imgSource": imgSource, "name": name, "price": price };
    setNftName(name);
    setFetchNftImage(imgSource);
    navigate('/Rightspage', { state: { data } });
  }

  return (
    <div className='text-center flex' style={{"justifyContent":"center","flexDirection":"column"}} onClick={() => handleSubmit(imgSource, name, price)}>
      <div className="h-47 w-44 border-4 border-black hover:border-4 hover:border-white">
        <img src={imgSource} alt="select Nfts" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
      </div>
      <div className='my-1 flex max-w-[175px]' style={{"justifyContent":"center"}}>
        <div className='text-blue-700 font-sans text-l font-semibold'>{name}</div>
      </div>
    </div>
  )
}
