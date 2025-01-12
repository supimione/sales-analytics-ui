"use client";

import { useState } from "react";

//components
import PageHeader from "@/components/PageHeader";
import DeletePopup from "@/components/DeletePopup";
import masterData from "@/data/masterData.json";

//react-icons
import { IoMdClose, IoMdDownload } from "react-icons/io";
import { MdDelete, MdEditDocument } from "react-icons/md";

const prizeData = [
  {
    prize: "1st Prize ₹1 Crore/-",
    numbers: ["56E 81013"],
  },
  {
    prize: "2nd Prize ₹9000/-",
    numbers: [
      "13142",
      "13458",
      "18574",
      "29786",
      "30127",
      "34518",
      "45754",
      "52222",
      "85210",
      "94495",
    ],
  },
  {
    prize: "3rd Prize ₹450/-",
    numbers: [
      "0941",
      "1771",
      "4993",
      "5126",
      "5273",
      "5968",
      "6065",
      "7481",
      "7502",
      "9372",
    ],
  },
  {
    prize: "4th Prize ₹250/-",
    numbers: [
      "0153",
      "0967",
      "2747",
      "4677",
      "5062",
      "6075",
      "7705",
      "7846",
      "8720",
      "8536",
    ],
  },
  {
    prize: "5th Prize ₹120/-",
    numbers: [
      "0132",
      "1082",
      "2246",
      "3541",
      "4589",
      "7049",
      "7696",
      "8621",
      "9196",
      "9295",
      "0668",
      "1222",
      "2473",
      "3548",
      "5050",
      "7169",
      "7832",
      "8889",
      "9235",
      "0829",
      "1336",
      "2585",
      "3754",
      "5380",
      "7295",
      "0132",
      "1082",
      "2246",
      "3541",
      "4589",
      "7049",
      "7696",
      "8621",
      "9196",
      "9295",
      "0668",
      "1222",
      "2473",
      "3548",
      "5050",
      "7169",
      "7832",
      "8889",
      "9235",
      "0829",
      "1336",
      "2585",
      "3754",
      "5380",
      "7295",
      "0132",
      "1082",
      "2246",
      "3541",
      "4589",
      "7049",
      "7696",
      "8621",
      "9196",
      "9295",
      "0668",
      "1222",
      "2473",
      "3548",
      "5050",
      "7169",
      "7832",
      "8889",
      "9235",
      "0829",
      "1336",
      "2585",
      "3754",
      "5380",
      "7295",
      "0132",
      "1082",
      "2246",
      "3541",
      "4589",
      "7049",
      "7696",
      "8621",
      "9196",
      "9295",
      "0668",
      "1222",
      "2473",
      "3548",
      "5050",
      "7169",
      "7832",
      "8889",
      "9235",
      "0829",
      "1336",
      "2585",
      "3754",
      "5380",
      "7295",
    ],
  },
];

const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // Returns date in YYYY-MM-DD format
};

