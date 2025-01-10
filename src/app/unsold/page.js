"use client"; // Required for UI manipulation or using any React hook

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SalesList from "@/components/SalesList";
import CreateSalePopup from "@/components/CreateSalePopup";
import DeletePopup from "@/components/DeletePopup";

export default function Home() {
  const [addPopupOpen, setAddPopupOpen] = useState(false);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);

  const handleOpenAddPopup = () => {
    setAddPopupOpen(!addPopupOpen);
  };

  const handleCancelDelete = () => {
    setDeletePopupOpen(false);
  };

  return (
    <div className="p-5">
      <PageHeader
        pageTitle="Unsold List"
        buttonTitle=" + Add Unsold Item"
        handleAdd={handleOpenAddPopup}
      />

      <SalesList />

      {addPopupOpen && (
        <CreateSalePopup
          isOpen={addPopupOpen}
          onClose={handleOpenAddPopup}
          title="Add Unsold Item"
          okBtnText="Submit"
        />
      )}

      {deletePopupOpen && (
        <DeletePopup isOpen={deletePopupOpen} onClose={handleOpenDeletePop} />
      )}
    </div>
  );
}
