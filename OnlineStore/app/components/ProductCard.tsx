import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({
  productId,
  imageSrc,
  productName,
  productPrice,

  onAddToCart,
}: {
  productId:string;
  imageSrc: string;
  productName: string;
  productPrice: number;

  onAddToCart: () => void;
}) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddToCart = () => {
    onAddToCart();
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-full md:w-[18.8%] flex flex-col">
      <img
        src={imageSrc}
        alt={productName}
        className="w-full h-48 object-contain rounded-md"
      />
      <h2 className="mt-4 text-xl font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis">
        {productName}
      </h2>
      <p className="mt-2 text-gray-600">${productPrice}</p>
      <button
        className="bg-[darkcyan] rounded-md flex justify-between font-medium my-6 mx-auto px-6 py-3 text-black"
        onClick={handleAddToCart}
      >
        {showSuccessMessage ? "Added to Cart!" : "Add to Cart"}
        <BsFillCartFill size={20} className="flex" />
      </button>
      <Link
        to={`/product-details/${productId}`}
        className="text-gray-500 flex justify-center items-center hover:underline"
      >
        View More
      </Link>
    </div>
  );
};

export default ProductCard;
