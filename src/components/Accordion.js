import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionSection({
  title,
  price, //=A1
  quantity, // = A2
  updatePrice,
  updateQuantity,
  licenseTerm,
  userLicenseCondition,
  // merchLicenseCondition,
}) {
  const [sectionPrice, setSectionPrice] = useState(price);
  const [sectionQuantity, setSectionQuantity] = useState(quantity);

  const updateSectionPrice = (event) => {
    setSectionPrice(event.target.value);
    updatePrice(event); // Call the prop function to update the price in the parent component
  };

  const updateSectionQuantity = (event) => {
    setSectionQuantity(event.target.value);
    updateQuantity(event); // Call the prop function to update the quantity in the parent component
  };

  const sectionResult = Number(sectionPrice) * Number(sectionQuantity);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="w-32 h-32 border-2 absolute ml-96 mb-36">
          <img
            className=""
            src="https://assets.burberry.com/is/image/Burberryltd/CE441BC0-EAB4-4DDC-A79F-4A5E41CB564E?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
            alt=""
          />
        </div>
        <div className="font-medium">License price</div>
        <div className="flex">
          <p className="font-bold text-blue-800"> $ </p>
          <input
            type="text"
            value={quantity}
            onChange={updateSectionPrice}
            placeholder="0"
            className="ml-1 w-7 bg-transparent border-transparent"
            style={{
              borderStyle: "none",
              border: "none",
              color: "blue",
              fontWeight: "bold",
              outline: "none",
            }}
          />
          <p className="font-bold text-blue-800"> per piece</p>
        </div>

        <div className="border-b w-32 border-black"></div>
        <p className="font-medium mt-5">Quantity</p>
        <div className="flex">
          <input
            type="text"
            value={sectionQuantity}
            onChange={updateSectionQuantity}
            placeholder="0"
            className="ml-1 w-7 bg-transparent border-transparent"
            style={{
              borderStyle: "none",
              border: "none",
              color: "blue",
              fontWeight: "bold",
              outline: "none",
            }}
          />
          <p className="font-bold text-blue-800"> unit </p>
        </div>
        <div className="border-b w-32 border-black"></div>
        <p className="font-medium mt-5">License Term</p>
        <select
          id="mySelect1"
          name="options"
          value={licenseTerm}
          onChange={(event) => {
            // Update the license term in the parent component
            licenseTerm = event.target.value;
          }}
        >
          <option value="Limited">Limited</option>
          <option value="Perpetuity">Perpetuity</option>
        </select>
        <div className="border-b w-32 border-black"></div>
        <p className="font-medium mt-5">User License Condition</p>
        <select
          id="mySelect2"
          name="options"
          value={userLicenseCondition}
          onChange={(event) => {
            // Update the user license condition in the parent component
            userLicenseCondition = event.target.value;
          }}
        >
          <option value="Negotiable">Negotiable</option>
          <option value="Non-Negotiable">Non-Negotiable</option>
        </select>
        
        <h2 className="font-bold texl-xl text-black mt-5">
          $ {sectionResult.toFixed(2)} earning from license royalty
        </h2>
        <div className="flex mt-2">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae.
          </p>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionSection;
