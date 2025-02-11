"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Table from "@/components/tables/Table";
import Modal from "@/components/modal/Modal";
import DeletePopup from "@/components/forms/DeletePopup";
import masterData from "@/jsonData/masterData.json";
import {
  FaRegClipboard,
  FaTruck,
  FaWarehouse,
  FaStore,
  FaUsers,
} from "react-icons/fa";

const tabData = [
  {
    title: "Schemes",
    icon: FaRegClipboard, // Represents planning or documentation for schemes
    tabIndex: 0,
    tableHeader: masterData.tableHeader.scheme,
  },
  {
    title: "Super Stockist",
    icon: FaTruck, // Represents distribution and delivery
    tabIndex: 1,
    tableHeader: masterData.tableHeader.superStockist,
  },
  {
    title: "Stockist",
    icon: FaWarehouse, // Represents stock storage or inventory
    tabIndex: 2,
    tableHeader: masterData.tableHeader.stockist,
  },
  {
    title: "Retailer",
    icon: FaStore, // Represents retail business or stores
    tabIndex: 3,
    tableHeader: masterData.tableHeader.retailer,
  },
  {
    title: "Users",
    icon: FaUsers, // Represents a group of users/accounts
    tabIndex: 4,
    tableHeader: masterData.tableHeader.users,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const [schemePopup, setSchemePopup] = useState(false);
  const [stockistPopup, setStockistPopup] = useState(null);

  const [tableHeader, setTableHeader] = useState(tabData[0].tableHeader);
  const [tableData, setTableData] = useState([]);

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState(null);
  const [deletingItemType, setDeletingItemType] = useState("");

  const [editScheme, setEditScheme] = useState(null);
  const [schemeFormData, setSchemeFormData] = useState("");
  const [ticketData, setTicketData] = useState([]);

  const [editStockist, setEditStockist] = useState(null);
  const [stockistFormData, setStockistFormData] = useState([]);
  const [distributorData, setDistributorData] = useState([]);

  useEffect(() => {
    setTableHeader(
      tabData.find((tab) => tab.tabIndex === activeTab)?.tableHeader ||
        tabData[0].tableHeader
    );
  }, [activeTab]);

  const activeTabHeader = tabData.find((tab) => tab.tabIndex === activeTab);
  if (!activeTabHeader) return null;

  const handleAddPopup = (tabIndex) => {
    if (tabIndex === 0) {
      setSchemePopup(!schemePopup);
    } else {
      setStockistPopup(!stockistPopup);
    }
  };

  const handleEdit = (id, tabIndex) => {
    if (tabIndex === 0) {
      const schemeToEdit = ticketData.find((item) => item.id === id);
      if (schemeToEdit) {
        setSchemeFormData(schemeToEdit);
        setEditScheme(id);
        setSchemePopup(true);
      }
    } else {
      const distributorToEdit = distributorData.find((item) => item.id === id);
      if (distributorToEdit) {
        setStockistFormData(distributorToEdit);
        setEditStockist(id);
        setStockistPopup(true);
      }
    }
  };

  const handleDelete = (id, tabIndex) => {
    setDeletingItemId(id);
    setDeletingItemType(type);
    setShowDeletePopup(true);
  };

  const handleSchemeInputChange = (e) => {
    setSchemeFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitSchemeForm = (e) => {
    e.preventDefault();

    if (schemeFormData.schemeName && schemeFormData.status) {
      if (editScheme) {
        updateScheme();
      } else {
        addSchemes();
      }
      setSchemePopup(false);
    } else {
      alert("Please enter a scheme name.");
    }
  };

  const addSchemes = () => {
    setSchemeFormData((prevData) => [
      ...prevData,
      { ...schemeFormData, id: new Date().getTime() }, // Use timestamp as unique ID
    ]);
  };

  const updateScheme = () => {
    setTicketData((prevData) =>
      prevData.map((item) =>
        item.id === editScheme ? { ...item, ...schemeFormData } : item
      )
    );
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
        <div className="flex border-b">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 text-sm ${
                activeTab === index
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex items-center justify-center">
                <tab.icon className="text-sm mr-2" />
                {tab.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="px-5">
        <PageHeader
          title={activeTabHeader.title}
          btnText="+ Add"
          onAdd={() => handleAddPopup(activeTabHeader.tabIndex)}
        />

        <Table
          headers={tableHeader}
          data={schemeFormData}
          onEdit={(id) => handleEdit(id, activeTabHeader.tabIndex)}
          onDelete={(id) => handleDelete(id, activeTabHeader.tabIndex)}
        />

        {activeTab === 0 && (
          <Modal
            title="Add Scheme"
            isOpen={schemePopup}
            onClose={() => handleAddPopup(activeTabHeader.tabIndex)}
            width="max-w-2xl"
          >
            <form onSubmit={handleSubmitSchemeForm}>
              <p className="mb-4 text-xs text-rose-400">
                The fields marked with * are mandatory.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-2">
                <div>
                  <label className="mb-2 text-xs font-semibold">
                    Scheme Name *
                  </label>
                  <input
                    type="text"
                    name="schemeName"
                    autoComplete="off"
                    value={schemeFormData.schemeName}
                    onChange={handleSchemeInputChange}
                    className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="mb-2 text-xs font-semibold">Status *</label>
                  <select
                    name="status"
                    value={schemeFormData.status}
                    onChange={handleSchemeInputChange}
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
                  onClick={() => handleAddPopup(activeTabHeader.tabIndex)}
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
        )}

        <DeletePopup
          isOpen={showDeletePopup}
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        />
      </div>
    </>
  );
}
