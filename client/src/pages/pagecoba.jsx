import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sistemtoko.com/public/demo/product');
        console.log('Respon API:', response.data);
        setProducts(response.data.aaData);
      } catch (error) {
        console.error('Error mengambil data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>ID: {product.id}</p>
              <p>Price: {product.price}</p>
              <p>Stock: {product.stock}</p>

              <img src={product.photo} alt={product.name} style={{ maxWidth: '100px' }} />
              {product.varian && (
                <div>
                  <h4>Variants:</h4>
                  <ul>
                    {product.varian.map((variant, index) => (
                      <li key={index}>{variant.value}</li>
                    ))}
                  </ul>
                </div>
              )}
              {product.childs && product.childs.length > 0 && (
                <div>
                  <h4>Child Products:</h4>
                  <ul>
                    {product.childs.map((child) => (
                      <li key={child.id}>
                        <h5>{child.name}</h5>
                        <p>ID: {child.id}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
