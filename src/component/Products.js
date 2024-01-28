import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

    const adminId = "64f85ac8a4fb9e04cd207be5";
    const productId = updatedProduct._id;

    const url = `http://127.0.0.1:8000/ecommerce/editDetails/?adminId=${adminId}&productId=${productId}`;

    try {
      const response = await axios.patch(url, {
        isPublished: updatedProduct.isPublished,
      });

      console.log(response.data);

      const updatedProductData = productData.map((p) =>
        p._id === updatedProduct._id ? updatedProduct : p
      );

      setProductData(updatedProductData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-[5rem] mt-10">
      <div className="flex justify-center mt-5">
        <table className="w-[110rem] h-100% text-center text-sm">
          <thead>
            <tr className="border-2">
              <th className="border-2 p-3 w-1/12">Original Image</th>
              <th className="border-2 p-3 w-1/12">Product Title</th>
              <th className="border-2 p-3 w-1/12">Description</th>
              <th className="border-2 p-3 w-1/12">Category</th>
              <th className="border-2 p-3 w-1/12">Price</th>
              <th className="border-2 p-3 w-1/12">Discount(%)</th>
              <th className="border-2 p-3 w-1/12">Total Quantity</th>
              <th className="border-2 p-3 w-1/12">Available Quantity</th>
              <th className="border-2 p-3 w-1/12">Expiry Date</th>
              <th className="border-2 p-3 w-1/12">Market</th>

              <th className="border-2 p-3 w-1/12">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr className="border-2" key={index}>
                <td className="py-2 flex justify-center">
                  <img
                    src={product.originalImage}
                    className="w-20"
                    alt="Product Img"
                  />
                </td>
                <td className="border-2 p-2">{product.merchTitle}</td>
                <td className="border-2 p-2">
                  {product && product.description
                    ? product.description.split(" ").slice(0, 10).join(" ") +
                      (product.description.split(" ").length > 10 ? " ..." : "")
                    : "No description"}
                </td>

                <td className="border-2 p-2">{product.category}</td>
                <td className="border-2 p-2">{`$ ${product.price}`}</td>
                <td className="border-2 p-2">{`${product.discount}%`}</td>
                <td className="border-2 p-2">{product.totalQuantity}</td>
                <td className="border-2 p-2">
                  {`${product.availableQuantity}`}
                </td>
                <td className="border-2 p-2">
                  {new Date(product.lastDate).toLocaleDateString()}
                </td>

                <td className="border-2 p-2 text-xs">
                  <button
                    className={`${
                      product.isPublished ? "bg-green-500" : "bg-red-500"
                    } text-white font-bold py-2 px-2 rounded-md`}
                    onClick={() => togglePublishedStatus(product)}
                  >
                    {product.isPublished ? "Published" : "Publish"}
                  </button>
                </td>

                <td className="border-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-2 rounded-md"
                    onClick={() => openEditModal(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1.5 px-2 rounded-md ml-2"
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
      <div className="flex justify-center mt-4">
        {productData.length > itemsPerPage && (
          <ul className="pagination flex">
            {Array(Math.ceil(productData.length / itemsPerPage))
              .fill()
              .map((_, index) => (
                <li
                  key={index}
                  className={`page-item mx-2 ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* Edit Modal */}
      {showEditModal && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 w-[80%] mx-[10rem]">
          <div className="bg-white w-[50%] sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 px-4 py-3">
              <h2 className="text-lg font-semibold text-gray-800">
                Edit Product
              </h2>
            </div>
            <div className="p-4">
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
                <label className="block text-gray-700 mb-2">
                  Images (comma-separated)
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  value={selectedProduct.images.join(", ")}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      images: e.target.value
                        .split(",")
                        .map((item) => item.trim()),
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
                  value={selectedProduct.tags.join(", ")}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      tags: e.target.value
                        .split(",")
                        .map((item) => item.trim()),
                    })
                  }
                />
              </div>
              <div className="flex justify-between">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Price</label>
                  <input
                    type="text"
                    className="border rounded w-[90%] py-2 px-2"
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
                    className="border rounded w-[90%] py-2 px-2"
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
                  <label className="block text-gray-700 mb-2">Available</label>
                  <input
                    type="text"
                    className="border rounded w-[90%] py-2 px-2"
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
                  <label className="block text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    className="border rounded w-[90%] py-2 px-3"
                    value={selectedProduct.lastDate}
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        lastDate: e.target.value,
                      })
                    }
                  />
                </div>
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
          <div className="bg-white w-3/4 sm:w-2/3 md:w-3/4 lg:w-1/3 xl:w-1/4 rounded-lg shadow-lg overflow-hidden">
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
                <p className="text-gray-700">
                  Title: {selectedProduct.merchTitle}
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
                  Expiry Date: {new Date(selectedProduct.lastDate).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mb-2">
                  Description: {selectedProduct.description}
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
