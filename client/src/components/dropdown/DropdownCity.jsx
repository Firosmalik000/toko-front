import axios from 'axios';
import { useEffect, useState } from 'react';

const Dropdown = () => {
  const [kota, setKota] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://demo.sistemtoko.com/city/5');
        setKota(response.data);
     
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <select
        id="Kota"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block hover:border-red-500 transition duration-300 mt-5   border-red-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 focus:border-blue-500
        py-2 w-[400px]"
      >
        <option>Pilih Kota</option>
        {kota.map((item) => (
          <option key={item.city_id}>{item.city_name}</option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
