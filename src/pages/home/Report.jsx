import { useState } from 'react';

//styles
import './home.css';

//components
import Layout from '../../components/layout/Layout';

const Report = () => {
  const tableHeader = ['Date & Time', 'Same', ' From', 'To'];
  const tableBody = [
    {
      Date: '2024-04-19 3:30 PM',
      Same: 'Blue',
      From: 'Tablet',
      To: '$499',
    },
    {
      Date: '2024-04-18 4:45 PM',
      Same: 'Green',
      From: 'Headphones',
      To: '$199',
    },
    {
      Date: '2024-04-17 5:30 PM',
      Same: 'Yellow',
      From: 'Charger',
      To: '$19',
    },
    {
      Date: '2024-04-19 3:30 PM',
      Same: 'Blue',
      From: 'Tablet',
      To: '$499',
    },
    {
      Date: '2024-04-18 4:45 PM',
      Same: 'Green',
      From: 'Headphones',
      To: '$199',
    },
    {
      Date: '2024-04-19 3:30 PM',
      Same: 'Blue',
      From: 'Tablet',
      To: '$499',
    },
    {
      Date: '2024-04-18 4:45 PM',
      Same: 'Green',
      From: 'Headphones',
      To: '$199',
    },
    {
      Date: '2024-04-17 5:30 PM',
      Same: 'Yellow',
      From: 'Charger',
      To: '$19',
    },
    {
      Date: '2024-04-19 3:30 PM',
      Same: 'Blue',
      From: 'Tablet',
      To: '$499',
    },
    {
      Date: '2024-04-18 4:45 PM',
      Same: 'Green',
      From: 'Headphones',
      To: '$199',
    },
    {
      Date: '2024-04-19 3:30 PM',
      Same: 'Blue',
      From: 'Tablet',
      To: '$499',
    },
    {
      Date: '2024-04-18 4:45 PM',
      Same: 'Green',
      From: 'Headphones',
      To: '$199',
    },
    {
      Date: '2024-04-17 5:30 PM',
      Same: 'Yellow',
      From: 'Charger',
      To: '$19',
    },
    {
      Date: '2024-04-19 3:30 PM',
      Same: 'Blue',
      From: 'Tablet',
      To: '$499',
    },
    {
      Date: '2024-04-18 4:45 PM',
      Same: 'Green',
      From: 'Headphones',
      To: '$199',
    },
    {
      Date: '2024-04-19 3:30 PM',
      Same: 'Blue',
      From: 'Tablet',
      To: '$499',
    },
    {
      Date: '2024-04-18 4:45 PM',
      Same: 'Green',
      From: 'Headphones',
      To: '$199',
    },
    {
      Date: '2024-04-17 5:30 PM',
      Same: 'Yellow',
      From: 'Charger',
      To: '$19',
    },
    {
      Date: '2024-04-19 3:30 PM',
      Same: 'Blue',
      From: 'Tablet',
      To: '$499',
    },
    {
      Date: '2024-04-18 4:45 PM',
      Same: 'Green',
      From: 'Headphones',
      To: '$199',
    },
    {
      Date: '2024-04-19 3:30 PM',
      Same: 'Blue',
      From: 'Tablet',
      To: '$499',
    },
    {
      Date: '2024-04-18 4:45 PM',
      Same: 'Green',
      From: 'Headphones',
      To: '$199',
    },
    {
      Date: '2024-04-17 5:30 PM',
      Same: 'Yellow',
      From: 'Charger',
      To: '$19',
    },
    {
      Date: '2024-04-19 3:30 PM',
      Same: 'Blue',
      From: 'Tablet',
      To: '$499',
    },
    {
      Date: '2024-04-18 4:45 PM',
      Same: 'Green',
      From: 'Headphones',
      To: '$199',
    },
  ];

  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = tableBody?.length;
  const itemsPerPage = 13;

  // Calculate the index range for the current page
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableBody.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Layout>
      <div className="p-4 mt-10 sm:ml-64">
        <div className="flex items-center justify-between">
          <h6 className="text-xl font-bold m-4">Purchase</h6>
          <button
            type="button"
            onClick={openModal}
            className="py-2 px-4 inline-flex items-center text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            New Purchase
          </button>
        </div>

        <div className="border border-l-8 border-blue-800 shadow rounded-lg mt-3 relative table-container">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase bg-gray-200">
              <tr>
                {tableHeader?.map((header, index) => (
                  <th key={index} scope="col" className="px-6 py-4">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {currentItems?.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{row?.Date}</td>
                  <td className="px-6 py-4">{row?.Same}</td>
                  <td className="px-6 py-4">{row?.From}</td>
                  <td className="px-6 py-4">{row?.To}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination controls */}
          <div className="bg-gray-100 p-2 border pagination-container">
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    className="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="currentColor" d="M5 1 1 5l4 4" />
                  </svg>
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => handlePageChange(i + 1)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                      i + 1 === currentPage ? 'font-semibold' : ''
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={indexOfLastItem >= tableBody.length}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    className="w-2.5 h-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="currentColor" d="m1 9 4-4-4-4" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {isOpenModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Product
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
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
                      From
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
                      To
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
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Product Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write product description here"
                    ></textarea>
                  </div>
                </div>
                <button className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                  </svg>
                  Add new product
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Report;
