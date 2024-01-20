import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pageno } from "./Pageno";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [editablePrice, setEditablePrice] = useState({ id: null, value: "" });
  const [editableDescription, setEditableDescription] = useState({
    id: null,
    value: "",
  });

  const [editableDiscount, setEditableDiscount] = useState({
    id: null,
    value: "",
  });
  const [editableQuantity, setEditableQuantity] = useState({
    id: null,
    value: "",
  });
  const [editableTags, setEditableTags] = useState({ id: null, value: "" });
  const [editableImageUrls, setEditableImageUrls] = useState({
    id: null,
    value: "",
  });
  const [editableExpiryDate, setEditableExpiryDate] = useState({
    id: null,
    value: "",
  });

  const [editableMerchTitle, setEditableMerchTitle] = useState({
    id: null,
    value: "",
  });

  const handleMerchTitleEditClick = (productId, merchTitle) => {
    setEditableMerchTitle({ id: productId, value: merchTitle });
  };

  const handleMerchTitleInputChange = (e) => {
    setEditableMerchTitle({ ...editableMerchTitle, value: e.target.value });
  };


  const handleExpiryDateEditClick = (productId, expiryDate) => {
    // Convert the expiryDate to a string in the format "YYYY-MM-DD" for editing
    setEditableExpiryDate({
      id: productId,
      value: new Date(expiryDate).toISOString().slice(0, 10),
    });
  };

  const handleExpiryDateInputChange = (e) => {
    setEditableExpiryDate({ ...editableExpiryDate, value: e.target.value });
  };

  const handlePriceEditClick = (productId, price) => {
    setEditablePrice({ id: productId, value: price.toString() });
  };

  const handleQuantityEditClick = (productId, availableQuantity) => {
    setEditableQuantity({ id: productId, value: availableQuantity.toString() });
  };

  const handleDiscountEditClick = (productId, discount) => {
    setEditableDiscount({ id: productId, value: discount.toString() });
  };

  const handleTagsEditClick = (productId, tags) => {
    setEditableTags({ id: productId, value: tags.join(", ") });
  };

  const handlePriceInputChange = (e) => {
    setEditablePrice({ ...editablePrice, value: e.target.value });
  };

  const handleQuantityInputChange = (e) => {
    setEditableQuantity({ ...editableQuantity, value: e.target.value });
  };

  const handleDiscountInputChange = (e) => {
    setEditableDiscount({ ...editableDiscount, value: e.target.value });
  };

  const handleTagsInputChange = (e) => {
    setEditableTags({ ...editableTags, value: e.target.value });
  };
  const handleImageUrlsEditClick = (productId, imageUrls) => {
    setEditableImageUrls({ id: productId, value: imageUrls.join(", ") });
  };
  // Function to format a date string in a readable format
  const formatReadableDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleImageUrlsInputChange = (e) => {
    setEditableImageUrls({ ...editableImageUrls, value: e.target.value });
  };
  const handleDescriptionEditClick = (productId, description) => {
    setEditableDescription({ id: productId, value: description });
  };

  const handleDescriptionInputChange = (e) => {
    setEditableDescription({ ...editableDescription, value: e.target.value });
  };


  const handleMerchTitleSave = async (productId) => {
    // Send a PATCH request to update the merchTitle
    const options = {
      method: "PATCH",
      url: `http://127.0.0.1:8000/ecommerce/editDetails/`,
      params: { adminId: "64f85ac8a4fb9e04cd207be5", productId: productId },
      headers: { "Content-Type": "application/json" },
      data: {
        merchTitle: editableMerchTitle.value,
      },
    };

    // Update the product data locally first
    const updatedProductData = productData.map((product) =>
      product._id === productId
        ? { ...product, merchTitle: editableMerchTitle.value }
        : product
    );

    setProductData(updatedProductData);
    setEditableMerchTitle({ id: null, value: "" });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  const handleDescriptionSave = async (productId) => {
    // Send a PATCH request to update the description
    const options = {
      method: "PATCH",
      url: `http://127.0.0.1:8000/ecommerce/editDetails/`,
      params: { adminId: "64f85ac8a4fb9e04cd207be5", productId: productId },
      headers: { "Content-Type": "application/json" },
      data: {
        description: editableDescription.value,
      },
    };

    // Update the product data locally first
    const updatedProductData = productData.map((product) =>
      product._id === productId
        ? { ...product, description: editableDescription.value }
        : product
    );

    setProductData(updatedProductData);
    setEditableDescription({ id: null, value: "" });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://127.0.0.1:8000/ecommerce/getAll/",
      params: { adminId: "64e9acc80c8b7ac2f37f492f" },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response);
        setProductData(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handlePriceSave = async (productId) => {
    const options = {
      method: "PATCH",
      url: "http://127.0.0.1:8000/ecommerce/editDetails/",
      params: { adminId: "64f85ac8a4fb9e04cd207be5", productId: productId },
      headers: { "Content-Type": "application/json" },
      data: {
        price: parseInt(editablePrice.value),
      },
    };

    const updatedProductData = productData.map((product) =>
      product._id === productId
        ? { ...product, price: parseInt(editablePrice.value) }
        : product
    );

    setProductData(updatedProductData);
    setEditablePrice({ id: null, value: "" });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleQuantitySave = async (productId) => {
    const updatedQuantity = parseInt(editableQuantity.value);

    const options = {
      method: "PATCH",
      url: `http://127.0.0.1:8000/ecommerce/editDetails/`,
      params: { adminId: "64f85ac8a4fb9e04cd207be5", productId: productId },
      headers: { "Content-Type": "application/json" },
      data: {
        availableQuantity: updatedQuantity,
      },
    };

    const updatedProductData = productData.map((product) =>
      product._id === productId
        ? { ...product, availableQuantity: updatedQuantity }
        : product
    );

    setProductData(updatedProductData);
    setEditableQuantity({ id: null, value: "" });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const handleExpiryDateSave = async (productId) => {
    // Send a PATCH request to update the expiry date
    const options = {
      method: "PATCH",
      url: `http://127.0.0.1:8000/ecommerce/editDetails/`,
      params: { adminId: "64f85ac8a4fb9e04cd207be5", productId: productId },
      headers: { "Content-Type": "application/json" },
      data: {
        lastDate: editableExpiryDate.value,
      },
    };

    // Update the product data locally first
    const updatedProductData = productData.map((product) =>
      product._id === productId
        ? { ...product, lastDate: editableExpiryDate.value }
        : product
    );

    setProductData(updatedProductData);
    setEditableExpiryDate({ id: null, value: "" });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleDiscountSave = async (productId) => {
    const updatedDiscount = parseInt(editableDiscount.value);

    const options = {
      method: "PATCH",
      url: `http://127.0.0.1:8000/ecommerce/editDetails/`,
      params: { adminId: "64f85ac8a4fb9e04cd207be5", productId: productId },
      headers: { "Content-Type": "application/json" },
      data: {
        discount: updatedDiscount,
      },
    };

    const updatedProductData = productData.map((product) =>
      product._id === productId
        ? { ...product, discount: updatedDiscount }
        : product
    );

    setProductData(updatedProductData);
    setEditableDiscount({ id: null, value: "" });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleTagsSave = async (productId) => {
    const updatedTags = editableTags.value.split(",").map((tag) => tag.trim());

    const options = {
      method: "PATCH",
      url: `http://127.0.0.1:8000/ecommerce/editDetails/`,
      params: { adminId: "64f85ac8a4fb9e04cd207be5", productId: productId },
      headers: { "Content-Type": "application/json" },
      data: {
        tags: updatedTags,
      },
    };

    const updatedProductData = productData.map((product) =>
      product._id === productId ? { ...product, tags: updatedTags } : product
    );

    setProductData(updatedProductData);
    setEditableTags({ id: null, value: "" });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const handleImageUrlsSave = async (productId) => {
    // Split the input value by commas to create an array of image URLs
    const updatedImageUrls = editableImageUrls.value
      .split(",")
      .map((url) => url.trim());

    // Send a PATCH request to update the image URLs
    const options = {
      method: "PATCH",
      url: `http://127.0.0.1:8000/ecommerce/editDetails/`,
      params: { adminId: "64f85ac8a4fb9e04cd207be5", productId: productId },
      headers: { "Content-Type": "application/json" },
      data: {
        images: updatedImageUrls,
      },
    };

    // Update the product data locally first
    const updatedProductData = productData.map((product) =>
      product._id === productId
        ? { ...product, images: updatedImageUrls }
        : product
    );

    setProductData(updatedProductData);
    setEditableImageUrls({ id: null, value: "" });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const handleIsPublishedToggle = async (productId, isPublished) => {
    // Send a PATCH request to toggle the isPublished attribute
    const options = {
      method: "PATCH",
      url: `http://127.0.0.1:8000/ecommerce/editDetails/`,
      params: { adminId: "64f85ac8a4fb9e04cd207be5", productId: productId },
      headers: { "Content-Type": "application/json" },
      data: {
        isPublished: !isPublished, // Toggle the value
      },
    };

    // Update the product data locally first
    const updatedProductData = productData.map((product) =>
      product._id === productId
        ? { ...product, isPublished: !isPublished }
        : product
    );

    setProductData(updatedProductData);

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const a = "border-2 p-3 w-1/12";
  const b = "border-2";

  return (
    <div>
      <div className="flex justify-center mt-5">
        <table className="w-100% h-100% text-center text-sm">
          <thead>
            <tr className={b}>
              <th className={a}>sn.</th>
              <th className={a}>Product Id</th>
              <th className={a}>Nft Id</th>
              <th className={a}>Category</th>
              <th className={a}>image url</th>
              <th className={a}>tags</th>
              <th className={a}>price</th>
              <th className={a}>discount(%)</th>
              <th className={a}>Total quantity</th>
              <th className={a}>Available quantity</th>
              <th className={a}>Expiry Date</th>
              <th className={a}>Is Published</th>
              <th className={a}>Wallet Address</th>
              <th className={a}>Original Image</th>
              <th className={a}>Description</th>
              <th className={a}>Product Title</th>

            </tr>
          </thead>
          <tbody>
            {productData.map((product, index) => (
              <tr className={b} key={index}>
                <td>{index + 1}</td>
                <td className={a}>{product._id}</td>
                <td className={a}>{product.nftId}</td>
                <td className={a}>{product.category}</td>
                <td
                  className={a}
                  onClick={() =>
                    handleImageUrlsEditClick(product._id, product.images)
                  }
                >
                  {editableImageUrls.id === product._id ? (
                    <div>
                      <input
                        className="dark:bg-white dark:text-black"
                        type="text"
                        value={editableImageUrls.value}
                        onChange={handleImageUrlsInputChange}
                        onBlur={() => handleImageUrlsSave(product._id)}
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            handleImageUrlsSave(product._id);
                          }
                        }}
                      />
                    </div>
                  ) : Array.isArray(product.images) ? (
                    product.images.join(", ")
                  ) : (
                    product.images
                  )}
                </td>

                <td
                  className={a}
                  onClick={() => handleTagsEditClick(product._id, product.tags)}
                >
                  {editableTags.id === product._id ? (
                    <div>
                      <input
                        className="dark:bg-white dark:text-black"
                        type="text"
                        value={editableTags.value}
                        onChange={handleTagsInputChange}
                        onBlur={() => handleTagsSave(product._id)}
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            handleTagsSave(product._id);
                          }
                        }}
                      />
                    </div>
                  ) : (
                    product.tags.join(", ")
                  )}
                </td>
                <td
                  className={a}
                  onClick={() =>
                    handlePriceEditClick(product._id, product.price)
                  }
                >
                  {editablePrice.id === product._id ? (
                    <div>
                      <input
                        className="dark:bg-white dark:text-black"
                        type="text"
                        value={editablePrice.value}
                        onChange={handlePriceInputChange}
                        onBlur={() => handlePriceSave(product._id)}
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            handlePriceSave(product._id);
                          }
                        }}
                      />
                    </div>
                  ) : (
                    `$ ${product.price}`
                  )}
                </td>
                <td
                  className={a}
                  onClick={() =>
                    handleDiscountEditClick(product._id, product.discount)
                  }
                >
                  {editableDiscount.id === product._id ? (
                    <div>
                      <input
                        className="dark:bg-white dark:text-black"
                        type="text"
                        value={editableDiscount.value}
                        onChange={handleDiscountInputChange}
                        onBlur={() => handleDiscountSave(product._id)}
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            handleDiscountSave(product._id);
                          }
                        }}
                      />
                    </div>
                  ) : (
                    `${product.discount}%`
                  )}
                </td>
                <td className={a}>{product.totalQuantity}</td>
                <td
                  className={a}
                  onClick={() =>
                    handleQuantityEditClick(
                      product._id,
                      product.availableQuantity
                    )
                  }
                >
                  {editableQuantity.id === product._id ? (
                    <div>
                      <input
                        type="text"
                        value={editableQuantity.value}
                        onChange={handleQuantityInputChange}
                        onBlur={() => handleQuantitySave(product._id)}
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            handleQuantitySave(product._id);
                          }
                        }}
                      />
                    </div>
                  ) : (
                    `${product.availableQuantity}`
                  )}
                </td>
                <td
                  className={a}
                  onClick={() =>
                    handleExpiryDateEditClick(product._id, product.lastDate)
                  }
                >
                  {editableExpiryDate.id === product._id ? (
                    <div>
                      <input
                        className="dark:bg-white dark:text-black"
                        type="date"
                        value={editableExpiryDate.value}
                        onChange={handleExpiryDateInputChange}
                        onBlur={() => handleExpiryDateSave(product._id)}
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            handleExpiryDateSave(product._id);
                          }
                        }}
                      />
                    </div>
                  ) : (
                    formatReadableDate(product.lastDate)
                  )}
                </td>

                <td className={a}>
                  <button
                    onClick={() =>
                      handleIsPublishedToggle(product._id, product.isPublished)
                    }
                    className={`${product.isPublished
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                      } px-2 py-1 rounded-full`}
                  >
                    {product.isPublished ? "Published" : "Not Published"}
                  </button>
                </td>

                <td className={a}>{product.walletAddress}</td>
                <td className={a}>
                  <img src={product.originalImage} alt="Product Img" />
                </td>
                <td
                  className={a}
                  onClick={() =>
                    handleDescriptionEditClick(product._id, product.description)
                  }
                >
                  {editableDescription.id === product._id ? (
                    <div>
                      <textarea
                        className="dark:bg-white dark:text-black"
                        rows="3"
                        value={editableDescription.value}
                        onChange={handleDescriptionInputChange}
                        onBlur={() => handleDescriptionSave(product._id)}
                        onKeyUp={(e) => {
                          if (e.key === "Enter" && e.ctrlKey) {
                            handleDescriptionSave(product._id);
                          }
                        }}
                      />
                    </div>
                  ) : (
                    product.description
                  )}
                </td>
                {/* <td>{product.merchTitle}</td> */}
                <td className={a}
                  onClick={() =>
                    handleMerchTitleEditClick(product._id, product.description)
                  }
                >
                  {editableMerchTitle.id === product._id ? (
                    <div>
                      <input
                        className="dark:bg-white dark:text-black"
                        type="text"
                        value={editableMerchTitle.value}
                        onChange={handleMerchTitleInputChange}
                        onBlur={() => handleMerchTitleSave(product._id)}
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            handleMerchTitleSave(product._id);
                          }
                        }}
                      />
                    </div>
                  ) : (
                    product.merchTitle
                  )}
                </td>
              </tr>
            ))}
          </tbody>
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

export default Products;