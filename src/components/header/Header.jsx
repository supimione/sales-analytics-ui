/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { FaUsersGear } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

import { useState } from 'react';

const Header = ({ onMenuClick }) => {
  const [openProfile, setOpenProfile] = useState(false);

  const toggleProfile = () => {
    setOpenProfile(prevState => !prevState);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400"
              onClick={onMenuClick}
            >
              <HiOutlineMenuAlt2 size="24px" />
            </button>
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 me-3"
              alt="FlowBite Logo"
            />
          </div>

          <div className="flex items-center mr-6">
            <FaUsersGear
              size="24px"
              cursor="pointer"
              color="#515151"
              className="mr-5"
              onClick={openModal}
            />
            <img
              className="w-8 h-8 rounded-full cursor-pointer"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
              onClick={toggleProfile}
            />
          </div>

          {openProfile && (
            <div className="z-50 absolute mt-60 right-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3">
                <p className="text-sm text-gray-900 dark:text-white">
                  Neil Sims
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li style={{ borderTop: '1px solid #8080806e' }}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}

          {isOpenModal && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 add-index">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Add Product
                  </h3>
                  <IoMdClose
                    onClick={closeModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-5 h-5 inline-flex justify-center items-center cursor-pointer"
                  />
                </div>
                <form className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Mobile
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="$2999"
                        required=""
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="$2999"
                        required=""
                      />
                    </div>
                  </div>
                  <button className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
