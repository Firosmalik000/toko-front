import React from 'react';
import Dropdown from '../components/dropdown/DropdownCity';
import DropdownProvinsi from '../components/dropdown/dropdownProvinsi';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const DetailUser = () => {
  return (
    <>
      <Header />
      <section>
        <div className="w-full h-screen bg-gray-100">
          <div>
            <div className="bg-gray-200 w-[80%] mx-auto items-center justify-center flex h-[130px] mt-[78px]">
              <h1 className="text-4xl text-semibold ">Data Pelanggan</h1>
            </div>
            <div className="w-[80%] h-full border mx-auto    bg-white ">
              <form className="mt-10 px-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-x-5 mb-[200px]">
                <div>
                  <label className="text-xl fonst-semibold mb-2  "> Email</label>
                  <br />
                  <input type="text" className="px-5 text-xl my-5 py-2 w-[400px] rounded rounded-lg border border-red-200 hover:border-red-600 transition duration-300" />
                  <br />
                  <label className="text-xl fonst-semibold mb-2  "> Nama</label>
                  <br />
                  <input type="text" className="px-5 text-xl my-5 py-2 w-[400px] rounded rounded-lg border border-red-200 hover:border-red-600 transition duration-300" />
                  <br />
                  <label className="text-xl fonst-semibold mb-2  "> No Telp</label>
                  <br />
                  <input type="text" className="px-5 text-xl my-5 py-2 w-[400px] rounded rounded-lg border border-red-200 hover:border-red-600 transition duration-300" />
                  <br />
                  <label className="text-xl fonst-semibold mb-2  "> Whatsapp</label>
                  <br />
                  <input type="text" className="px-5 text-xl my-5 py-2 w-[400px] rounded rounded-lg border border-red-200 hover:border-red-600 transition duration-300" />
                  <br />
                  <label className="text-xl fonst-semibold mb-2  "> Line</label>
                  <br />
                  <input type="text" className="px-5 text-xl my-5 py-2 w-[400px] rounded rounded-lg border border-red-200 hover:border-red-600 transition duration-300" />
                  <br />
                </div>
                <div>
                  <label className="text-xl fonst-semibold mb-2  "> Atas Nama</label>
                  <br />
                  <input type="text" className="px-5 text-xl my-5 py-2 w-[400px] rounded rounded-lg border border-red-200 hover:border-red-600 transition duration-300" />
                  <br />
                  <label className="text-xl fonst-semibold mb-2  "> Provinsi</label>
                  <br />
                  <DropdownProvinsi />
                  <br />
                  <label className="text-xl fonst-semibold mb-2  "> Kota</label>
                  <br />
                  <Dropdown />
                  <br />
                  <label className="text-xl fonst-semibold mb-2  "> Detail Alamat</label>
                  <br />
                  <input type="text" className="px-5 text-xl my-5 py-2 w-[400px] rounded rounded-lg border border-red-200 hover:border-red-600 transition duration-300 h-[150px] " />
                  <br />
                  <Link to="/checkout">
                    <button type="submit" className="bg-primary px-3 py-2 text-white hover:bg-red-200 rounded rounded-lg transition duration-300">
                      Simpan
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default DetailUser;
