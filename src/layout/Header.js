import React, { useEffect, useState } from "react";
import { Card1 } from '../components/Card1';
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from 'react-icons/ai';
import axios from "axios";

const Header = () => {
  const [nftData, setNftData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://127.0.0.1:8000/ecommerce/getAll/",
      params: { adminId: "64f85ac8a4fb9e04cd207be5" },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.response)
        const filteredData = response.data.response.filter(
          (item) => item.isPublished === true
        );
        console.log(filteredData)
        setNftData(filteredData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const exploreData = nftData.slice(0, 3);
  return (
    <>
      {/* Tailblock */}
      {/* <Navbar/> */}
      <div className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto" >
        <section className=" body-font box-border  ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-4">
              <h1 className="title-font sm:text-4xl text-4xl mb-4 font-extrabold text-white ">
              Mint your NFTs into fashionable
                {/* <br className="hidden lg:inline-block" /> */}
                 <span className="text-orange-500"> Web3 merch</span> 
              </h1>
              <p className="mb-8 leading-relaxed text-white font-semibold">
              Unleash your NFTs in real world with authentic web3 merchs. Our innovation empowers NFT holders to transform their digital masterpieces into tangible expressions of art, fashion, and innovation. Discover, purchase, and embrace Web3 merchandise that transcends the digital realm. 
                <br />
              </p>
              <div className="flex justify-center gap-4">
                <button className="inline-flex text-white bg-[#3167E7] border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                  <a href="/">Mint Merchs</a>
                </button>
                <button className="gap-1 inline-flex text-white bg-[#3167E7] border-0 py-2 px-5 focus:outline-none hover:bg-blue-700 rounded text-lg items-center">
                  <a href="/">Watch Video</a> 
                  <AiFillPlayCircle/>
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://i.ibb.co/5WyK0mT/Untitled-design-3-removebg-preview.png"
              />
            </div>
          </div>
        </section>

        <div className=" mt-[8rem]  flex  items-center justify-between box-border ">
          <div className="text-white  text-5xl font-bold">Explore</div>
          <div>
            <button className="inline-flex text-white bg-[#3167E7] border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded text-lg ">
              <Link to="/Shopping">View All Merchs</Link>
            </button>
          </div>
        </div>

     
        <div className='border-b  border-blue-700  grow-0 mt-3'></div>

        <div className="flex justify-center mt-20 ">
          {exploreData.map((item) => (
            <Link to="/Shopping"> <Card1 imgSource={item.images[0]} title={item.merchTitle} description={item.description} comment="" /> </Link>
          ))}
        </div>
      </div>
      {/* <About/>
      <Contact/> */}
    </>
  );
};

export default Header;
