import React from 'react';
import DeliveryCard from '../components/DeliveryCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Checkout = () => {
  return (
    <>
      <Header />
      <section className="bg-red-100 h-full w-full">
        <div>
          <div className="w-[80%] bg-gray-100 justify-center items-center flex mx-auto h-[100px] mt-[78px]">
            <h1 className="text-4xl text-semibold text-center ">Submit Order</h1>
          </div>

          <DeliveryCard />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Checkout;
