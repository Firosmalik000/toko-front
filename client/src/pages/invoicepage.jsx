import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/skeleton/spinner';
import { Link } from 'react-router-dom';

const Invoice = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://demo.sistemtoko.com/public/show_invoice/101C2O');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <Spinner />;
  }

  const saleInfo = data.sale;
  const customerInfo = saleInfo.customer;
  const items = saleInfo.items;

  return (
    <section className="bg-red-100 h-full   ">
      <div className="container md:w-[50%] xl:w-[50%] lg:w-[50%] bg-white items-center  mx-auto justify-center">
        <div className=" h-[100vh]  ">
          <div className="pt-10 text-3xl text-center border-b border-black  border-w-[100px] px-10 font-semibold ">INVOICE</div>
          <div className="px-[50px] py-[50px]">
            <div className="grid md:grid-cols-2 gap-10 pt-5">
              <div>
                <h3 className="text-2xl underline">Info Pembeli:</h3>
                <p className="text-xl">Nama: {customerInfo.name}</p>
                <p className="text-xl">Email: {customerInfo.email}</p>
                <p className="text-xl">Nomor Telepon: {customerInfo.phone}</p>
                <p className="text-xl">Alamat: {customerInfo.address}</p>
              </div>
              <div className="justify-end flex">
                <h2 className="text-2xl">Invoice #{saleInfo.sale_invoice_no}</h2>
              </div>
            </div>
            <div className="pt-5">
              <h3 className="text-2xl underline ">Info Pembelian</h3>
              <p className="text-xl">Kode Order: {saleInfo.sale_order_code}</p>
              <p className="text-xl">Waktu Pembelian: {saleInfo.sale_date}</p>
              <p className="text-xl">
                Total: {saleInfo.sale_total_price} {saleInfo.sale_currency}
              </p>
            </div>
            <div className=" h-[130px] p-[20px]  ">
              <h3 className="text-2xl">Items:</h3>
              <div className=" ">
                <table className="w-full pb-5">
                  <thead>
                    <th className="border text-xl">Nama Product</th>
                    <th className="border text-xl">Jumlah</th>
                    <th className="border text-xl">Harga</th>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td className="border text-center   text-xl">{item.name}</td>
                        <td className="border text-center   text-xl">{item.total}</td>
                        <td className="border text-center   text-xl">
                          {item.currency}
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 pt-5 mb-5">
              <div>
                <h3 className="text-2xl underline">Additional Information:</h3>
                <p className="text-xl">Channel: {saleInfo.channel}</p>
                <p className="text-xl">Link Konfirmasi Pembayaran: {data.confirm_page}</p>
              </div>
              <div>
                <h3 className="text-2xl underline">Other Information:</h3>
                <p className="text-xl">Status Pembayaran: {saleInfo.sale_payment_status}</p>
                <p className="text-xl">Waktu Pembayaran: {saleInfo.sale_payment_date}</p>
              </div>
            </div>
          </div>
          <Link to={'/'} className="btn border items-center text-xl border-slate-400 hover:bg-slate-400 hover:text-white transition duration-300 justify-center mx-auto flex py-3 px-5 w-[70%] rounded rounded-lg ">
            Kembali ke halaman utama
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Invoice;
