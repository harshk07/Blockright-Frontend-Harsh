import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/ecommerce/getAll/",
          {
            params: { adminId: "64e9acc80c8b7ac2f37f492f" },
          }
        );
        setProductData(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const openDetailsModal = (product) => {
    setSelectedProduct(product);
    setShowDetailsModal(true);
  };

  const handleEditSave = async () => {
    // Send a PATCH request to update the selected product
    const options = {
      method: "PATCH",
      url: `http://127.0.0.1:8000/ecommerce/editDetails/`,
      params: {
        adminId: "64f85ac8a4fb9e04cd207be5",
        productId: selectedProduct._id,
      },
      headers: { "Content-Type": "application/json" },
      data: {
        images: selectedProduct.images,
        tags: selectedProduct.tags,
        price: selectedProduct.price,
        discount: selectedProduct.discount,
        availableQuantity: selectedProduct.availableQuantity,
        lastDate: selectedProduct.lastDate,
        description: selectedProduct.description,
        merchTitle: selectedProduct.merchTitle,
      },
    };

    // Update the product data locally first
    const updatedProductData = productData.map((product) =>
      product._id === selectedProduct._id ? { ...selectedProduct } : product
    );

    setProductData(updatedProductData);
    setShowEditModal(false);

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const togglePublishedStatus = async (product) => {
    const updatedProduct = { ...product };
    updatedProduct.isPublished = !updatedProduct.isPublished;

    const adminId = "64f85ac8a4fb9e04cd207be5"; // Replace with your actual admin ID
    const productId = updatedProduct._id;

    const url = `http://127.0.0.1:8000/ecommerce/editDetails/?adminId=${adminId}&productId=${productId}`;

    try {
      const response = await axios.patch(url, {
        isPublished: updatedProduct.isPublished,
      });

      // Handle successful response if needed
      console.log(response.data);

      // Update the product data locally
      const updatedProductData = productData.map((p) =>
        p._id === updatedProduct._id ? updatedProduct : p
      );

      setProductData(updatedProductData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-5">
        <table className="w-100% h-100% text-center text-sm">
          <thead>
            <tr className="border-2">
              <th className="border-2 p-3 w-1/12">Product Title</th>
              <th className="border-2 p-3 w-1/12">Category</th>
              <th className="border-2 p-3 w-1/12">Image URL</th>
              <th className="border-2 p-3 w-1/12">Tags</th>
              <th className="border-2 p-3 w-1/12">Price</th>
              <th className="border-2 p-3 w-1/12">Discount(%)</th>
              <th className="border-2 p-3 w-1/12">Total Quantity</th>
              <th className="border-2 p-3 w-1/12">Available Quantity</th>
              <th className="border-2 p-3 w-1/12">Expiry Date</th>
              <th className="border-2 p-3 w-1/12">Is Published</th>
              <th className="border-2 p-3 w-1/12">Original Image</th>
              <th className="border-2 p-3 w-1/12">Description</th>

              <th className="border-2 p-3 w-1/12">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product, index) => (
              <tr className="border-2" key={index}>
                <td className="border-2 p-3">{product.merchTitle}</td>
                <td className="border-2 p-3">{product.category}</td>
                <td className="border-2 p-3">{product.images}</td>
                <td className="border-2 p-3">{product.tags.join(", ")}</td>
                <td className="border-2 p-3">{`$ ${product.price}`}</td>
                <td className="border-2 p-3">{`${product.discount}%`}</td>
                <td className="border-2 p-3">{product.totalQuantity}</td>
                <td className="border-2 p-3">
                  {`${product.availableQuantity}`}
                </td>
                <td className="border-2 p-3">
                  {new Date(product.lastDate).toLocaleDateString()}
                </td>

                <td className="border-2 p-3">
                  <button
                    className={`${
                      product.isPublished ? "bg-green-500" : "bg-red-500"
                    } text-white font-bold py-2 px-4 rounded-full`}
                    onClick={() => togglePublishedStatus(product)}
                  >
                    {product.isPublished ? "Published" : "Not Published"}
                  </button>
                </td>
                <td className="border-2 p-3">
                  <img src={product.originalImage} alt="Product Img" />
                </td>
                <td className="border-2 p-3">{product.description}</td>

                <td className="border-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => openEditModal(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-2"
                    onClick={() => openDetailsModal(product)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {showEditModal && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg shadow-lg overflow-hidden">
            {/* Edit Modal Header */}
            <div className="bg-gray-200 px-4 py-3">
              <h2 className="text-lg font-semibold text-gray-800">
                Edit Product
              </h2>
            </div>

            {/* Edit Modal Content */}
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Images (comma-separated)
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  value={selectedProduct.images.join(", ")} // Join the array into a comma-separated string
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      images: e.target.value
                        .split(",")
                        .map((item) => item.trim()), // Split the input string into an array
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  value={selectedProduct.tags.join(", ")} // Join the array into a comma-separated string
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      tags: e.target.value
                        .split(",")
                        .map((item) => item.trim()), // Split the input string into an array
                    })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  value={selectedProduct.price}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      price: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Discount</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  value={selectedProduct.discount}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      discount: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Available Quantity
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  value={selectedProduct.availableQuantity}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      availableQuantity: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Expiry Date</label>
                <input
                  type="date"
                  className="border rounded w-full py-2 px-3"
                  value={selectedProduct.lastDate}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      lastDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  value={selectedProduct.description}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  value={selectedProduct.merchTitle}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      merchTitle: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Edit Modal Footer */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  onClick={handleEditSave}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue focus:ring focus:ring-blue-200 active:bg-blue-700 transition ease-in-out duration-150"
                >
                  Save Changes
                </button>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                >
                  Cancel
                </button>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg shadow-lg overflow-hidden">
            {/* Details Modal Header */}
            <div className="bg-gray-200 px-4 py-3">
              <h2 className="text-lg font-semibold text-gray-800">
                Product Details
              </h2>
            </div>

            {/* Details Modal Content */}
            <div className="p-4">
              <div className="mb-4">
                <p className="text-gray-700 mb-2">
                  Product Id: {selectedProduct._id}
                </p>
                <p className="text-gray-700">NFT Id: {selectedProduct.nftId}</p>
                <p className="text-gray-700">
                  Wallet Address {selectedProduct.walletAddress}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 mb-2">
                  Image URL: {selectedProduct.images}
                </p>
                <p className="text-gray-700 mb-2">
                  Tags: {selectedProduct.tags.join(", ")}
                </p>
                <p className="text-gray-700 mb-2">
                  Price: {selectedProduct.price}
                </p>
                <p className="text-gray-700 mb-2">
                  Discount: {selectedProduct.discount}
                </p>
                <p className="text-gray-700 mb-2">
                  Available Quantity: {selectedProduct.availableQuantity}
                </p>
                <p className="text-gray-700 mb-2">
                  Expiry Date: {selectedProduct.lastDate}
                </p>
                <p className="text-gray-700 mb-2">
                  Description: {selectedProduct.description}
                </p>
                <p className="text-gray-700">
                  Title: {selectedProduct.merchTitle}
                </p>
              </div>
            </div>

            {/* Details Modal Footer */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                >
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
