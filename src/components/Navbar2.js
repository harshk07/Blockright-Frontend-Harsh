import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/blockright-logo.png";

const Navbar2 = () => {
  const [myValue, setMyValue] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("walletAddress");
    if (storedValue) {
      setMyValue(storedValue);
    }
  }, []);

  const truncateWalletAddress = (address) => {
    if (!address) return "";
    const startPart = address.slice(0, 7);
    const endPart = address.slice(-6);
    return `${startPart}......${endPart}`;
  };

  return (
    <div className="bg-black">
      <div className="gap-[35rem] flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <Link
          className="mr-40 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "
          to="/"
        >
          <img className="w-[170px]" src={logo} alt="logo blockright" />
        </Link>
        <button className="font-semibold lg:inline-flex mr-20 items-center bg-blue-600 text-white border-2 border-blue-900 py-2 px-3 hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hidden">
          <p>{truncateWalletAddress(myValue)}</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
