"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import DeletePopup from "@/components/DeletePopup";
import masterData from "@/data/masterData.json";
import { IoMdClose, IoMdDownload } from "react-icons/io";
import { MdDelete, MdEditDocument } from "react-icons/md";

const initialTicketGridData = [
  {
    id: 1,
    date: "12-02-2025",
    session: "MOR(13:00)",
    lotteryName: "DEAR",
    prizes: [
      {
        prize: "1st Prize ₹1 Crore/-",
        numbers: ["56E 81013"],
      },
      {
        prize: "2nd Prize ₹9000/-",
        numbers: [
          "13142, 13458, 18574, 29786, 30127, 34518, 45754, 52222, 85210, 94495",
        ],
      },
      {
        prize: "3rd Prize ₹450/-",
        numbers: ["0941, 1771, 4993, 5126, 5273, 5968, 6065, 7481, 7502, 9372"],
      },
      {
        prize: "4th Prize ₹250/-",
        numbers: ["0153, 0967, 2747, 4677, 5062, 6075, 7705, 7846, 8720, 8536"],
      },
      {
        prize: "5th Prize ₹120/-",
        numbers: [
          "0132, 1082, 2246, 3541, 4589, 7049, 7696, 8621, 9196, 9295, 0668, 1222, 2473, 3548, 5050, 7169, 7832, 8889, 9235, 0829, 1336, 2585, 3754, 5380, 7295",
        ],
      },
    ],
  },
];

