import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const Delivery = () => {
  const [shippingData, setShippingData] = useState([]);

  useEffect(() => {
    const fetchShippingData = async () => {
      try {
        const response = await axios.get('https://demo.sistemtoko.com/ongkir?id=440&destination=6987&weight=200');
        setShippingData(response.data.data);
      } catch (error) {
        console.error('Error fetching shipping data:', error);
      }
    };

    fetchShippingData();
  }, []);

  return (
    <div>
      <select
        id="Kota"
        className="bg-gray-50 border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block hover:border-red-500 transition duration-300 mt-5   border-red-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 focus:border-blue-500 
        py-5 w-[600px]"
      >
        <option className="text-xl">Pilih Kota</option>
        {shippingData.map((item) => (
          <>
            {item.costs.map((cost) => (
              <option>
                <div className="bg-gray-200  p-2 rounded mb-2 hover:bg-gray-300" key={cost.service}>
                  <p className="text-xl">{item.name}</p>{' '}
                  <p className="text-xl">
                    Harga: {cost.cost[0].value}, ETH: {cost.cost[0].etd}
                  </p>
                </div>
              </option>
            ))}
          </>
        ))}
      </select>
    </div>
  );
};

export default Delivery;
