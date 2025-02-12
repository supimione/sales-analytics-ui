"use client";

import { useState } from "react";
import Image from "next/image";
import AddButton from "@/components/layout/AddButton";
import masterData from "@/jsonData/masterData.json";
import { IoMdClose } from "react-icons/io";
import ResultHeader from "@/images/result-header.png";

const lotteryData = ["DEAR", "NAGALAND"];

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [showWinners, setShowWinners] = useState(false);

  const [resultData, setResultData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [winnerData, setWinnerData] = useState([]);

  const tenInputs = Array.from({ length: 10 }, (_, i) => i + 1); // Create an array of numbers 1 to 10
  const hundredInputs = Array.from({ length: 100 }, (_, i) => i + 1); // Create an array of numbers 1 to 100

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      (name.startsWith("secondPrize") ||
        name.startsWith("thirdPrize") ||
        name.startsWith("fourthPrize") ||
        name.startsWith("fifthPrize")) &&
      /^\d*$/.test(value) &&
      value.length <= 5
    ) {
      setResultData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setResultData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleOpenPopup = () => {
    setPopupOpen(!popupOpen);
    setUpdate(false);
  };

  const handleShowWinners = (items) => {
    setShowWinners(!showWinners);
    setWinnerData(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const getPrizeNumbers = (prefix) => {
      const prizeNumbers = [];
      for (let i = 1; i <= 10; i++) {
        const prizeValue = resultData[`${prefix}${i}`];
        if (prizeValue) {
          prizeNumbers.push(prizeValue);
        }
      }
      return prizeNumbers;
    };

    const getFifthPrizeNumbers = (prefix) => {
      const prizeNumbers = [];
      for (let i = 1; i <= 100; i++) {
        const prizeValue = resultData[`${prefix}${i}`];
        if (prizeValue) {
          prizeNumbers.push(prizeValue);
        }
      }
      return prizeNumbers;
    };

    const generateTicketRef = () => {
      const now = new Date();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const timeString = now.getTime().toString().slice(-6);
      return `${month}${day}${timeString}`;
    };

    const combinedData = {
      id: generateTicketRef(),
      date: resultData.date,
      session: resultData.session,
      lotteryName: resultData.ticket,
      firstPrize: resultData.firstPrize,
      prizes: [
        {
          prize: "2nd Prize 9000/- for Seller ₹500/-",
          numbers: getPrizeNumbers("secondPrize"),
        },
        {
          prize: "3rd Prize 450/- for Seller ₹50/-",
          numbers: getPrizeNumbers("thirdPrize"),
        },
        {
          prize: "4th Prize ₹250/- for Seller ₹20/--",
          numbers: getPrizeNumbers("fourthPrize"),
        },
        {
          prize: "5th Prize ₹120/- for Seller ₹10/-",
          numbers: getFifthPrizeNumbers("fifthPrize"),
        },
      ],
    };
    setResultData((prevData) =>
      Array.isArray(prevData) ? [...prevData, combinedData] : [combinedData]
    );
    setPopupOpen(false);
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Results</h1>
        <div className="flex justify-between items-center gap-4">
          <select
            name="filter"
            className="px-2 cursor-pointer font-bold py-2 text-sm bg-white border border-gray-200 rounded-lg"
          >
            {masterData.masterDropdown.filterData.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      <AddButton onAdd={handleOpenPopup} />

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
            {resultData?.length > 0 ? (
              <tbody>
                {resultData?.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-2 text font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td
                      className="px-6 py-2 text text-blue-500 underline cursor-pointer"
                      onClick={() => handleShowWinners(item)}
                    >
                      Show Result - {index + 1}
                    </td>
                    <td className="px-6 py-2 text">{item.date}</td>
                    <td className="px-6 py-2 text">
                      {item.lotteryName} LOTTERY
                    </td>
                    <td className="px-6 py-2 text">{item.session}</td>
                    <td
                      className="px-6 py-2 text text-blue-500 underline cursor-pointer"
                      // onClick={handleDownloadPDF}
                    >
                      Download
                    </td>
                    <td
                      className="px-6 py-2 text flex space-x-2 text-blue-500 underline cursor-pointer"
                      // onClick={handleEditTicketPrize}
                    >
                      Edit Result
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
                    onChange={handleChange}
                    className="w-full px-4 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Session</label>
                  <select
                    name="session"
                    onChange={handleChange}
                    value={resultData?.session}
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
                  <label className="text-sm font-semibold">Scheme</label>
                  <select
                    name="ticket"
                    onChange={handleChange}
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
              <div className="grid !mt-1 gap-2">
                <input
                  type="text"
                  name="firstPrize"
                  placeholder="1st"
                  value={resultData?.firstPrize}
                  onChange={handleChange}
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
                    onChange={handleChange}
                    value={resultData[`secondPrize${num}`] || ""}
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
                    onChange={handleChange}
                    value={resultData[`thirdPrize${num}`] || ""}
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
                    onChange={handleChange}
                    value={resultData[`fourthPrize${num}`] || ""}
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
                    onChange={handleChange}
                    value={resultData[`fifthPrize${num}`] || ""}
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
                {update ? "Update Result" : "Add Result"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showWinners && (
        <div
          onClick={handleShowWinners}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white m-2 text-gray-900 border-2 border-cyan-800 rounded-lg shadow-lg w-full max-w-[210mm] max-h-[90vh] overflow-y-auto relative">
            {winnerData?.map((data) => (
              <div key={data.id} className="relative">
                {/* Result Header Image */}
                <Image
                  alt="Result"
                  src={ResultHeader}
                  className="w-full h-auto object-cover rounded-t-lg"
                />

                {/* Prizes and Numbers Section */}
                <div className="text-center px-5 pt-2 overflow-y-auto">
                  <div key={data.id}>
                    {data?.prizes?.map((prize, index) => (
                      <div key={index}>
                        <h3 className="text-xl m-3 font-bold">{prize.prize}</h3>
                        <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 mb-8">
                          {prize.numbers[0]
                            ?.split(",")
                            ?.map((number, numberIndex) => (
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
                </div>

                {/* Footer Section */}
                <div className="px-4 py-2 flex justify-between bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
                  <h1 className="text-2xl text-amber-300 font-bold">
                    {data.date}
                  </h1>
                  <h1 className="text-2xl text-amber-300 font-bold">
                    {data.session}
                  </h1>
                  <h1 className="text-2xl text-amber-300 font-bold">
                    {data.date}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
