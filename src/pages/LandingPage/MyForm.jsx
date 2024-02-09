import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";
import { AiFillAmazonCircle } from "react-icons/ai";
import { SiShopify } from "react-icons/si";
import { Link } from "react-router-dom";

const MyForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMobile: "",
    city: "",
    country: "",
    address: "",
    pin: 0,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [qrCodeData, setQrCodeData] = useState("");
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { productDetails } = location.state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (currentStep === 2) {
      generateQRCode();
    }
  }, [currentStep]);

  const generateQRCode = async () => {
    const uniqueHexValue = generateUniqueHexValue(6);
    const qrCodeText = `UserName: ${formData.userName}\nVerificationId: ${uniqueHexValue}`;
    try {
      const qrCodeDataURL = await QRCode.toDataURL(qrCodeText);
      setQrCodeData(qrCodeDataURL);
    } catch (error) {
      console.error(error);
    }
  };

  const generateUniqueHexValue = (length) => {
    const characters = "0123456789ABCDEF";
    let hexValue = "0x";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      hexValue += characters[randomIndex];
    }

    return hexValue;
  };

  const saveAsPDF = () => {
    const pdf = new jsPDF();
    const organization = "Blockright Pvt. Ltd.";
    pdf.text(organization, 70, 10);
    pdf.addImage(qrCodeData, "PNG", 10, 10, 50, 50);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);

    const formFields = `
      Cutomer Name: ${formData.userName}
      Customer Email: ${formData.userEmail}
      Customer Mobile: ${formData.userMobile}
      Address: ${formData.address}
      City: ${formData.city}
      Pin: ${formData.pin}
      Country: ${formData.country}
      Estimated date of delivery: ${currentDate.toDateString()}
      Helpline-N0: 90945-65486
    `;

    pdf.text(formFields, 70, 20);
    navigate("/Customerpayment");
    pdf.save("formDataWithQRCode.pdf");

    // Call the API when saving the PDF
    console.log("API for details submission submitted");
    sendOrderToAPI();
  };

  const sendOrderToAPI = () => {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:8000/order/ecommerce/',
      headers: { 'Content-Type': 'application/json' },
      data: {
        customerName: formData.userName,
        cutomerEmail: formData.userEmail,
        customerMobile: formData.userMobile,
        city: formData.city,
        country: formData.country,
        address: formData.address,
        pin: formData.pin,
        products: productDetails
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };

  const handleStepNext = () => {
    if (currentStep === 1) {
      if (
        formData.userName.trim() === "" ||
        formData.userEmail.trim() === "" ||
        formData.userMobile.trim() === ""
      ) {
        alert("Please fill in all required fields in step 1");
        return;
      }
      if (paymentCompleted) {
        setCurrentStep(currentStep + 1);
      } else {
        // Show payment options step.
        setCurrentStep(currentStep + 0.5);
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const handleStepBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      handleStepNext();
    } else if (currentStep === 2) {
      // Handle form submission to the API here if needed
      saveAsPDF();
    }
  };

  return (
    <div className="my-form-container mx-auto max-w-lg p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">
        {currentStep === 1
          ? "Step 1: Personal Information"
          : "Step 2: Address Information"}
      </h2>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Username:
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:border-blue-500"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email:
                <input
                  type="text"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:border-blue-500"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Mobile:
                <input
                  type="text"
                  name="userMobile"
                  value={formData.userMobile}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:border-blue-500"
                />
              </label>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                City:
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:border-blue-500"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Country:
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:border-blue-500"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:border-blue-500"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Pincode:
                <input
                  type="text"
                  name="pin"
                  value={formData.pin}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:border-blue-500"
                />
              </label>
            </div>
          </>
        )}

        <div className="mt-4 flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handleStepBack}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
            >
              Back
            </button>
          )}
          {currentStep === 2 ? (
            <>
              <button
                type="button"
                onClick={saveAsPDF}
                className="bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg hover:bg-blue-600"
              >
                Proceed to Payment
              </button>
              <div className="flex items-center justify-center rounded-lg w-10 border border-black text-black hover:bg-blue-500 hover:text-white">
                {/* You can add your external links here */}
              </div>
            </>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              {currentStep === 1 ? "Next" : "Submit"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MyForm;