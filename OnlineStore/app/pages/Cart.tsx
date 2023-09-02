import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);
  const handleRemove = (productId: any) => {
    dispatch(remove(productId));
  };

  return (
    <div className="pt-28 p-4">
      <div className="">
        {products.length > 0 ? (
          products.map(
            (product: {
              id: React.Key | null | undefined;
              image: string | undefined;
              title: string; // Update the type declaration for title to 'string'
              price: string | number; // Update the type declaration for price to 'string | number'
            }) => (
              <div
                key={product.id}
                className="flex items-center justify-between bg-white mb-4 p-4 rounded-md"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h5 className="text-xl font-semibold">{product.title}</h5>
                  <h5 className="text-gray-600">${product.price}</h5>
                </div>
                <button
                  className="bg-red-600 text-white py-1 px-2 rounded-md font-bold cursor-pointer transition duration-300 ease-in-out hover:bg-red-400 focus:outline-none"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            )
          )
        ) : (
          <p className="text-center text-gray-500">No items in the cart.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
