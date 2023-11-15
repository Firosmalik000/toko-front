import React, { useContext } from 'react';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, name, stock, price, photo } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <Link to={`/product/${id}`}>
            <div className="w-[200] mx-auto flex justify-center items-center">
              <img className="max-h-[160px] group-hover:scale-110 transition duration-300 " src={photo} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="text-center text-sm capitalize text-gray-500 mb-1">{stock} </div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1 text-center uppercase h-[40px] text-xl ">{name} </h2>
        </Link>
        <div className="text-center font-semibold">{price} </div>
      </div>
      <button className="bg-black text-white py-2 px-4 justify-center items-center mx-auto flex hover:bg-red-200 transition duration-300 rounded rounded-lg" onClick={() => addToCart(product, id)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
