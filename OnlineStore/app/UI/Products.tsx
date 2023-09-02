import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state:any) => state.product);


  useEffect(() => {
    dispatch(fetchProducts() as any);

  }, []);

  const handleAdd = (product: any) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <section id="products">
      <div className="p-4 px-6">
        <h1 className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[darkcyan]">
          Products
        </h1>

        <div className="flex flex-wrap gap-4 md:flex-row flex-col">
          {products.map(
            (item: {
              id: string;
              image: string;
              title: string;
              price: number;
              productId:string;
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
