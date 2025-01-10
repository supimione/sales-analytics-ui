"use client"; // Required for UI manipulation or using any React hook

import { useState } from "react";
import SalesList from "@/components/SalesList";
import CreateSalePopup from "@/components/CreateSalePopup";
import DeletePopup from "@/components/DeletePopup";

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  // Open delete confirmation popup
  const handleDeleteSelectedItems = (itemId) => {
    setDeletePopupOpen(true);
  };

  // Close delete popup
  const handleCancelDelete = () => {
    setDeletePopupOpen(false);
  };

  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">All Stocks</h1>
        <button
          className="px-4 py-2 text-sm text-white bg-[#597cff] rounded hover:bg-sky-700"
          onClick={handleOpenPopup}
        >
          + Add New Stock
        </button>
      </div>

      <SalesList handleDeleteSelectedItems={handleDeleteSelectedItems} />

      {isPopupOpen && (
        <CreateSalePopup
          isOpen={isPopupOpen}
          onClose={handleOpenPopup}
          title="Add New Stock"
          okBtnText="New Stock"
        />
      )}

      {isDeletePopupOpen && (
        <DeletePopup isOpen={isDeletePopupOpen} onClose={handleCancelDelete} />
      )}
    </div>
  );
}
