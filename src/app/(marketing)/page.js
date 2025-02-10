"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Table from "@/components/tables/Table";
import Modal from "@/components/modal/Modal";
import DeletePopup from "@/components/forms/DeletePopup";
import masterData from "@/jsonData/masterData.json";
import { FaTicketAlt, FaUser } from "react-icons/fa";

const tabData = [
  { title: "Distributer", icon: FaUser },
  { title: "Tickets", icon: FaTicketAlt },
];

export default function Home() {
  const [tabName, setTabName] = useState("Distributer"); // Default tab
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
        username: "rahit123",
        phone: "9933111222",
        address: "Murshidabad",
        status: "Active",
      },
      {
        id: 2,
        name: "Suman Roy",
        companyName: "Lottery Agency",
        username: "suman123",
        phone: "9932323232",
        address: "Dhuliyan",
        status: "Active",
      },
    ]);
    setTicketData([
      {
        id: 1,
        ticketName: "DEAR",
        status: "Active",
      },
      {
        id: 2,
        ticketName: "NAGALAND",
        status: "Active",
      },
    ]);
  }, []);

  const handleTabChange = (tab) => setTabName(tab);

  const handleAddPopup = (type) => {
    if (type === "Distributer") {
      setDistributerPopup(!distributerPopup);
      if (!distributerPopup) {
        resetDistributorForm();
      }
    } else if (type === "Tickets") {
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

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "Distributer") {
      setDistributorForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (formType === "Tickets") {
      setTicketForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmitForm = (e, type) => {
    e.preventDefault();
    if (type === "Distributer") {
      if (validateDistributorForm()) {
        if (editingDistributorId) {
          updateDistributor();
        } else {
          addDistributor();
        }
        setDistributerPopup(false);
      }
    } else if (type === "Tickets") {
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
    if (type === "Distributer") {
      const distributorToEdit = distributorData.find((item) => item.id === id);
      if (distributorToEdit) {
        setDistributorForm(distributorToEdit);
        setEditingDistributorId(id);
        setDistributerPopup(true);
      }
    } else if (type === "Tickets") {
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
    if (deletingItemType === "Distributer") {
      setDistributorData((prevData) =>
        prevData.filter((item) => item.id !== deletingItemId)
      );
    } else if (deletingItemType === "Tickets") {
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
      <div className="px-4 py-5">
        <ul className="flex border-b">
          {tabData.map(({ title, icon: Icon }) => (
            <li
              key={title}
              className={`w-32 px-4 py-3 ml-1 inline-flex items-center text-black text-sm rounded ${
                tabName === title
                  ? "text-white bg-blue-500"
                  : "bg-gray-300 hover:text-gray-600 hover:border-gray-300"
              }`}
              onClick={() => handleTabChange(title)}
            >
              <div className="flex items-center justify-center">
                <Icon
                  className={`w-4 h-4 me-2 ${
                    tabName === title
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                <span>{title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5">
        {tabName === "Distributer" && (
          <>
            <PageHeader
              title="Distributors"
              btnText="+ Add"
              onAdd={() => handleAddPopup("Distributer")}
            />

            <Table
              headers={masterData.tableHeader.distributor}
              data={distributorData}
              onEdit={(id) => handleEdit(id, "Distributer")}
              onDelete={(id) => handleDelete(id, "Distributer")}
            />

            <Modal
              title="Add Distributor"
              isOpen={distributerPopup}
              onClose={() => handleAddPopup("Distributer")}
              width="max-w-4xl"
            >
              <form onSubmit={(e) => handleSubmitForm(e, "Distributer")}>
                <p className="mb-4 text-xs text-rose-400">
                  The fields marked with * are mandatory.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
                  <div>
                    <label className="mb-2 text-xs font-semibold">Name *</label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      value={distributorForm.name}
                      onChange={(e) => handleInputChange(e, "Distributer")}
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
                      onChange={(e) => handleInputChange(e, "Distributer")}
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
                      onChange={(e) => handleInputChange(e, "Distributer")}
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
                      onChange={(e) => handleInputChange(e, "Distributer")}
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
                      onChange={(e) => handleInputChange(e, "Distributer")}
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
                      onChange={(e) => handleInputChange(e, "Distributer")}
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
                    onClick={() => handleAddPopup("Distributer")}
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
              onCancel={cancelDelete}
              onConfirm={confirmDelete}
            />
          </>
        )}

        {tabName === "Tickets" && (
          <>
            <PageHeader
              title="Tickets"
              btnText="+ Add"
              onAdd={() => handleAddPopup("Tickets")}
            />

            <Table
              headers={masterData.tableHeader.ticket}
              data={ticketData}
              onEdit={(id) => handleEdit(id, "Tickets")}
              onDelete={(id) => handleDelete(id, "Tickets")}
            />

            <Modal
              title="Add Ticket"
              isOpen={ticketPopup}
              onClose={() => handleAddPopup("Tickets")}
              width="max-w-2xl"
            >
              <form onSubmit={(e) => handleSubmitForm(e, "Tickets")}>
                <p className="mb-4 text-xs text-rose-400">
                  The fields marked with * are mandatory.
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
                      onChange={(e) => handleInputChange(e, "Tickets")}
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
                      onChange={(e) => handleInputChange(e, "Tickets")}
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
                    onClick={() => handleAddPopup("Tickets")}
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
              onCancel={cancelDelete}
              onConfirm={confirmDelete}
            />
          </>
        )}
      </div>
    </>
  );
}
