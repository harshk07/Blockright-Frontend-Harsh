import React, { useEffect } from 'react'
import axios from "axios";

const Orders = () => {
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://127.0.0.1:8000/order/get/%7B64f85ac8a4fb9e04cd207be5%7D'
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);
  return (
    <div>Orders</div>
  )
}

export default Orders