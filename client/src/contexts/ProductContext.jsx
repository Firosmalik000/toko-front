import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sistemtoko.com/public/demo/product');

        setProducts(response.data.aaData);
      } catch (error) {
        console.error('Error mengambil data:', error);
      }
    };

    fetchData();
  }, []);

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
