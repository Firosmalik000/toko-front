import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';

import Product from '../components/categoryCard/Product';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  const { products } = useContext(ProductContext);
  const [search, setSearch] = useState('');
  const filteredProducts = products.filter((product) => {
    return search.toLowerCase() === '' ? true : product.name.toLowerCase().includes(search);
  });

  return (
    <div>
      <Header onSearch={setSearch} />
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className=" h-[50px] items-center text-xl mb-5 flex pl-5 w-full bg-gray-200">Home / Categories</div>
          <div className="flex justify-center grid grid-cols-1 md:grid-cols-3 gap-x-2 mb-5">
            <button className="bg-black text-white py-2 px-4 justify-center items-center mx-auto flex rounded rounded-lg">Kecantikan</button>
            <button className="bg-black text-white py-2 px-4 justify-center items-center mx-auto flex rounded rounded-lg">Aksesoris</button>
            <button className="bg-black text-white py-2 px-4 justify-center items-center mx-auto flex rounded rounded-lg">Pakaian</button>
          </div>
          <div className=" h-[50px] items-center text-xl mb-5 flex pl-5 w-full bg-gray-200">Home / Product</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                return <Product product={product} key={product.id} />;
              })
            ) : (
              <div className="min-h-[15rem] text-center bg-white mx-auto flex text-5xl w-[1500px] justify-center items-center   shadow-sm rounded-xl ">
                <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                  <div className="flex justify-center">
                    <div className="animate-spin  inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
