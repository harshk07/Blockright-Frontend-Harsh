import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  let color = "hover:text-blue-700 text-md";
  return (
    <div className="sticky top-0 left-0 right-0 ">
      <nav>
        <div className="bg-neutral-100 flex justify-between items-center py-2 shadow-md shadow-black-900 ">
          <div className="ml-3">
            <h1 className="text-black text-xl">
              <b>Blockright</b>
            </h1>
          </div>
          <div className="w-[35%]">
            <ul className="text-black flex justify-around ">
              <li className="mx-2">
                <Link className={color} to="/AdminDashboard">
                  User
                </Link>
              </li>
              <li className="mx-2">
                <Link className={color} to="/AdminDashboard/nft">
                  NFT
                </Link>
              </li>
              <li className="mx-2">
                <Link className={color} to="/AdminDashboard/products">
                  Products
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className={color}
                  to="/AdminDashboard/rights"
                  aria-current="page"
                >
                  Rights
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className={color}
                  to="/AdminDashboard/orders"
                  aria-current="page"
                >
                  Orders
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className={color}
                  to="/AdminDashboard/shop"
                  aria-current="page"
                >
                  Shop
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className={color}
                  to="/AdminDashboard/license"
                  aria-current="page"
                >
                  License
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className={color}
                  to="/AdminDashboard/payment"
                  aria-current="page"
                >
                  Payment
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-black rounded-full h-11 w-11 mr-3">
            <img
              className="rounded-full"
              src="https://i.postimg.cc/WpmS3bd6/sachi.png"
              alt="User"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
