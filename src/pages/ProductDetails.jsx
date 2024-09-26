import { createContext, useContext } from "react";

import { useParams } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        loading...
      </section>
    );
  }
  
  const { title, price, description, image } = product;
  return (
    <section className=" mt-4 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img className="max-w-[100px] md:max-w-[120px] lg:max-w-sm " src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[12px] font-medium mb-1 max-w-[450px] mx-auto lg:mx-0 lg:text-[25px] ">{title}</h1>
            <div className="lg:text-[20px] text-[16px] text-red-500 font-medium mb-3 ">$ {price}</div>
            <p className="mb-8 md:text-[16px] text-[10px]">{description}</p>
            <button onClick={() => addToCart(product, product.id)} className="bg-primary lg:py-4 py-2 px-8 lg:text-[20px] text-[16px]  text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
