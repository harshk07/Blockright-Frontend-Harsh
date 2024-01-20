import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink as Link2 } from "react-router-hash-link";
import logo from "../Images/blockright-logo.png";
// import { HashLink as Link2 } from 'react-router-hash-link'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import image from "../Images/images.png";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
        <footer className=" body-font  mt-20  ">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64  md:mx-0 mx-auto  md:text-left  ">
              <Link
                to="/"
                className="flex title-font font-medium  md:justify-start  text-gray-900"
              >
                <img src={logo} alt="blockright img" />
              </Link>
              <p style={{ color: "white" }}>
                Mint your precious NFTs into authentic Web3 merch and open doors
                for passive income.
              </p>
              <br />
              <div className="flex items-center">
                <p
                  className="text-white"
                  style={{
                    marginRight: "5px",
                  }}
                >
                  Built on
                </p>
                <img className="w-[50px]" src={image} />
              </div>
            </div>
            <div className=" justify-end flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-semibold text-white tracking-widest text-xl mb-5">
                  Company
                </h2>
                <hr className="w-[7rem] line-color mb-4" />
                <nav className="list-none mb-5  leading-8">
                  <li>
                    <Link to="" className="text-white hover:text-blue-800">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link2
                      to="#About"
                      smooth
                      className="text-white hover:text-blue-800"
                    >
                      About
                    </Link2>
                  </li>
                  <li>
                    <Link2
                      to="#contact"
                      smooth
                      className="text-white hover:text-blue-800"
                    >
                      Contact
                    </Link2>
                  </li>
                  <li>
                    <Link
                      to="/Shopping"
                      className="text-white hover:text-blue-800"
                    >
                      Market
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-semibold text-white tracking-widest text-xl mb-5">
                  Marketplace
                </h2>
                <hr className="w-[9rem] line-color mb-4" />
                <nav className="list-none mb-5 leading-8">
                  <li>
                    <Link
                      to="products"
                      className="text-white hover:text-blue-800"
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Rightspage"
                      className="text-white hover:text-gray-800"
                    >
                      Collectibles
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Nftpage"
                      className="text-white hover:text-gray-800"
                    >
                      All NFTs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="socials"
                      className="text-white hover:text-gray-800"
                    >
                      Social Network
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-semibold text-white tracking-widest text-xl mb-5">
                  Get in touch
                </h2>
                <hr className="w-[9rem] line-color mb-4" />
                <nav className="list-none mb-5  leading-5">
                  <div className="flex gap-4 mt-4">
                    <Link to="/" className="text-white">
                      <FaFacebookSquare />
                    </Link>
                    <Link to="/" className="text-white">
                      <FaInstagramSquare />
                    </Link>
                    <Link to="/" className="text-white">
                      <BsLinkedin />
                    </Link>
                    <Link to="/" className="text-white">
                      <BsYoutube />
                    </Link>
                    <Link to="/" className="text-white">
                      <BsTwitter />
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </footer>

        <div className="border-b  border-blue-700  mt-2 mx-0 w-auto"></div>

        <div className=" mt-5 pb-5  flex  justify-between">
          <div className="text-white flex ml-10">
            <h2 className="mr-9"> Privacy Policy</h2> Terms of Use
          </div>
          <div className="text-white mr-10">2023, Flow to the Future</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
