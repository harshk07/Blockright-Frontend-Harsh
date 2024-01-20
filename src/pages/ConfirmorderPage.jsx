import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../layout/Footer";
import MyForm from "./LandingPage/MyForm";
import { Carousel1 } from "../components/Carousel1";
import { Dropdown } from "../components/Dropdown";
import { Country } from "../components/Country";
import axios from "axios";


export const ConfirmorderPage = () => {
  const [numberOfPieces, setNumberOfPieces] = useState(1);

  const handleIncreasePieces = () => {
    setNumberOfPieces((prev) => prev + 1);
  };

  const handleDecreasePieces = () => {
    if (numberOfPieces > 1) {
      setNumberOfPieces((prev) => prev - 1);
    }
  };
  
  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    userEmail: "",
    userMobile: 0,
    city: "",
    country: "",
    actress: "",
    pin: 0,
    products: {
      productImage: "",
      quantity: 0,
      color: "",
      size: "",
      quality: "",
      verificationId: "",
    },
  });

  const handleChange = (e) => {
    // Handle form input changes and update the formData state
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/order/ecommerce/", formData);

      // Handle the response from the API
      console.log("Response from API:", response.data);

      // Clear the form after successful submission
      setFormData({
        userId: "",
        userName: "",
        userEmail: "",
        userMobile: 0,
        city: "",
        country: "",
        actress: "",
        pin: 0,
        products: {
          productImage: "",
          quantity: 0,
          color: "",
          size: "",
          quality: "",
          verificationId: "",
        },
      });
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  return (
    <div className='bg-black'>
      <Navbar />

      <section className="ml-10 mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
        <div className="container mx-auto flex  my-20 md:flex-row flex-col items-center ">
          <div className="">
            <Carousel1 />
          </div>
          <div>
            <MyForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ConfirmorderPage;
