"use client";

import { useState } from "react";
import AddButton from "@/components/layout/AddButton";
import Table from "@/components/tables/Table";
import CreateSchemeModal from "@/components/forms/CreateSchemeModal";
import CreateStockistModal from "@/components/forms/CreateStockistModal";
import DeletePopup from "@/components/modal/DeletePopup";
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
    icon: FaRegClipboard,
    tabId: 0,
    header: masterData?.tableHeader?.scheme,
  },
  {
    title: "Super Stockist",
    icon: FaTruck,
    tabId: 1,
    header: masterData?.tableHeader?.superStockist,
  },
  {
    title: "Stockist",
    icon: FaWarehouse,
    tabId: 2,
    header: masterData?.tableHeader?.stockist,
  },
  {
    title: "Retailer",
    icon: FaStore,
    tabId: 3,
    header: masterData?.tableHeader?.retailer,
  },
  {
    title: "Users",
    icon: FaUsers,
    tabId: 4,
    header: masterData?.tableHeader?.users,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [addPopupOpen, setAddPopupOpen] = useState(false);

  const [schemeList, setSchemeList] = useState([]);
  const [superStockistList, setSuperStockistList] = useState([]);
  const [stockistList, setStockistList] = useState([]);
  const [retailerList, setRetailerList] = useState([]);
  const [usersList, setUsersList] = useState([]);

  const [editScheme, setEditScheme] = useState(null);
  const [editUsers, setEditUsers] = useState(null);

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deletingItem, setDeletingItem] = useState(null);

  const superStockistUsernames = superStockistList
    .flat()
    .map((stockist) => stockist.username);
  const stockistUsernames = stockistList
    .flat()
    .map((stockist) => stockist.username);

  const activeTabHeader = tabData.find((tab) => tab.tabId === activeTab);
  if (!activeTabHeader) return null;

  const handleAddPopup = () => {
    setAddPopupOpen(!addPopupOpen);
    setEditScheme(null);
    setEditUsers(null);
  };

  const handleEdit = (id) => {
    if (activeTab === 0) {
      const itemToEdit = schemeList.find((item) => item.id === id);
      setEditScheme(itemToEdit);
    } else if (activeTab === 1) {
      const itemToEdit = superStockistList.find((item) => item.id === id);
      setEditUsers(itemToEdit);
    } else if (activeTab === 2) {
      const itemToEdit = stockistList.find((item) => item.id === id);
      setEditUsers(itemToEdit);
    } else if (activeTab === 3) {
      const itemToEdit = retailerList.find((item) => item.id === id);
      setEditUsers(itemToEdit);
    } else {
      const itemToEdit = usersList.find((item) => item.id === id);
      setEditUsers(itemToEdit);
    }

    setAddPopupOpen(true);
  };

  const handleDelete = (id) => {
    setDeletingItem(id);
    setShowDeletePopup(true);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  const handleConfirmDelete = () => {
    if (activeTab === 0) {
      setSchemeList((prevData) =>
        prevData.filter((item) => item.id !== deletingItem)
      );
    } else if (activeTab === 1) {
      setSuperStockistList((prevData) =>
        prevData.filter((item) => item.id !== deletingItem)
      );
    } else if (activeTab === 2) {
      setStockistList((prevData) =>
        prevData.filter((item) => item.id !== deletingItem)
      );
    } else if (activeTab === 3) {
      setRetailerList((prevData) =>
        prevData.filter((item) => item.id !== deletingItem)
      );
    } else {
      setUsersList((prevData) =>
        prevData.filter((item) => item.id !== deletingItem)
      );
    }

    setShowDeletePopup(false);
  };

  const generateRefId = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const timeString = now.getTime().toString().slice(-6);
    return `I${month}${day}${timeString}`;
  };

  const handleCreateScheme = (newSchemeData) => {
    if (editScheme) {
      setSchemeList((prevData) =>
        prevData.map((item) =>
          item.id === editScheme.id ? { ...item, ...newSchemeData } : item
        )
      );
    } else {
      setSchemeList((prevData) => [
        ...prevData,
        { ...newSchemeData, id: generateRefId() },
      ]);
    }
    setAddPopupOpen(false);
    setEditScheme(null);
  };

  const handleCreateUsers = (newUsersData) => {
    if (editUsers) {
      if (activeTab === 1) {
        setSuperStockistList((prevData) =>
          prevData.map((item) =>
            item.id === editUsers.id ? { ...item, ...newUsersData } : item
          )
        );
      } else if (activeTab === 2) {
        setStockistList((prevData) =>
          prevData.map((item) =>
            item.id === editUsers.id ? { ...item, ...newUsersData } : item
          )
        );
      } else if (activeTab === 3) {
        setRetailerList((prevData) =>
          prevData.map((item) =>
            item.id === editUsers.id ? { ...item, ...newUsersData } : item
          )
        );
      } else if (activeTab === 4) {
        setUsersList((prevData) =>
          prevData.map((item) =>
            item.id === editUsers.id ? { ...item, ...newUsersData } : item
          )
        );
      }
    } else {
      if (activeTab === 1) {
        setSuperStockistList((prevData) => [
          ...prevData,
          { ...newUsersData, id: generateRefId() },
        ]);
      } else if (activeTab === 2) {
        setStockistList((prevData) => [
          ...prevData,
          { ...newUsersData, id: generateRefId() },
        ]);
      } else if (activeTab === 3) {
        setRetailerList((prevData) => [
          ...prevData,
          { ...newUsersData, id: generateRefId() },
        ]);
      } else if (activeTab === 4) {
        setUsersList((prevData) => [
          ...prevData,
          { ...newUsersData, id: generateRefId() },
        ]);
      }
    }

    // Reset the form and states
    setAddPopupOpen(false);
    setEditUsers(null);
  };

  return (
    <>
      <div className="p-5">
        <div className="flex flex-wrap border-b">
          {tabData.map((tab) => (
            <button
              key={tab.tabId}
              className={`py-2 px-4 text-sm flex-shrink-0 mb-2 mr-2 rounded-t-lg transition-colors duration-200 ${
                activeTab === tab.tabId
                  ? "border-b-2 border-blue-500 text-blue-500 bg-blue-50"
                  : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab.tabId)}
            >
              <div className="flex items-center justify-center whitespace-nowrap">
                <tab.icon className="text-sm mr-2" />
                {tab.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="px-5">
        <AddButton onAdd={handleAddPopup} />

        {activeTabHeader && (
          <Table
            headers={activeTabHeader.header}
            data={
              activeTab === 0
                ? schemeList
                : activeTab === 1
                ? superStockistList
                : activeTab === 2
                ? stockistList
                : activeTab === 3
                ? retailerList
                : usersList
            }
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {activeTab === 0 ? (
          <CreateSchemeModal
            isOpen={addPopupOpen}
            width="max-w-2xl"
            title={editScheme ? "Update Scheme" : "Add Scheme"}
            btnText={editScheme ? "Update Changes" : "Save Changes"}
            onClose={handleAddPopup}
            onCreate={handleCreateScheme}
            initialValues={editScheme}
          />
        ) : (
          <CreateStockistModal
            isOpen={addPopupOpen}
            width="max-w-4xl"
            title={editUsers ? "Update Users" : "Add Users"}
            btnText={editUsers ? "Update Changes" : "Save Changes"}
            onClose={handleAddPopup}
            onCreate={handleCreateUsers}
            initialValues={editUsers}
            activeTab={activeTab}
            superStockistUsernames={superStockistUsernames}
            stockistUsernames={stockistUsernames}
          />
        )}

        <DeletePopup
          isOpen={showDeletePopup}
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </>
  );
}
