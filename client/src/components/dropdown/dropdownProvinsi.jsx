import { useEffect, useState } from 'react';
import axios from 'axios';

const DropdownProvinsi = () => {
  const [provinsi, setProvinsi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://demo.sistemtoko.com/province');
        setProvinsi(response.data);
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
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block hover:border-red-500 transition duration-300 mt-6  border-red-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500
        py-2 w-[400px]"
      >
        <option>Pilih Provinsi</option>
        {provinsi.map((item) => (
          <option key={item.province_id}>{item.province}</option>
        ))}
      </select>
    </div>
  );
};
export default DropdownProvinsi;
