"use client";

import { useState } from "react";
import AddButton from "@/components/layout/AddButton";
import Table from "@/components/tables/Table";
import CreateSchemeModal from "@/components/forms/CreateSchemeModal";
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
  { title: "Schemes", icon: FaRegClipboard, tabId: 0 },
  { title: "Super Stockist", icon: FaTruck, tabId: 1 },
  { title: "Stockist", icon: FaWarehouse, tabId: 2 },
  { title: "Retailer", icon: FaStore, tabId: 3 },
  { title: "Users", icon: FaUsers, tabId: 4 },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [addPopupOpen, setAddPopupOpen] = useState(false);
  const [schemeList, setSchemeList] = useState([]);
  const [editScheme, setEditScheme] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deletingItem, setDeletingItem] = useState(null);

  const activeTabHeader = tabData.find((tab) => tab.tabId === activeTab);
  if (!activeTabHeader) return null;

  const handleAddPopup = () => {
    setAddPopupOpen(!addPopupOpen);
    setEditScheme(null);
  };

  const handleEdit = (id) => {
    const itemToEdit = schemeList.find((item) => item.id === id);
    setEditScheme(itemToEdit);
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
    setSchemeList((prevData) =>
      prevData.filter((item) => item.id !== deletingItem)
    );
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

        <Table
          headers={masterData.tableHeader.scheme}
          data={schemeList}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <CreateSchemeModal
          isOpen={addPopupOpen}
          width="max-w-2xl"
          title={editScheme ? "Update Scheme" : "Add Scheme"}
          btnText={editScheme ? "Update Changes" : "Save Changes"}
          onClose={handleAddPopup}
          onCreate={handleCreateScheme}
          initialValues={editScheme}
        />

        <DeletePopup
          isOpen={showDeletePopup}
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </>
  );
}
