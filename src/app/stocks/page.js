"use client"; // Required for UI manipulation or using any React hook

import { useState } from "react";
import DeletePopup from "@/components/DeletePopup";
import CreateSalePopup from "@/components/CreateSalePopup";
import SalesList from "@/components/SalesList";

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
    <>
      <div className="py-4 px-2 sm:ml-64">
        <div className="flex justify-between items-center mt-14">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">All Stocks</h1>
          </div>
          <button
            className="px-4 py-2 text-sm text-white bg-[#597cff] rounded hover:bg-sky-700"
            onClick={handleOpenPopup}
          >
            + Add New Stock
          </button>
        </div>
      </div>

      <SalesList
        handleDeleteSelectedItems={handleDeleteSelectedItems}
        // handleGenerateExcel={handleGenerateExcel}
        // handleGeneratePDF={handleGeneratePDF}
      />

      {isPopupOpen && (
        <CreateSalePopup
          isOpen={isPopupOpen}
          onClose={handleOpenPopup}
          title="Add New Stock"
          okBtnText="New Stock"
          // handleSubmit={}
        />
      )}

      {isDeletePopupOpen && (
        <DeletePopup
          isOpen={isDeletePopupOpen}
          onClose={handleCancelDelete}
          // onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
}