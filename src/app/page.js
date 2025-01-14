"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import Table from "@/components/Table";
import Modal from "@/components/Modal";
import DeletePopup from "@/components/DeletePopup";
import masterData from "@/data/masterData.json";
import { FaTicketAlt, FaUser } from "react-icons/fa";

const tabData = [
  { title: "distributer", icon: FaUser },
  { title: "tickets", icon: FaTicketAlt },
];

export default function Home() {
  const [tabName, setTabName] = useState("distributer"); // Default tab
  const [distributerPopup, setDistributerPopup] = useState(false); // add distributer popup
  const [ticketPopup, setTicketPopup] = useState(false); // add ticket popup
  const [password, setPassWord] = useState("");
  const [distributorData, setDistributorData] = useState([]);
  const [ticketData, setTicketData] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false); // State for showing the delete confirmation popup
  const [deletingItemId, setDeletingItemId] = useState(null); // ID of the distributor or ticket being deleted
  const [deletingItemType, setDeletingItemType] = useState(""); // Type of item ("distributer" or "ticket")
  const [editingDistributorId, setEditingDistributorId] = useState(null); // Track the distributor being edited
  const [editingTicketId, setEditingTicketId] = useState(null); // Track the ticket being edited
  const [distributorForm, setDistributorForm] = useState("");
  const [ticketForm, setTicketForm] = useState("");

  useEffect(() => {
    setDistributorData([
      {
        id: 1,
        name: "Rahit Das",
        companyName: "Lottery Company",
        username: "sumit123",
        phone: "9933111222",
        address: "Murshidabad",
        status: "Active",
      },
    ]);
    setTicketData([
      {
        id: 1,
        ticketName: "DEAR",
        status: "Active",
      },
    ]);
  }, []);

  const handleTabChange = (tab) => setTabName(tab);

  const handlePopup = (type) => {
    if (type === "distributer") {
      setDistributerPopup(!distributerPopup);
      if (!distributerPopup) {
        resetDistributorForm();
      }
    } else if (type === "ticket") {
      setTicketPopup(!ticketPopup);
      if (!ticketPopup) {
        resetTicketForm();
      }
    }
  };

  const resetDistributorForm = () => {
    setDistributorForm({
      name: "",
      companyName: "",
      username: "",
      phone: "",
      address: "",
      session: "",
      status: "",
    });
    setPassWord("");
    setEditingDistributorId(null);
  };

  const resetTicketForm = () => {
    setTicketForm({
      ticketName: "",
      status: "",
    });
    setEditingTicketId(null);
  };

  // Handle form input change for distributor
  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "distributer") {
      setDistributorForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (formType === "ticket") {
      setTicketForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission for distributor
  const handleSubmitForm = (e, type) => {
    e.preventDefault();
    if (type === "distributer") {
      if (validateDistributorForm()) {
        if (editingDistributorId) {
          updateDistributor();
        } else {
          addDistributor();
        }
        setDistributerPopup(false);
      }
    } else if (type === "ticket") {
      if (ticketForm.ticketName && ticketForm.status) {
        if (editingTicketId) {
          updateTicket();
        } else {
          addTicket();
        }
        setTicketPopup(false);
      } else {
        alert("Please enter a ticket name.");
      }
    }
  };

  const validateDistributorForm = () => {
    if (
      !distributorForm.name ||
      !distributorForm.companyName ||
      !distributorForm.phone ||
      !distributorForm.address ||
      !distributorForm.username ||
      !distributorForm.status ||
      (!editingDistributorId && !password)
    ) {
      alert("Please fill in all fields.");
      return false;
    }
    return true;
  };

  const addDistributor = () => {
    setDistributorData((prevData) => [
      ...prevData,
      { ...distributorForm, id: new Date().getTime() }, // Use timestamp as unique ID
    ]);
  };

  const updateDistributor = () => {
    setDistributorData((prevData) =>
      prevData.map((item) =>
        item.id === editingDistributorId
          ? { ...item, ...distributorForm }
          : item
      )
    );
  };

  const addTicket = () => {
    setTicketData((prevData) => [
      ...prevData,
      { ...ticketForm, id: new Date().getTime() }, // Use timestamp as unique ID
    ]);
  };

  const updateTicket = () => {
    setTicketData((prevData) =>
      prevData.map((item) =>
        item.id === editingTicketId ? { ...item, ...ticketForm } : item
      )
    );
  };

  const handleEdit = (id, type) => {
    if (type === "distributer") {
      const distributorToEdit = distributorData.find((item) => item.id === id);
      if (distributorToEdit) {
        setDistributorForm(distributorToEdit);
        setEditingDistributorId(id);
        setDistributerPopup(true);
      }
    } else if (type === "ticket") {
      const ticketToEdit = ticketData.find((item) => item.id === id);
      if (ticketToEdit) {
        setTicketForm(ticketToEdit);
        setEditingTicketId(id);
        setTicketPopup(true);
      }
    }
  };

  const handleDelete = (id, type) => {
    setDeletingItemId(id);
    setDeletingItemType(type);
    setShowDeletePopup(true);
  };

  const confirmDelete = () => {
    if (deletingItemType === "distributer") {
      setDistributorData((prevData) =>
        prevData.filter((item) => item.id !== deletingItemId)
      );
    } else if (deletingItemType === "ticket") {
      setTicketData((prevData) =>
        prevData.filter((item) => item.id !== deletingItemId)
      );
    }
    setShowDeletePopup(false);
    resetDeleteState();
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
    resetDeleteState();
  };

  const resetDeleteState = () => {
    setDeletingItemId(null);
    setDeletingItemType("");
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
              add={() => handlePopup("distributer")}
            />

            <Table
              headers={masterData.tableHeader.distributor}
              data={distributorData}
              onEdit={(id) => handleEdit(id, "distributer")}
              onDelete={(id) => handleDelete(id, "distributer")}
            />

            <Modal
              title="Add Distributor"
              isOpen={distributerPopup}
              onClose={() => handlePopup("distributer")}
              width="max-w-4xl"
            >
              <form onSubmit={(e) => handleSubmitForm(e, "distributer")}>
                <p className="mb-4 text-xs text-rose-400">
                  The field labels marked with * are required input fields.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
                  <div>
                    <label className="mb-2 text-xs font-semibold">Name *</label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      value={distributorForm.name}
                      onChange={(e) => handleInputChange(e, "distributer")}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      autoComplete="off"
                      value={distributorForm.companyName}
                      onChange={(e) => handleInputChange(e, "distributer")}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Phone No. *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      autoComplete="off"
                      value={distributorForm.phone}
                      onChange={(e) => handleInputChange(e, "distributer")}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      autoComplete="off"
                      value={distributorForm.address}
                      onChange={(e) => handleInputChange(e, "distributer")}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Status *
                    </label>
                    <select
                      name="status"
                      value={distributorForm.status}
                      onChange={(e) => handleInputChange(e, "distributer")}
                      className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
                    >
                      <option value="">---</option>
                      {masterData.masterDropdown.status.map((status, index) => (
                        <option key={index} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <p className="text-cyan-500 text-sm font-semibold mt-6 mb-3">
                  Create the dealer credentials:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Username *
                    </label>
                    <input
                      type="text"
                      name="username"
                      autoComplete="off"
                      value={distributorForm.username}
                      onChange={(e) => handleInputChange(e, "distributer")}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Password *
                    </label>
                    <input
                      type="text"
                      name="password"
                      value={password}
                      autoComplete="off"
                      onChange={(e) => setPassWord(e.target.value)}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="flex justify-end bg-gray-100 p-3 rounded-b-lg space-x-2">
                  <button
                    onClick={() => handlePopup("distributer")}
                    className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </Modal>

            <DeletePopup
              isOpen={showDeletePopup}
              cancel={cancelDelete}
              confirm={confirmDelete}
            />
          </>
        )}

        {tabName === "tickets" && (
          <>
            <PageHeader
              title="Tickets Report"
              buttonTitle="+ Add Tickets"
              add={() => handlePopup("ticket")}
            />

            <Table
              headers={masterData.tableHeader.ticket}
              data={ticketData}
              onEdit={(id) => handleEdit(id, "ticket")}
              onDelete={(id) => handleDelete(id, "ticket")}
            />

            <Modal
              title="Add Ticket"
              isOpen={ticketPopup}
              onClose={() => handlePopup("ticket")}
              width="max-w-2xl"
            >
              <form onSubmit={(e) => handleSubmitForm(e, "ticket")}>
                <p className="mb-4 text-xs text-rose-400">
                  The field labels marked with * are required input fields.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Ticket Name *
                    </label>
                    <input
                      type="text"
                      name="ticketName"
                      autoComplete="off"
                      value={ticketForm.ticketName}
                      onChange={(e) => handleInputChange(e, "ticket")}
                      className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-xs font-semibold">
                      Status *
                    </label>
                    <select
                      name="status"
                      value={ticketForm.status}
                      onChange={(e) => handleInputChange(e, "ticket")}
                      className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700"
                    >
                      <option value="">---</option>
                      {masterData.masterDropdown.status.map((status, index) => (
                        <option key={index} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-end bg-gray-100 p-3 rounded-b-lg space-x-2">
                  <button
                    onClick={() => handlePopup("ticket")}
                    className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </Modal>

            <DeletePopup
              isOpen={showDeletePopup}
              cancel={cancelDelete}
              confirm={confirmDelete}
            />
          </>
        )}
      </div>
    </>
  );
}
