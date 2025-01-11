"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Table from "@/components/Table";
import tableHeaders from "@/data/tableHeaders.json";
import Modal from "@/components/Modal"; // import the Modal component
import { FaTicketAlt, FaUser } from "react-icons/fa"; //react-icons

const tabData = [
  { title: "distributer", icon: FaUser },
  { title: "tickets", icon: FaTicketAlt },
];

export default function Home() {
  const [tabName, setTabName] = useState("distributer"); // Default tab
  const [distributerPopup, setDistributerPopup] = useState(false); // add distributer popup
  const [distributorData, setDistributorData] = useState([]);
  const [ticketPopup, setTicketPopup] = useState(false); // add ticket popup
  const [ticketData, setTicketData] = useState([]);
  const [password, setPassWord] = useState("");

  const [distributorForm, setDistributorForm] = useState({
    name: "",
    companyName: "",
    username: "",
    phone: "",
    address: "",
    session: "",
  });

  const [ticketForm, setTicketForm] = useState({
    ticketName: "",
  });

  const [editingDistributorId, setEditingDistributorId] = useState(null); // Track the distributor being edited
  const [editingTicketId, setEditingTicketId] = useState(null); // Track the ticket being edited

  const handleTabChange = (tab) => {
    setTabName(tab);
  };

  const handleDistributerPopup = () => {
    setDistributerPopup(!distributerPopup);
    if (!distributerPopup) {
      // Reset form and editing state when opening the modal for new entries
      setDistributorForm({
        name: "",
        companyName: "",
        username: "",
        phone: "",
        address: "",
        session: "",
      });
      setPassWord("");
      setEditingDistributorId(null); // Clear the editing ID
    }
  };

  const handleTicketPopup = () => {
    setTicketPopup(!ticketPopup);
    if (!ticketPopup) {
      // Reset form and editing state when opening the modal for new tickets
      setTicketForm({
        ticketName: "",
      });
      setEditingTicketId(null); // Clear the editing ID
    }
  };

  // Handle form input change for distributor
  const handleDistributorInputChange = (e) => {
    const { name, value } = e.target;
    setDistributorForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form input change for ticket
  const handleTicketInputChange = (e) => {
    const { name, value } = e.target;
    setTicketForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle distributor form submission
  const handleSubmitDistributer = (e) => {
    e.preventDefault();

    if (
      !distributorForm.name ||
      !distributorForm.companyName ||
      !distributorForm.phone ||
      !distributorForm.address ||
      !distributorForm.session ||
      !distributorForm.username ||
      !password
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (editingDistributorId) {
      // Update the existing distributor
      setDistributorData((prevData) =>
        prevData.map((item) =>
          item.id === editingDistributorId
            ? { ...item, ...distributorForm } // Update the item with the form data
            : item
        )
      );
    } else {
      // Add a new distributor if no item is being edited
      setDistributorData((prevData) => [
        ...prevData,
        { ...distributorForm, id: new Date().getTime() }, // Use timestamp as unique ID
      ]);
    }

    setDistributerPopup(false);
    setDistributorForm({
      name: "",
      companyName: "",
      username: "",
      phone: "",
      address: "",
      session: "",
    });
    setPassWord("");
    setEditingDistributorId(null); // Reset editing ID after submission
  };

  // Handle ticket form submission
  const handleSubmitTicket = (e) => {
    e.preventDefault();

    if (!ticketForm.ticketName) {
      alert("Please enter a ticket name.");
      return;
    }

    if (editingTicketId) {
      // Update the existing ticket
      setTicketData((prevData) =>
        prevData.map((item) =>
          item.id === editingTicketId
            ? { ...item, ...ticketForm } // Update the item with the form data
            : item
        )
      );
    } else {
      // Add a new ticket if no item is being edited
      setTicketData((prevData) => [
        ...prevData,
        { ...ticketForm, id: new Date().getTime() }, // Use timestamp as unique ID
      ]);
    }

    setTicketPopup(false);
    setTicketForm({
      ticketName: "",
    });
    setEditingTicketId(null); // Reset editing ID after submission
  };

  // Handle edit distributor
  const handleEditDistributer = (id) => {
    const distributorToEdit = distributorData.find((item) => item.id === id);
    if (distributorToEdit) {
      setDistributorForm({
        name: distributorToEdit.name,
        companyName: distributorToEdit.companyName,
        username: distributorToEdit.username,
        phone: distributorToEdit.phone,
        address: distributorToEdit.address,
        session: distributorToEdit.session,
      });
      setPassWord(""); // Password will remain blank to be re-entered
      setEditingDistributorId(id); // Store the id of the item being edited
      setDistributerPopup(true); // Open modal
    }
  };

  // Handle edit ticket
  const handleEditTicket = (id) => {
    const ticketToEdit = ticketData.find((item) => item.id === id);
    if (ticketToEdit) {
      setTicketForm({
        ticketName: ticketToEdit.ticketName,
      });
      setEditingTicketId(id); // Store the id of the item being edited
      setTicketPopup(true); // Open modal
    }
  };

  // Handle delete distributor
  const handleDeleteDistributer = (id) => {
    setDistributorData((prevData) => prevData.filter((item) => item.id !== id));
  };

  // Handle delete ticket
  const handleDeleteTicket = (id) => {
    setTicketData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-gray-500 dark:text-gray-400">
          {tabData.map(({ title, icon: Icon }) => (
            <li
              key={title}
              className={`me-2 cursor-pointer p-4 flex items-center ${
                tabName === title
                  ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                  : "hover:text-gray-600 hover:border-gray-300"
              }`}
              onClick={() => handleTabChange(title)}
            >
              <Icon
                className={`w-5 h-5 me-2 ${
                  tabName === title
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }`}
              />
              <span>{title.toUpperCase()}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5">
        {tabName === "distributer" && (
          <>
            <PageHeader
              title="Distributer Report"
              buttonTitle="+ Add Distributer"
              add={handleDistributerPopup}
            />

            <Table
              headers={tableHeaders.distributor}
              data={distributorData}
              onEdit={handleEditDistributer}
              onDelete={handleDeleteDistributer}
            />

            <Modal
              title="Add Distributor"
              isOpen={distributerPopup}
              onClose={handleDistributerPopup}
            >
              <form onSubmit={handleSubmitDistributer}>
                <p className="mb-4 text-xs text-rose-400">
                  The field labels marked with * are required input fields.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
                  <div>
                    <label className="mb-2 text-xs font-semibold">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={distributorForm.name}
                      onChange={handleDistributorInputChange}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={distributorForm.companyName}
                      onChange={handleDistributorInputChange}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Phone No.
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={distributorForm.phone}
                      onChange={handleDistributorInputChange}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={distributorForm.address}
                      onChange={handleDistributorInputChange}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Session
                    </label>
                    <input
                      type="text"
                      name="session"
                      value={distributorForm.session}
                      onChange={handleDistributorInputChange}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <p className="text-cyan-500 text-sm font-semibold mt-6 mb-3">
                  Create the dealer credentials :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={distributorForm.username}
                      onChange={handleDistributorInputChange}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Password
                    </label>
                    <input
                      type="text"
                      name="password"
                      value={password}
                      onChange={(e) => setPassWord(e.target.value)}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="flex justify-end bg-gray-100 p-3 rounded-b-lg space-x-2">
                  <button
                    onClick={handleDistributerPopup}
                    className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
          </>
        )}

        {tabName === "tickets" && (
          <>
            <PageHeader
              title="Tickets Report"
              buttonTitle="+ Add Tickets"
              add={handleTicketPopup}
            />

            <Table
              headers={tableHeaders.ticket}
              data={ticketData}
              onEdit={handleEditTicket}
              onDelete={handleDeleteTicket}
            />

            <Modal
              title="Add Ticket"
              isOpen={ticketPopup}
              onClose={handleTicketPopup}
            >
              <form onSubmit={handleSubmitTicket}>
                <p className="mb-4 text-xs text-rose-400">
                  The field labels marked with * are required input fields.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Ticket Name
                    </label>
                    <input
                      type="text"
                      name="ticketName"
                      value={ticketForm.ticketName}
                      onChange={handleTicketInputChange}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="flex justify-end bg-gray-100 p-3 rounded-b-lg space-x-2">
                  <button
                    onClick={handleTicketPopup}
                    className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
          </>
        )}
      </div>
    </>
  );
}
