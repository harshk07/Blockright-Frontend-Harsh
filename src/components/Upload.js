import React, { useState } from "react";
import { Link } from "react-router-dom";
import Punk from "./Punk";
import PendingRights from "./PendingRights";

const Upload = () => {
  const [activeTab, setActiveTab] = useState("approved");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex gap-[10rem] justify-center mt-14">
      <div className="w-[40rem]">
        <div className="flex">
          <button
            className={`${
              activeTab === "approved"
                ? "bg-green-400 text-black"
                : "border-[1px] border-gray-800 text-white"
            } py-2 px-4 rounded-l-lg`}
            onClick={() => handleTabClick("approved")}
          >
            Approved
          </button>
          <button
            className={`${
              activeTab === "pendingRights"
                ? "bg-orange-400 text-white"
                : "border-[1px] border-gray-800 text-white"
            } py-2 px-4 rounded-r-lg`}
            onClick={() => handleTabClick("pendingRights")}
          >
            Pending Rights
          </button>
        </div>
        <div className="rounded">
          {activeTab === "pendingRights" ? <PendingRights /> : <Punk />}
        </div>
      </div>
      <div className="w-[24rem] text-gray-400">
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
        <p className="text-white font-bold text-3xl my-3">Recent Transaction</p>
        <div className="bg-[#191E24] w-[24rem] h-[24rem] rounded-xl mb-5 flex justify-center items-center">
          <p className="text-gray-500 text-lg">No Sales Transaction</p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
