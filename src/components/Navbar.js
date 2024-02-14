import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Navbar2 from './Navbar2';
// import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link2 } from "react-router-hash-link";
import logo from "../Images/blockright-logo.png";
import { ethers } from "ethers";
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";
import { useContext } from "react";
import { useCart } from "../context/cart/CartContext";

const Navbar = () => {
  const { setFetchedWalletAddress } = useContext(WalletIDMainContext);
  const { getTotalItems } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  // const [connButtonText,setConnButtonText]=useState('Connect Wallet');
  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
        });
    } else {
      setErrorMessage("Install metamask");
    }
  };
  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    setFetchedWalletAddress(newAccount);
    getUserBalance(newAccount);
  };
  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.formatEther(balance));
      });
  };
  return (
    <>
      <div className="lg:mx-auto lg:w-[55rem]  2xl:w-[75rem] 2xl:mx-auto">
        {/* <h1 style={{ "color": "white" }}>address:{defaultAccount}</h1>
        <h1 style={{ "color": "white" }}>Balance:{userBalance}</h1> */}
        <header className="body-font" id="Home">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              className="flex title-font font-medium items-center w-30 text-gray-900 mb-4 md:mb-0"
              to="/"
            >
              <img className="w-[170px]" src={logo} alt="Wallet" />
            </Link>
            <div className="ml-[26rem] mb-10 lg:hidden text-white text-5xl">
              <Link className="" to="/">
                &#8801;
              </Link>
            </div>
            <nav className="mr-[2rem] gap-8 md:ml-auto lg:flex flex-wrap items-center text-base justify-center text-white font-semibold hidden">
              <Link className="hover:text-gray-300" to="/">
                Home
              </Link>
              <Link className="hover:text-gray-300" to="/Shopping">
                Market
              </Link>
              <Link2 className="hover:text-gray-300" to="#contact" smooth>
                Contact us
              </Link2>
              {/* <Link className="hover:text-gray-300" to="/CartPage">
                My Cart ({getTotalItems()})
              </Link> */}
              <Link className="hover:text-gray-300" to="/cartt">
                Cart({getTotalItems()})
              </Link>
              <Link className="hover:text-gray-300" to="/MyProfile">
                My Profile
              </Link>
            </nav>
            <button className="font-semibold mr-[2rem] lg:inline-flex items-center bg-[#3167E7] text-white border-2 border-blue-900 py-1 px-3 hover:bg-slate-200 hover:text-black rounded text-base transition-all mt-4 md:mt-0  hidden">
              <Link to="/ConnectWallet">Connect Wallet</Link>
            </button>
          </div>
          {errorMessage}
        </header>
      </div>
    </>
  );
};

export default Navbar;
