import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pageno } from "./Pageno";

export const User = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/admin/getUsers", {
          params: { adminId: "64e9acc80c8b7ac2f37f492f" },
        });
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const tableCellStyle = "border-2 p-3 w-100%";
  const tableHeaderStyle = "border-2";
  const tableRowStyle = "border-2";

  return (
    <div className="h-full">
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-screen-md">
          <table className="w-full text-center text-sm">
            <thead>
              <tr className={tableHeaderStyle}>
                <th className={tableCellStyle}>S.No.</th>
                <th className={tableCellStyle}>WalletId</th>
                <th className={tableCellStyle}>Wallet address</th>
                <th className={tableCellStyle}>WalletType</th>
                <th className={tableCellStyle}>Total Referrals</th>
                <th className={tableCellStyle}>Created At</th>
              </tr>
            </thead>
            <tbody>
              {userData &&
                userData.map((user, index) => (
                  <tr key={user._id} className={tableRowStyle}>
                    <td>{index + 1}</td>
                    <td className={tableCellStyle}>{user._id}</td>
                    <td className={tableCellStyle}>{user.walletAddress}</td>
                    <td className={tableCellStyle}>{user.walletType}</td>
                    <td className={tableCellStyle}>{user.totalRefferal.join(" ,")}</td>
                    <td className={tableCellStyle}>
                      {new Date(user.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
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
