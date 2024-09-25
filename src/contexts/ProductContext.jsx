import axios from 'axios';
import {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

  const [products, setproducts] = useState([]);

  useEffect(() => {
      const fetchProducts = async () =>{
      await axios.get('https://fakestoreapi.com/products')
      .then((res) => { setproducts(res.data)
      })
    }
    fetchProducts()
  }, [])
  
  
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;