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
  const [editScheme, setEditScheme] = useState(null);

  const [superStockistList, setSuperStockistList] = useState([]);
  const [stockistList, setStockistList] = useState([]);
  const [retailerList, setRetailerList] = useState([]);
  const [usersList, setUsersList] = useState([]);

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
  };

  const handleEdit = (id) => {
    if (activeTab === 0) {
      const itemToEdit = schemeList.find((item) => item.id === id);
      setEditScheme(itemToEdit);
    } else {
      const itemToEdit = usersList.find((item) => item.id === id);
      setEditScheme(itemToEdit);
    }

    setAddPopupOpen(true);
  };

  const handleDelete = (id) => {
    setDeletingItem(id);
    setShowDeletePopup(false);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  const handleConfirmDelete = () => {
    if (activeTab === 0) {
      setSchemeList((prevData) =>
        prevData.filter((item) => item.id !== deletingItem)
      );
    } else {
      setUsersList((prevData) =>
        prevData.filter((item) => item.id !== deletingItem)
      );
    }

    setShowDeletePopup(false);
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
        { ...newSchemeData, id: prevData.length + 1 },
      ]);
    }
    setAddPopupOpen(false);
    setEditScheme(null);
  };

  const handleCreateUsers = (newUsersData) => {
    if (editUsers) {
      // If editing an existing user, update the correct list based on activeTab
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
      // If adding a new user, add to the correct list based on activeTab
      if (activeTab === 1) {
        setSuperStockistList((prevData) => [
          ...prevData,
          { ...newUsersData, id: prevData.length + 1 },
        ]);
      } else if (activeTab === 2) {
        setStockistList((prevData) => [
          ...prevData,
          { ...newUsersData, id: prevData.length + 1 },
        ]);
      } else if (activeTab === 3) {
        setRetailerList((prevData) => [
          ...prevData,
          { ...newUsersData, id: prevData.length + 1 },
        ]);
      } else if (activeTab === 4) {
        setUsersList((prevData) => [
          ...prevData,
          { ...newUsersData, id: prevData.length + 1 },
        ]);
      }
    }

    // Reset the form and states
    setAddPopupOpen(false);
    setEditUsers(null);
  };

  return (
    <>
      <div className="px-5 py-5">
        <div className="flex border-b">
          {tabData.map((tab, index) => (
            <button
              key={tab.tabId}
              className={`py-2 px-4 text-sm ${
                activeTab === tab.tabId
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(tab.tabId)}
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
            title={editUsers ? "Update" : "Add"}
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
