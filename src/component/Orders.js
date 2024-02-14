import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const adminId = "64be2bc6a2032c2dc4535d96";
    const options = {
      method: "GET",
      url: `http://127.0.0.1:8000/order/get/${adminId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        setOrders(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Ecommerce Orders</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-800">
          <thead>
            <tr>
              <th className="border border-gray-800 px-4 py-2">User Name</th>
              <th className="border border-gray-800 px-4 py-2">Email</th>
              <th className="border border-gray-800 px-4 py-2">Mobile</th>
              <th className="border border-gray-800 px-4 py-2">Address</th>
              <th className="border border-gray-800 px-4 py-2">City</th>
              <th className="border border-gray-800 px-4 py-2">Country</th>
              <th className="border border-gray-800 px-4 py-2">Pin</th>
              <th className="border border-gray-800 px-4 py-2">Order Status</th>
              <th className="border border-gray-800 px-4 py-2">
                Payment Status
              </th>
              <th className="border border-gray-800 px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="border border-gray-800 px-4 py-2">
                  {order.userName}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {order.userEmail}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {order.userMobile}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {order.address}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {order.city}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {order.country}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {order.pin}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {order.orderStatus}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {order.paymentStatus}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