const getCurrentDay = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  return daysOfWeek[today.getDay()]; // Returns the current day of the week
};

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [showWinners, setShowWinners] = useState(false);
  const [update, setUpdate] = useState(false);
  const [ticketGridData, setTicketGridData] = useState([]);
  console.log(ticketGridData, "ticketGridData");

  const tenInputs = Array.from({ length: 10 }, (_, i) => i + 1); // Create an array of numbers 1 to 10
  const hundredInputs = Array.from({ length: 100 }, (_, i) => i + 1); // Create an array of numbers 1 to 100

  // Initialize state with dynamic date and day
  const [dropdownData, setDropdownData] = useState({
    date: getCurrentDate(),
    session: "MOR",
    day: getCurrentDay(),
  });
  const [inputData, setInputData] = useState("");

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setDropdownData((prevData) => ({
      ...prevData,
      [name]: value, // Update the corresponding field in the state
    }));
  };

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

  const handleShowWinners = () => {
    setShowWinners(!showWinners);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Combine dropdownData and inputData into a single object
    const combinedData = {
      ...dropdownData,
      ...inputData,
    };

    // Assuming ticketGridData is an array and you want to add the new combined data to it
    setTicketGridData((prevData) => [...prevData, combinedData]);

    // Close the popup
    setPopupOpen(false);
  };

  const handleEditTicketPrize = (item) => {
    // Initialize dropdown data with item values or default values
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

  // Open delete confirmation popup
  const handleDeleteClick = (props) => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  };

  // Close delete popup
  const handleCancelDelete = () => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  };

  // Function to download PDF (only for desktop view)
  const handleDownloadPDF = () => {};

  return (
    <div className="p-5">
      <PageHeader
        title="Winning"
        buttonTitle="+ Add Winning"
        add={handleOpenPopup}
      />

      <div className="p-4 mt-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
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
                      onClick={handleShowWinners}
                    >
                      Email
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
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold">
                {update ? "Update Tickets Prizes" : "Add Tickets Prizes"}
              </h2>
              <IoMdClose
                onClick={handleOpenPopup}
                className="cursor-pointer text-xl"
              />
            </div>

            <div className="p-4 space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={dropdownData.date}
                    onChange={handleDropdownChange}
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Session
                  </label>
                  <select
                    name="session"
                    value={dropdownData.session}
                    onChange={handleDropdownChange}
                    className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
                  >
                    <option value="MOR">MOR</option>
                    <option value="DAY">DAY</option>
                    <option value="EVE">EVE</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Day</label>
                  <select
                    name="lottery"
                    value={dropdownData.day}
                    onChange={handleDropdownChange}
                    className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
                  >
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">1st Prize </h3>
              <div className="grid grid-cols-5 gap-4">
                <input
                  type="number"
                  name="firstPrize"
                  placeholder="1st Prize"
                  value={inputData?.firstPrize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
              </div>

              <h3 className="text-xl font-bold mb-4">2nd Prizes</h3>
              <div className="grid grid-cols-5 gap-4">
                {tenInputs.map((num) => (
                  <input
                    key={num}
                    type="number"
                    name={`secondPrize${num}`}
                    placeholder={`${num}`}
                    onChange={handleInputChange}
                    value={inputData[`secondPrize${num}`] || ""}
                    className={
                      "w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    }
                  />
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">3rd Prizes</h3>
              <div className="grid grid-cols-5 gap-4">
                {tenInputs.map((num) => (
                  <input
                    key={num}
                    type="number"
                    name={`thirdPrize${num}`}
                    placeholder={`${num}`}
                    onChange={handleInputChange}
                    value={inputData[`thirdPrize${num}`] || ""}
                    className={
                      "w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    }
                  />
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">4th Prizes</h3>
              <div className="grid grid-cols-5 gap-4">
                {tenInputs.map((num) => (
                  <input
                    key={num}
                    type="number"
                    name={`fourthPrize${num}`}
                    placeholder={`${num}`}
                    onChange={handleInputChange}
                    value={inputData[`fourthPrize${num}`] || ""}
                    className={
                      "w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    }
                  />
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">5th Prizes</h3>
              <div className="grid grid-cols-5 gap-4">
                {hundredInputs.map((num) => (
                  <input
                    key={num}
                    type="number"
                    name={`fifthPrize${num}`}
                    placeholder={`${num}`}
                    onChange={handleInputChange}
                    value={inputData[`fifthPrize${num}`] || ""}
                    className={
                      "w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
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
          <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            {/* Close and Download Buttons */}
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

            {/* Header */}
            <div className="bg-gray-50 text-center p-8 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">LMS STATE LOTTERIES</h1>
              <div className="text-xl font-extrabold mt-4">
                <p>
                  {dropdownData.session} RESULT {dropdownData.date}
                </p>
                <p className="bg-amber-300 max-w-32 mx-auto mt-2 rounded">
                  11:55 AM
                </p>
              </div>
            </div>

            {/* Prize Data */}
            <div className="text-center p-6">
              {prizeData.map((prize, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-bold">{prize.prize}</h3>

                  {/* Conditional rendering for single number or grid of numbers */}
                  {prize.numbers.length === 1 ? (
                    <div className="mt-4 flex justify-center">
                      <span className="text-sm p-2 bg-gray-100 rounded">
                        {prize.numbers[0]}
                      </span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-10 gap-2 mt-4">
                      {prize.numbers.map((number, numberIndex) => (
                        <span
                          key={numberIndex}
                          className="text-sm p-1 bg-gray-100 rounded"
                        >
                          {number}
                        </span>
                      ))}
                    </div>
                  )}
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
