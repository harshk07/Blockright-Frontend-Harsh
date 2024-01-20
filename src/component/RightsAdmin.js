import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";
import { useNavigate } from "react-router";

const RightsAdmin = () => {
  const { fetchRights, setFetchRights } = useContext(WalletIDMainContext);

  const navigate = useNavigate();

  const [approvalStatus, setApprovalStatus] = useState({});
  // const [imageUrl,setImageUrl]=useState("");
  // const [nftId,setNftId]=useState("");
  const [approvalButtonDisabled, setApprovalButtonDisabled] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://127.0.0.1:8000/drm/getRights/",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response);

        // Filter the response data to include items where at least one rightsGiven is false
        const filteredRights = response.data.response.filter((item) => {
          return (
            (item.capRights.merchantQuantity > 0 &&
              item.capRights.rightsGiven === false) ||
            (item.tshirtRights.merchantQuantity > 0 &&
              item.tshirtRights.rightsGiven === false) ||
            (item.hoodieRights.merchantQuantity > 0 &&
              item.hoodieRights.rightsGiven === false) ||
            (item.mugRights.merchantQuantity > 0 &&
              item.mugRights.rightsGiven === false)
          );
        });

        setFetchRights(filteredRights);
        // setImageUrl(filteredRights.imgSrc);
        // setNftId(filteredRights.nftId);///
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const giveRights = (type, index, rightsId) => {
    const options = {
      method: "PATCH",
      url: "http://127.0.0.1:8000/drm/admin/giveRights/",
      params: { adminId: "64e9acc80c8b7ac2f37f492f" },
      headers: { "Content-Type": "application/json" },
      data: {
        rightsId: rightsId,
        [`${type}Rights`]: {
          rightsGiven: true,
          expiryDate: "2023-09-02T18:01:47.247810",
        },
        isAdminVerified: true,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        // After successfully giving rights, disable the button
        setApprovalButtonDisabled((prevState) => ({
          ...prevState,
          [`${type}_${index}`]: true,
        }));
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const AddNewProduct = (imgUrl, NftId, type, totalQuantity,merchTitle) => {
    const options = {
      method: "POST",
      url: "http://127.0.0.1:8000/ecommerce/add/",
      params: { adminId: "64e9acc80c8b7ac2f37f492f" },
      headers: { "Content-Type": "application/json" },
      data: {
        nftId: NftId,
        category: type,
        originalImage: imgUrl,
        images: [null],
        tags: [null],
        price: 0,
        currency: "dollar",
        discount: 0,
        totalQuantity: totalQuantity,
        availableQuantity: 0,
        lastDate: "2023-09-06T16:03:17.110Z",
        description:"",
        merchTitle:merchTitle
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleApprovalChange = (type, index, rightsId, imgSrc, nftId,item) => {
    // Check if the button is already disabled
    if (approvalButtonDisabled[`${type}_${index}`]) {
      return;
    }

    // Update the approval status when a button is clicked
    setApprovalStatus((prevState) => ({
      ...prevState,
      [`${type}_${index}`]: true,
    }));

    // Call the API to give rights with the dynamic rightsId
    giveRights(type, index, rightsId);

    let totalQuantity = 0;
    let merchTitle = "";
    switch (type) {
      case "cap":
        totalQuantity = item.capRights.merchantQuantity;
        merchTitle = item.capRights.merchTitle;
        break;
      case "tshirt":
        totalQuantity = item.tshirtRights.merchantQuantity;
        merchTitle = item.tshirtRights.merchTitle;
        break;
      case "hoodie":
        totalQuantity = item.hoodieRights.merchantQuantity;
        merchTitle = item.hoodieRights.merchTitle;
        break;
      case "mug":
        totalQuantity = item.mugRights.merchantQuantity;
        merchTitle = item.mugRights.merchTitle;
        break;
      default:
        totalQuantity = 0;
    }
    AddNewProduct(imgSrc, nftId, type,totalQuantity,merchTitle);
  };

  const renderMerchApproval = (item, type, index, rightsId) => {
    if (
      item[`${type}Rights`].merchantQuantity *
        item[`${type}Rights`].licenseFees >
        0 &&
      !item[`${type}Rights`].rightsGiven // Add this condition to exclude when rightsGiven is true
    ) {
      return (
        <>
          <div className="flex gap-3 py-2">
            <div>
              <p className="text-sm">
                {item[`${type}Rights`].merchantQuantity || 0} {type}Rights
                Minted {item[`${type}Rights`].licenseFees || 0} license Fees{" "}
              </p>
              <p className="text-sm"> 0 sold, 0 left</p>
              <div>
                <p className="text-2xl m-0 p-0 font-semibold">
                  $
                  {item[`${type}Rights`].merchantQuantity *
                    item[`${type}Rights`].licenseFees || 0}
                </p>
                <p className="text-xs -mt-1 ml-2"> Earned</p>
              </div>
            </div>
            <div className="leading-0 flex">
              <div>
                <button
                  style={{ width: "100px" }}
                  onClick={() =>{
                    handleApprovalChange(
                      type,
                      index,
                      rightsId,
                      item.imgSrc,
                      item.nftId,
                      item
                    )
                      navigate(0);
                  }
                  }
                  className={`${
                    approvalStatus[`${type}_${index}`]
                      ? "bg-green-500"
                      : "bg-gray-300"
                  } hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all`}
                  disabled={approvalButtonDisabled[`${type}_${index}`]}
                >
                  {approvalStatus[`${type}_${index}`]
                    ? `Approved ${type}`
                    : `Approve ${type}`}
                </button>
              </div>
            </div>
          </div>
          <p className="border-1 border-b"></p>
        </>
      );
    } else {
      return null;
    }
  };

  const processedRights = fetchRights.map((item, index) => {
    const rightsId = item._id;

    return (
      <div
        key={index}
        className="mt-10 border-2 border-dashed p-3 rounded-lg mb-[3rem] border-cyan-800 bg-gray-50 hover:bg-white hover:border-2
            hover:border-solid flex min-h-52 w-[450px] transition-all duration-200 hover:shadow-md"
      >
        <div className="">
          <p className="text-xl font-bold ">
            {item.tshirtRights.merchTitle ||
              item.capRights.merchTitle ||
              item.hoodieRights.merchantQuantity ||
              item.mugRights.merchantQuantity}
          </p>
          <p className="border-[1.5px] border-b mt-1"></p>

          {renderMerchApproval(item, "cap", index, rightsId)}
          {renderMerchApproval(item, "tshirt", index, rightsId)}
          {renderMerchApproval(item, "hoodie", index, rightsId)}
          {renderMerchApproval(item, "mug", index, rightsId)}
        </div>
        <div className="h- w-32 ml-5 mt-5">
          <img src={item.imgSrc} alt="" />
        </div>
      </div>
    );
  });

  return <div className="flex flex-wrap gap-x-3 ml-3">{processedRights}</div>;
};

export default RightsAdmin;