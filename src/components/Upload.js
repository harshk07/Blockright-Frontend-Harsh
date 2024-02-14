import React, { useEffect, useState } from "react";
import Punk from "./Punk";
import PendingRights from "./PendingRights";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [activeTab, setActiveTab] = useState("approved");
  const walletAddress = localStorage.getItem("walletAddress");
  const [transaction, setTransaction] = useState([]);
  const [earned, setEarned] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://127.0.0.1:8000/payment/getTransaction/",
      params: { walletAddress: walletAddress },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("transaction", response.data);
        setTransaction(response.data.transactionList);
        setEarned(response.data.earned);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex gap-[10rem] justify-center mt-10">
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
            Requested Rights
          </button>
        </div>
        <div className="rounded">
          {activeTab === "pendingRights" ? (
            <PendingRights />
          ) : (
            <Punk />
          )}
        </div>
      </div>
      <div className="w-[19rem] text-gray-400">
        <div className="flex mb-4 gap-3">
          <div className="bg-slate-100 w-[14rem] h-[6rem] rounded-xl flex flex-col justify-center items-center">
            <p className="text-cyan-500 font-normal">Earned</p>
            <p className="text-cyan-500 text-4xl font-bold">${earned}</p>
          </div>
          <div className="bg-slate-100 w-[14rem] h-[6rem] rounded-xl flex flex-col justify-center items-center">
            <p className="text-orange-400">Withdrawn</p>
            <p className="text-4xl font-bold text-amber-900">$0</p>
          </div>
        </div>
        <p className="text-white font-bold text-2xl my-2 text-center">
          Recent Transaction
        </p>
        <div class="bg-white shadow-lg rounded-lg p-4 w-[19rem] h-[24rem] overflow-y-scroll">
          {transaction.length === 0 ? (
            <p class="text-gray-500 text-center">No Transactions Yet</p>
          ) : (
            <ul>
              {transaction.map((item, key) => {
                return (
                  <li
                    key={key}
                    class="flex justify-between items-center py-1 border-b"
                  >
                    <div>
                      <p class="text-[10px] font-bold text-gray-800">
                        {item.title} - {item.category}
                      </p>
                      <p class="text-[10px] text-gray-500">
                        #{item.quantity} Sold in {item.address}, {item.country}
                      </p>
                      <p class="text-[10px] text-gray-500">
                        {new Date(item.time).toDateString()}
                      </p>
                    </div>
                    <div>
                      <p class="text-2xl font-bold text-green-500">
                        +${item.totalEarned}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
