import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <div className="min-h-[15rem] text-center bg-white mx-auto items-center flex text-5xl w-[1500px]-md justify-center items-center   shadow-sm rounded-xl ">
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <div className="flex justify-center">
            <div className="animate-spin  inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { name, price, description, photo, stock, varian, childs } = product;
  const anak = childs.varian;

  return (
    <>
      <Header />
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img className="max-w-[200px] lg:max-w-sm" src={photo} alt={name} />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 mb-4">{name}</h1>
              {
                <div className="grid grid-cols-1 md:grid-cols-2 w-[500px] mb-4 gap-1">
                  {varian.map((variant, index) => (
                    <>
                      <button key={index} className={`bg-primary p-3 text-white rounded rounded-lg w-[200px]  'border-2 border-white' : ''}`}>
                        {variant.value}
                      </button>
                    </>
                  ))}
                  {anak &&
                    anak.map((child, index) => (
                      <button key={child.id} className={`bg-primary p-3 text-white rounded rounded-lg w-[200px]  'border-2 border-white' : ''}`}>
                        {child.value}
                      </button>
                    ))}
                </div>
              }
              <div className="text-red-500 font-medium mb-6">Rp. {price}</div>
              <div className="text-red-500 font-medium mb-6">Stock : {stock}</div>
              <p className="mb-8">{description}</p>
              <button onClick={() => addToCart(product, product.id)} className="bg-primary hover:bg-red-200 transition duration-300 rounded rounded-lg py-4 px-8 text-white">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
