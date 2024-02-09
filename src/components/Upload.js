import React, { useState } from "react";
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
      <div className="w-[17rem] text-gray-400">
        <div className="flex mb-4 gap-5">
          <div className="bg-slate-100 w-[10rem] h-[6rem] rounded-xl flex flex-col justify-center items-center">
            <p className="text-cyan-500 font-normal">Earned</p>
            <p className="text-cyan-500 text-4xl font-bold">$0</p>
          </div>
          <div className="bg-slate-100 w-[10rem] h-[6rem] rounded-xl flex flex-col justify-center items-center">
            <p className="text-orange-400">Withdrawn</p>
            <p className="text-4xl font-bold text-amber-900">$0</p>
          </div>
        </div>
        <p className="text-white font-bold text-2xl my-2 text-center">
          Recent Transaction
        </p>
        <div className="bg-slate-100 text-black w-[17rem] h-[22rem] rounded-xl mb-5 flex justify-center items-center">
          <p className="text-lg">No Sales Transaction</p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
