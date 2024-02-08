import React from "react";
import { Link } from "react-router-dom";
// import MintNft from "./MintNft";
import Punk from "./Punk";

const Upload = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] px-10">
      <div className="flex">
        <div className="flex border-2 border-gray-500 rounded">
          <Punk />
        </div>
        <div className="text-white flex mt-14 relative right-0">
          <div className="w-[24rem] ml-72 mt-">
            <Link to="/NftPage">
              <div className="border-2 border-dashed rounded-xl text-2xl mb-[2rem] border-cyan-800 hover:bg-slate-600 hover:border-2 hover:border-dashed ml- h-44 flex justify-center items-center">
                <h1>Mint your NFT Merch</h1>
              </div>
            </Link>
            <div className="flex mb-6 gap-7">
              <div className="bg-[#191E24] w-[11rem] h-[7rem] rounded-xl flex flex-col justify-center items-center">
                <p className="text-blue-600 font-normal">Earned</p>
                <p className="text-blue-600 text-5xl font-bold">$0</p>
              </div>
              <div className="bg-[#191E24] w-[11rem] h-[7rem] rounded-xl flex flex-col justify-center items-center">
                <p
                  style={{
                    color: "grey",
                  }}
                  className=""
                >
                  Withdrawn
                </p>
                <p
                  style={{
                    color: "orange",
                  }}
                  className="text-5xl font-bold"
                >
                  $0
                </p>
              </div>
            </div>
            <p className="text-white font-bold text-3xl my-3">
              Recent Transaction
            </p>
            <div className="bg-[#191E24] w-[24rem] h-[24rem] rounded-xl mb-5 flex justify-center items-center">
              <p className="text-gray-500 text-lg">No Sales Transaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
