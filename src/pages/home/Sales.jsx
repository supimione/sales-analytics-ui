import { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles

//styles
import './home.css';

//components
import Layout from '../../components/layout/Layout';

//react-icons
import { IoMdClose } from 'react-icons/io';

const Sales = () => {
  const tableHeader = ['Date', 'Time', 'Name', 'Same', ' From', 'To', 'Total'];
  const tableBody = [
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
    {
      Date: '2024-04-19',
      Time: 'Morning',
      Same: 2,
      Name: 'Ram',
      From: 1245,
      To: 3244,
      Total: 123,
    },
  ];

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    date: null,
    time: '',
    same: '',
    name: '',
    from: null,
    to: null,
    total: null,
  });

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (e.target.NAME === 'Time') {
      const selectedOption = e.target.options[e.target.selectedIndex].value;
      setFormData(prevState => ({
        ...prevState,
        [name]: selectedOption,
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    console.log('test');
  };

  return (
    <Layout>
      <div className="body-container sm:ml-64">
        <div className="flex items-center justify-between header-container sales-table-head">
          <h6 className="header-text sales-text">Sales Order</h6>
          <button
            type="button"
            onClick={openModal}
            className="new-btn new-sales"
          >
            Add Sales
          </button>
        </div>

        <div className="rounded-lg mt-3 relative table-container">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs text-gray-900 uppercase sales-table-head">
              <tr>
                {tableHeader?.map((header, index) => (
                  <th key={index} scope="col" className="px-6 py-4">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {tableBody?.map((row, index) => (
                <tr key={index} className="table-tr">
                  <td className="px-6 py-3">{row?.Date}</td>
                  <td className="px-6 py-3">{row?.Time}</td>
                  <td className="px-6 py-3">{row?.Name}</td>
                  <td className="px-6 py-3">{row?.Same}</td>
                  <td className="px-6 py-3">{row?.From}</td>
                  <td className="px-6 py-3">{row?.To}</td>
                  <td className="px-6 py-3">{row?.Total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isOpenModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 add-index">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Sales
                </h3>
                <IoMdClose
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-5 h-5 inline-flex justify-center items-center cursor-pointer"
                />
              </div>

              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Date
                    </label>
                    <DatePicker
                      selected={formData.date}
                      onChange={date =>
                        setFormData(prevState => ({ ...prevState, date }))
                      }
                      className="border rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Time
                    </label>
                    <select
                      name="time"
                      onChange={handleChange}
                      className="border rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    >
                      <option selected>--- Choose ---</option>
                      <option value="day">Day</option>
                      <option value="morning">Morning</option>
                      <option value="night">Night</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      onChange={handleChange}
                      className="border rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Same
                    </label>
                    <input
                      type="text"
                      name="same"
                      autoComplete="off"
                      onChange={handleChange}
                      className="border rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      From
                    </label>
                    <input
                      type="number"
                      name="from"
                      onChange={handleChange}
                      className="border rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      To
                    </label>
                    <input
                      type="number"
                      name="to"
                      onChange={handleChange}
                      className="border rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    />
                  </div>
                  <div className="col-span-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Total
                    </label>
                    <input
                      name="total"
                      onChange={handleChange}
                      className="border rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="save-btn"
                  onClick={handleSubmit}
                  disabled={
                    formData.date == null ||
                    formData.date === '' ||
                    formData.time == null ||
                    formData.time === '' ||
                    formData.same == null ||
                    formData.same === '' ||
                    formData.name == null ||
                    formData.name === '' ||
                    formData.from == null ||
                    formData.from === '' ||
                    formData.to == null ||
                    formData.to === '' ||
                    formData.total == null ||
                    formData.total === ''
                  }
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Sales;
