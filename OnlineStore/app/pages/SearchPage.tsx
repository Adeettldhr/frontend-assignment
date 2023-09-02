import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchResults, setSearchTerm } from "../store/productSlice";
import ProductCard from "../components/ProductCard";
import { add } from "../store/cartSlice";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const products = useSelector((state:any) => state.product.data);
  const searchResults = useSelector((state:any) => state.product.searchResults);

  const handleSearch = () => {
    const filteredResults = products.filter((product: { title: string; }) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    dispatch(setSearchResults(filteredResults));
  };
    const handleAdd = (product: any) => {
      dispatch(add(product));
    };

  return (
    <div className="pt-28">
      <div className="flex items-center justify-center mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search..."
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-4 md:flex-row flex-col">
        {searchResults.length > 0 ? (
          searchResults.map(
            (item: {
              id: string;
              image: string;
              title: string;
              price: number;
              productId: string;
            }) => (
              <ProductCard
                key={item.id}
                productId={item.id}
                imageSrc={item.image}
                productName={item.title}
                productPrice={item.price}
                onAddToCart={() => handleAdd(item)}
              />
            )
          )
        ) : (
          <p className="text-lg">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
