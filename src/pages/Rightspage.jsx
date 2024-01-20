import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import { Nft } from "../components/Nft";
import { Footer2 } from "../layout/Footer2";
import { useNavigate } from "react-router-dom";
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios"; // Import Axios

export const Rightspage = () => {
  const { fetchedWalletAddress, nftName, fetchedWalletId, fetchNftImage, nftId, setNftId } =
    useContext(WalletIDMainContext);
  const [licenseTerm1, setLicenseTerm1] = useState("");
  const [licenseTerm2, setLicenseTerm2] = useState("");
  const [licenseTerm3, setLicenseTerm3] = useState("");
  const [licenseTerm4, setLicenseTerm4] = useState("");
  const [merch1LicenseCondition, setMerch1LicenseCondition] = useState();
  const [merch2LicenseCondition, setMerch2LicenseCondition] = useState();
  const [merch3LicenseCondition, setMerch3LicenseCondition] = useState();
  const [merch4LicenseCondition, setMerch4LicenseCondition] = useState();
  const [userLicenseCondition, setUserLicenseCondition] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //T-shirts
  const [price1, setPrice1] = useState(0);
  const [quantity1, setQuantity1] = useState(0);

  const result1 = Number(price1) * Number(quantity1);

  //Hoodies
  const [price2, setPrice2] = useState(0);
  const [quantity2, setQuantity2] = useState(0);

  const result2 = Number(price2) * Number(quantity2);

  //Caps
  const [price3, setPrice3] = useState(0);
  const [quantity3, setQuantity3] = useState(0);

  const result3 = Number(price3) * Number(quantity3);

  //Mugs
  const [price4, setPrice4] = useState(0);
  const [quantity4, setQuantity4] = useState(0);

  const result4 = Number(price4) * Number(quantity4);

  const calculateTotal = result1 + result2 + result3 + result4; // Calculate the total

  const calculateCommision = (calculateTotal * 20) / 100; // Calculate the commission

  const totalEarning = calculateTotal - calculateCommision; // Calculate the total earnings

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const handleSubmitPost = (e) => {
    e.preventDefault();
    // console.log(merch3LicenseCondition)
    //   const options = {
    //     method: "POST",
    //     url: "http://127.0.0.1:8000/drm/user/askRights/",
    //     headers: { "Content-Type": "application/json" },
    //     data: {
    //       // walletId: fetchedWalletId.toString(),
    //       walletId: '65a67bd20033cb5001382f38',
    //       nftId: nftId,
    //       userLicenseCondition: userLicenseCondition,
    //       imgSrc: state.data.imgSource,
    //       capRights: {
    //         merchantQuantity: quantity3,
    //         merchTitle: nftName,
    //         licenseFees: price3,
    //         merchLicenseCondition: merch3LicenseCondition,
    //         licenseTerm: licenseTerm3,
    //         rightsGiven: false,
    //       },
    //       tshirtRights: {
    //         merchantQuantity: quantity1,
    //         merchTitle: nftName,
    //         licenseFees: price1,
    //         merchLicenseCondition: merch1LicenseCondition,
    //         licenseTerm: licenseTerm1,
    //         rightsGiven: false,
    //       },
    //       hoodieRights: {
    //         merchantQuantity: quantity2,
    //         merchTitle: nftName,
    //         licenseFees: price2,
    //         merchLicenseCondition: merch2LicenseCondition,
    //         licenseTerm: licenseTerm2,
    //         rightsGiven: false,
    //       },
    //       mugRights: {
    //         merchantQuantity: quantity4,
    //         merchTitle: nftName,
    //         licenseFees: price4,
    //         merchLicenseCondition: merch4LicenseCondition,
    //         licenseTerm: licenseTerm4,
    //         rightsGiven: false,
    //       },
    //     },
    //   };

    //   axios
    //     .request(options)
    //     .then(function (response) {
    //       console.log(response.data);
    //       console.log(fetchedWalletId);
    handleNext(state.data.imgSource, state.data.name, state.data.price);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // };

    // function handleNext(imgsrc, name, price) {
    //   const data = { imgSource: imgsrc, name: name, price: price };
    //   navigate("/AgreementPage", { state: { data } });
    // }
  };

  const handleNext = (imgsrc, name, price) => {
    const data = {
      imgSource: imgsrc,
      name: name,
      price: price,
      userLicenseCondition: userLicenseCondition,
      tshirtRights: {
        merchantQuantity: quantity1,
        merchTitle: nftName,
        licenseFees: price1,
        merchLicenseCondition: merch1LicenseCondition,
        licenseTerm: licenseTerm1,
        rightsGiven: false,
      },
      hoodieRights: {
        merchantQuantity: quantity2,
        merchTitle: nftName,
        licenseFees: price2,
        merchLicenseCondition: merch2LicenseCondition,
        licenseTerm: licenseTerm2,
        rightsGiven: false,
      },
      capRights: {
        merchantQuantity: quantity3,
        merchTitle: nftName,
        licenseFees: price3,
        merchLicenseCondition: merch3LicenseCondition,
        licenseTerm: licenseTerm3,
        rightsGiven: false,
      },
      mugRights: {
        merchantQuantity: quantity4,
        merchTitle: nftName,
        licenseFees: price4,
        merchLicenseCondition: merch4LicenseCondition,
        licenseTerm: licenseTerm4,
        rightsGiven: false,
      }
    };

    navigate("/AgreementPage", { state: { agreementPageData: data } });
    // console.log({ data })
    // console.log(data['imgSource'])
    // console.log(data.mugRights.merchantQuantity)
  };



  return (
    <div className="bg-black">
      <Navbar2 value={fetchedWalletAddress} />
      <div className="min-h-[100vh]">
        <section className="bg-whitee mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto ">
          <div className="pb-[45px]">
            <div className="text-white flex mt-10 mb-[-2rem] pt-[45px]">
              <span>
                <h3 className="text-3xl font-semibold ">
                  Mint NFTs merch in real life
                </h3>
                <p className="my-2 font-light">
                  Elevate your style with limited-edition NFT merch
                  <br />a fusion of blockchain and fashion. Own the future
                </p>
              </span>
              <span className="flex w-fit ml-auto mr-20">
                <Nft
                  imgSource={state.data.imgSource}
                  name={state.data.name}
                  price={state.data.price}
                />
              </span>
            </div>
            <label className="text-white mr-4">User License Condition:</label>
            <select
              className="mb-7 dark:bg-white dark:text-black"
              id="userLicense"
              name="options"
              defaultValue="Select"
              onChange={(event) => {
                if (event.target.value !== "Select") {
                  setUserLicenseCondition(event.target.value);
                }

                console.log(event.target.value);
              }}
            >
              <option value="Select" hidden>
                Select
              </option>
              <option value="Copyright">Copyright</option>
              <option value="C BY">C BY</option>
              <option value="CC BY-SA">CC BY-SA</option>
            </select>

            <div className="w-[35rem]">
              {/* Accordian1 */}
              <Accordion className="mb-2">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>T-Shirt</Typography>
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
                      value={price1}
                      onChange={(event) => {
                        // Update the license term in the parent component
                        const priceTaken = event.target.value;
                        setPrice1(priceTaken);
                      }}
                      // onChange={updateSectionPrice}
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
                      value={quantity1}
                      onChange={(event) => {
                        // Update the license term in the parent component
                        const quantityTaken = event.target.value;
                        setQuantity1(quantityTaken);
                      }}
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
                    className="dark:bg-white dark:text-black"
                    id="merch1license"
                    name="options"
                    defaultValue="Select"
                    value={licenseTerm1}
                    // Update the license term in the parent component
                    onChange={(event) => {
                      if (event.target.value !== "Select") {
                        setLicenseTerm1(event.target.value);
                        console.log(event.target.value);
                      }
                    }}
                  >
                    <option value="Select" hidden>
                      Select
                    </option>
                    <option value="Limited">Limited</option>
                    <option value="Perpetuity">Perpetuity</option>
                  </select>
                  <div className="border-b w-32 border-black"></div>
                  <p className="font-medium mt-5">Merch License Condition</p>
                  <select
                    className="dark:bg-white dark:text-black"
                    id="merch1condition"
                    name="options"
                    defaultValue="Select"
                    value={merch1LicenseCondition}
                    onChange={(e) => {
                      setMerch1LicenseCondition(e.target.value);
                      console.log(e.target.value);
                    }}
                  >
                    <option value="Select" hidden>
                      Select
                    </option>
                    <option value="Negotiable">Negotiable</option>
                    <option value="Non-Negotiable">Non-Negotiable</option>
                  </select>

                  <h2 className="font-bold texl-xl text-black mt-5">
                    $ {result1} estimated earning from license royalty
                  </h2>
                  {/* <div className="flex mt-2">
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae.
                    </p>
                  </div> */}
                </AccordionDetails>
              </Accordion>

              {/* Accordian2 */}
              <Accordion className="mb-2">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Hoodies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-32 h-32 border-2 absolute ml-96 mb-36">
                    <img
                      className=""
                      src="https://i.postimg.cc/2jnRKPGg/hoodies.png"
                      alt=""
                    />
                  </div>
                  <div className="font-medium">License price</div>
                  <div className="flex">
                    <p className="font-bold text-blue-800"> $ </p>
                    <input
                      type="text"
                      value={price2}
                      onChange={(event) => {
                        // Update the license term in the parent component
                        const priceTaken = event.target.value;
                        setPrice2(priceTaken);
                      }}
                      // onChange={updateSectionPrice}
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
                      value={quantity2}
                      onChange={(event) => {
                        // Update the license term in the parent component
                        const quantityTaken = event.target.value;
                        setQuantity2(quantityTaken);
                      }}
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
                    className="dark:bg-white dark:text-black"
                    id="merch2license"
                    name="options"
                    defaultValue="Select"
                    value={licenseTerm2}
                    onChange={(event) => {
                      if (event.target.value !== "Select") {
                        // Update the license term in the parent component
                        setLicenseTerm2(event.target.value);
                        console.log(event.target.value);
                      }
                    }}
                  >
                    <option value="Select" hidden>
                      Select
                    </option>
                    <option value="Limited">Limited</option>
                    <option value="Perpetuity">Perpetuity</option>
                  </select>
                  <div className="border-b w-32 border-black"></div>
                  <p className="font-medium mt-5">Merch License Condition</p>
                  <select
                    className="dark:bg-white dark:text-black"
                    id="merch2condition"
                    name="options"
                    defaultValue="Select"
                    value={merch2LicenseCondition}
                    onChange={(e) => {
                      if (e.target.value !== "Select") {
                        setMerch2LicenseCondition(e.target.value);
                        console.log(e.target.value);
                      }
                    }}
                  >
                    <option value="Select" hidden>
                      Select
                    </option>
                    <option value="Negotiable">Negotiable</option>
                    <option value="Non-Negotiable">Non-Negotiable</option>
                  </select>

                  <h2 className="font-bold texl-xl text-black mt-5">
                    $ {result2} estimated earning from license royalty
                  </h2>
                  {/* <div className="flex mt-2">
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae.
                    </p>
                  </div> */}
                </AccordionDetails>
              </Accordion>

              {/* Accordian3 */}
              <Accordion className="mb-2">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Caps</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-32 h-32 border-2 absolute ml-96 mb-36">
                    <img
                      className=""
                      src="https://i.postimg.cc/fbYfNjPW/cap.png"
                      alt=""
                    />
                  </div>
                  <div className="font-medium">License price</div>
                  <div className="flex">
                    <p className="font-bold text-blue-800"> $ </p>
                    <input
                      type="text"
                      value={price3}
                      onChange={(event) => {
                        // Update the license term in the parent component
                        const priceTaken = event.target.value;
                        setPrice3(priceTaken);
                      }}
                      // onChange={updateSectionPrice}
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
                      value={quantity3}
                      onChange={(event) => {
                        // Update the license term in the parent component
                        const quantityTaken = event.target.value;
                        setQuantity3(quantityTaken);
                      }}
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

                    <p className="font-bold text-blue-800 "> unit </p>
                  </div>
                  <div className="border-b w-32 border-black"></div>
                  <p className="font-medium mt-5">License Term</p>
                  <select
                    className="dark:bg-white dark:text-black"
                    id="merch3license"
                    name="options"
                    defaultValue="Select"
                    value={licenseTerm3}
                    onChange={(event) => {
                      if (event.target.value !== "Select") {
                        // Update the license term in the parent component
                        setLicenseTerm3(event.target.value);
                        console.log(event.target.value);
                      }
                    }}
                  >
                    <option value="Select" hidden>
                      Select
                    </option>
                    <option value="Limited">Limited</option>
                    <option value="Perpetuity">Perpetuity</option>
                  </select>
                  <div className="border-b w-32 border-black"></div>
                  <p className="font-medium mt-5">Merch License Condition</p>
                  <select
                    className="dark:bg-white dark:text-black"
                    id="merch3condition"
                    name="options"
                    defaultValue="Select"
                    value={merch3LicenseCondition}
                    onChange={(event) => {
                      // Update the user license condition in the parent component
                      setMerch3LicenseCondition(event.target.value);
                      console.log(event.target.value);
                    }}
                  >
                    <option value="Select" hidden>
                      Select
                    </option>
                    <option value="Negotiable">Negotiable</option>
                    <option value="Non-Negotiable">Non-Negotiable</option>
                  </select>

                  <h2 className="font-bold texl-xl text-black mt-5">
                    <div className="border-b w-32 border-black"></div>
                    $ {result3} estimated earning from license royalty
                  </h2>
                  {/* <div className="flex mt-2">
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae.
                    </p>
                  </div> */}
                </AccordionDetails>
              </Accordion>

              {/* Accordian4 */}
              <Accordion className="mb-2">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Mugs</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-32 h-32 border-2 absolute ml-96 mb-36">
                    <img
                      className=""
                      src="https://i.postimg.cc/Y9kfqLc6/mugs.png"
                      alt=""
                    />
                  </div>
                  <div className="font-medium">License price</div>
                  <div className="flex">
                    <p className="font-bold text-blue-800"> $ </p>
                    <input
                      type="text"
                      value={price4}
                      onChange={(event) => {
                        // Update the license term in the parent component
                        const priceTaken = event.target.value;
                        setPrice4(priceTaken);
                      }}
                      // onChange={updateSectionPrice}
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
                      value={quantity4}
                      onChange={(event) => {
                        // Update the license term in the parent component
                        const quantityTaken = event.target.value;
                        setQuantity4(quantityTaken);
                      }}
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
                    className="dark:bg-white dark:text-black"
                    id="merch4license"
                    name="options"
                    defaultValue="Select"
                    value={licenseTerm4}
                    onChange={(event) => {
                      if (event.target.value !== "Select") {
                        // Update the license term in the parent component
                        setLicenseTerm4(event.target.value);
                        console.log(event.target.value);
                      }
                    }}
                  >
                    <option value="Select" hidden>
                      Select
                    </option>
                    <option value="Limited">Limited</option>
                    <option value="Perpetuity">Perpetuity</option>
                  </select>
                  <div className="border-b w-32 border-black"></div>
                  <p className="font-medium mt-5">Merch License Condition</p>
                  <select
                    className="dark:bg-white dark:text-black"
                    id="merch4condition"
                    name="options"
                    defaultValue="Select"
                    value={merch4LicenseCondition}
                    onChange={(event) => {
                      if (event.target.value !== "Select") {
                        // Update the user license condition in the parent component
                        setMerch4LicenseCondition(event.target.value);
                        console.log(event.target.value);
                      }
                    }}
                  >
                    <option value="Select" hidden>
                      Select
                    </option>
                    <option value="Negotiable">Negotiable</option>
                    <option value="Non-Negotiable">Non-Negotiable</option>
                  </select>

                  <h2 className="font-bold texl-xl text-black mt-5">
                    $ {result4} estimated earning from license royalty
                  </h2>
                  {/* <div className="flex mt-2">
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae.
                    </p>
                  </div> */}
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="text-white font-semibold mt-5 text-1xl">
              <p>License Royalty: $ {calculateTotal.toFixed(2)} </p>
              <p>Our Commisions: $ {calculateCommision.toFixed(2)}</p>
              <p>Estimated Earnings: $ {totalEarning.toFixed(2)} </p>
            </div>

            <div className="flex justify-end w-[35rem] mt-5">
              <button
                onClick={handleSubmitPost}
                className="btn w-28 font-semibold text-xl rounded-none border-2 border-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer2 />
    </div>
  );
};
