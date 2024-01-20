import React, { useState } from "react";
import { Pageno } from "./Pageno";
import axios from "axios";
import { useEffect } from "react";

export const User = () => {
  const [userData,setUserData] = useState([])
  useEffect(() => {
    // Define your Axios request options
    const options = {
      method: "GET",
      url: "http://127.0.0.1:8000/admin/getUsers",
      params: { adminId: "64e9acc80c8b7ac2f37f492f" },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setUserData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // console.log(userData);

  let a = "border-2 p-3 w-100%";
  let b = "border-2";
  return (
    <div className="h-full">
      <div className="flex justify-center mt-5">
        <table className="w-100% h-100% text-center text-sm">
          <tr className={b}>
            <th className={a}>S.No.</th>
            <th className={a}>WalletId</th>
            <th className={a}>Wallet address</th>
            <th className={a}>WalletType</th>
            <th className={a}>Total Referrals</th>
            <th className={a}>Created At</th>
          </tr>
          {userData && userData.map((user,index)=>(
            <tr key={user._id} className={b}>
              <td>{index+1}</td>
              <td className={a}>{user._id}</td>
              <td className={a}>{user.walletAddress}</td>
              <td className={a}>{user.walletType}</td>
              <td className={a}>{user.totalRefferal.join(" ,")}</td>
              <td className={a}>{user.createdAt}</td>
            </tr> 
          ))}
        </table>
      </div>
      <div className="flex justify-center mt-2 ">
        <div aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            <Pageno number="Previous" />
            <Pageno number="1" />
            <Pageno number="2" />
            <Pageno number="3" />
            <Pageno number="4" />
            <Pageno number="5" />
            <Pageno number="Next" />
          </ul>
        </div>
      </div>
    </div>
  );
};
