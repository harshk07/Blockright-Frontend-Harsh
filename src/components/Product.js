// import React from 'react';
// import { useCart } from '../context/cart/CartContext';
// import { Card1 } from './Card1';
// import { useNavigate } from "react-router-dom";

// const Product = ({ productDetails }) => {
//     const navigate = useNavigate();

//     const { addToCart } = useCart();

//     const handleAddToCart = () => {
//         addToCart(productDetails);
//         // Optionally, you can show a confirmation message or redirect to the cart page
//         console.log('Successfully added to Cart')
//     };

//     return (
//         <div key={productDetails._id} onClick={() => navigate(`/market/${productDetails._id}`)} className="cursor-pointer">
//             {/* <h3>{productDetails.merchTitle}</h3>
//             <p>{productDetails.description}</p>
//             <p>{productDetails.price}</p> */}
//             <Card1
//                 imgSource={productDetails.images[0]}
//                 title={productDetails.merchTitle}
//                 description={productDetails.description}
//                 comment=""
//             />
//             <button onClick={handleAddToCart}>Add to Cart</button>
//         </div>
//     );
// };

// export default Product;


// Currently Discarded