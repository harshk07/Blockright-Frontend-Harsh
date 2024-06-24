import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/blockright-logo.png";
import { useNavigate } from "react-router-dom";
const Navbar2 = () => {
  const [myValue, setMyValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedValue = localStorage.getItem("walletAddress");
    if (storedValue) {
      setMyValue(storedValue);
    }
    console.log(storedValue)
  }, []);

  const truncateWalletAddress = (address) => {
    if (!address) return "";
    const startPart = address.slice(0, 7);
    const endPart = address.slice(-6);
    return `${startPart}......${endPart}`;
  };
  const handleLogout = () => {
    localStorage.removeItem("walletID");
    localStorage.removeItem("walletAddress");
    navigate("/");
  };

  return (
    <div className="bg-black">
      <div className="gap-[35rem] flex p-5 items-center justify-center">
        <Link
          className="mr-40 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "
          to="/"
        >
          <img className="w-[170px]" src={logo} alt="logo blockright" />
        </Link>
        <div className="flex gap-4 justify-around">
          <button className="font-semibold lg:inline-flex items-center bg-[#0B1733] text-white border-2 border-blue-700 py-2 px-3 hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hidden">
            <p>{truncateWalletAddress(myValue)}</p>
          </button>
          <button className="text-white p-2 border-2 rounded-md bg-[#0B1733] border-blue-700">
            <Link to="/NftPage">
              <p>Mint Nft Merch</p>
            </Link>
          </button>
          <button
            onClick={handleLogout}
            className="bg-[#330b0b] border-2 border-red-900 hover:bg-red-700 text-white px-3 text-sm rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