const lotteryData = ["DEAR", "NAGALAND"];

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [showWinners, setShowWinners] = useState(false);
  const [update, setUpdate] = useState(false);
  const [ticketGridData, setTicketGridData] = useState(initialTicketGridData);
  const [prizeItem, setPrizeItem] = useState("");
  const tenInputs = Array.from({ length: 10 }, (_, i) => i + 1); // Create an array of numbers 1 to 10
  const hundredInputs = Array.from({ length: 100 }, (_, i) => i + 1); // Create an array of numbers 1 to 100
  const [inputData, setInputData] = useState("");

  const handleDropdownChange = (e) => {};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 5) {
      setInputData((prevData) => ({
        ...prevData,
        [name]: value, // Update the specific field based on the input's name
      }));
    }
  };

  const handleOpenPopup = () => {
    setPopupOpen(!popupOpen);
    setUpdate(false);
  };

  const handleShowWinners = (items) => {
    setShowWinners(!showWinners);
    setPrizeItem(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const combinedData = {
      ...inputData,
    };

    setTicketGridData((prevData) => [...prevData, combinedData]);
    setPopupOpen(false);
  };

  const handleEditTicketPrize = (item) => {
    setDropdownData({
      date: item.date,
      session: item.session,
      day: item.day,
    });

    // Helper function to generate prize fields dynamically
    const generatePrizeData = (prefix, count) => {
      const prizeData = {};
      for (let i = 1; i <= count; i++) {
        prizeData[`${prefix}${i}`] = item[`${prefix}${i}`];
      }
      return prizeData;
    };

    // Set input data dynamically for each prize category
    setInputData({
      firstPrize: item.firstPrize,

      ...generatePrizeData("secondPrize", 10),
      ...generatePrizeData("thirdPrize", 10),
      ...generatePrizeData("fourthPrize", 10),
      ...generatePrizeData("fifthPrize", 100),
    });

    setPopupOpen(!popupOpen);
    setUpdate(true);
  };

  const handleDeleteClick = (props) => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  };

  const handleCancelDelete = () => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  };

  const handleDownloadPDF = () => {};

  return (
    <div className="p-5">
      <PageHeader title="Winning" btnText="+ Add" onAdd={handleOpenPopup} />

      <div className="p-0 sm:p-2 mt-4 sm:border-2 border-2 border-gray-200 border-dashed rounded-lg">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {masterData.tableHeader.result.map((item) => (
                  <th scope="col" className="px-6 py-3" key={item}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            {ticketGridData?.length > 0 ? (
              <tbody>
                {ticketGridData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td
                      className="px-6 py-4 text-blue-500 underline cursor-pointer"
                      onClick={() => handleShowWinners(item.prizes)}
                    >
                      RESULT
                    </td>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4">{item.lotteryName}</td>
                    <td className="px-6 py-4">{item.session}</td>
                    <td className="px-6 py-4 flex space-x-2">
                      <MdEditDocument
                        className="text-blue-500 cursor-pointer text-xl hover:text-blue-700"
                        onClick={() => handleEditTicketPrize(item)}
                      />
                      <MdDelete
                        className="text-red-500 cursor-pointer text-xl hover:text-red-700"
                        onClick={() => handleDeleteClick(item.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td
                    colSpan="8" // Adjust this number based on the number of columns in your table
                    className="text-center p-6"
                  >
                    <div className="text-gray-500 dark:text-gray-400 text-base">
                      No Data Found
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>

      {popupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-gray-900 m-2 p-4 rounded-lg shadow-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold">
                {update ? "Update Prizes" : "Add Prizes"}
              </h2>
              <IoMdClose
                onClick={handleOpenPopup}
                className="cursor-pointer text-xl"
              />
            </div>

            <div className="p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div>
                  <label className="text-sm font-semibold">Date *</label>
                  <input
                    type="date"
                    name="date"
                    onChange={handleDropdownChange}
                    className="w-full px-4 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Session</label>
                  <select
                    name="session"
                    onChange={handleDropdownChange}
                    className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
                  >
                    <option>---</option>
                    {masterData.masterDropdown.session.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold">Day</label>
                  <select
                    name="ticket"
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
                  >
                    <option>---</option>
                    {lotteryData.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <h3 className="text-sm font-semibold">1st Prize </h3>
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 !mt-1 gap-2">
                <input
                  type="number"
                  name="firstPrize"
                  placeholder="1st"
                  value={inputData?.firstPrize}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
              </div>

              <h3 className="text-sm font-semibold">2nd Prizes</h3>
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 !mt-1 gap-2">
                {tenInputs.map((num) => (
                  <input
                    key={num}
                    type="number"
                    name={`secondPrize${num}`}
                    placeholder={`${num}`}
                    onChange={handleInputChange}
                    value={inputData[`secondPrize${num}`] || ""}
                    className={
                      "w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    }
                  />
                ))}
              </div>

              <h3 className="text-sm font-semibold">3rd Prizes</h3>
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 !mt-1 gap-2">
                {tenInputs.map((num) => (
                  <input
                    key={num}
                    type="number"
                    name={`thirdPrize${num}`}
                    placeholder={`${num}`}
                    onChange={handleInputChange}
                    value={inputData[`thirdPrize${num}`] || ""}
                    className={
                      "w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    }
                  />
                ))}
              </div>

              <h3 className="text-sm font-semibold">4th Prizes</h3>
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 !mt-1 gap-2">
                {tenInputs.map((num) => (
                  <input
                    key={num}
                    type="number"
                    name={`fourthPrize${num}`}
                    placeholder={`${num}`}
                    onChange={handleInputChange}
                    value={inputData[`fourthPrize${num}`] || ""}
                    className={
                      "w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    }
                  />
                ))}
              </div>

              <h3 className="text-sm font-semibold">5th Prizes</h3>
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 !mt-1 gap-2">
                {hundredInputs.map((num) => (
                  <input
                    key={num}
                    type="number"
                    name={`fifthPrize${num}`}
                    placeholder={`${num}`}
                    onChange={handleInputChange}
                    value={inputData[`fifthPrize${num}`] || ""}
                    className={
                      "w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end bg-gray-100 p-4 rounded-b-lg space-x-2">
              <button
                onClick={handleOpenPopup}
                className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                {update ? "Update Tickets" : "Add Tickets"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showWinners && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white m-2 text-gray-900 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                className="cursor-pointer text-xl"
                onClick={handleDownloadPDF}
              >
                <IoMdDownload />
              </button>

              <button
                className="cursor-pointer text-xl"
                onClick={handleShowWinners}
              >
                <IoMdClose />
              </button>
            </div>

            <div className="bg-gray-50 text-center p-8 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold skew-y-3">
                LMS STATE LOTTERIES
              </h1>
              <div className="text-lg font-extrabold mt-4">
                <p>session RESULT date</p>
                <p className="bg-amber-300 max-w-24 text-base mx-auto rounded">
                  11:55 AM
                </p>
              </div>
            </div>

            <div className="text-center p-3 md:p-5">
              {ticketGridData.map((ticket) => (
                <div key={ticket.id}>
                  {ticket.prizes.map((prize, index) => (
                    <div key={index}>
                      <h3 className="text-base mt-6 mb-2 font-bold">
                        {prize.prize}
                      </h3>
                      <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
                        {prize.numbers[0]
                          .split(",")
                          .map((number, numberIndex) => (
                            <span
                              key={numberIndex}
                              className="text-sm p-1 bg-gray-100 rounded"
                            >
                              {number.trim()}
                            </span>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isDeletePopupOpen && (
        <DeletePopup isOpen={isDeletePopupOpen} onClose={handleCancelDelete} />
      )}
    </div>
  );
}
