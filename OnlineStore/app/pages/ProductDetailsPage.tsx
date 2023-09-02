import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>();

  const products = useSelector((state: any) => state.product.data);

  console.log("Products:", productId);
  const product = products.find(
    (item: { id: any }) => item.id == productId
  );
console.log("Products:", product);
  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="flex pt-28">
      <div className="w-1/3 flex justify-center items-center">
        <img src={product.image} alt={product.title} className="mb-4 h-96" />
      </div>
      <div className="w-1/2 flex flex-col justify-start p-6">
        <h1 className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[darkcyan]">
          {product.title}
        </h1>
        <p className="text-lg mb-2">
          <span className="text-[darkcyan] text-2xl">Price:</span> $
          {product.price}
        </p>
        <p className="text-lg mb-2">
          <span className="text-[darkcyan] text-2xl"> Description:</span>{" "}
          {product.description}
        </p>
        <p className="text-lg mb-2">
          <span className="text-[darkcyan] text-2xl">Category:</span>{" "}
          {product.category}
        </p>
        <p className="text-lg mb-2">
          <span className="text-[darkcyan] text-2xl">Items Left:</span>{" "}
          {product.rating.count}
        </p>
        <p className="text-lg mb-2">
          <span className="text-[darkcyan] text-2xl">Rating:</span>{" "}
          {product.rating.rate}
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
