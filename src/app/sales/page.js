"use client"; // Required for UI manipulation or using any React hook

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SalesList from "@/components/SalesList";
import CreateSalePopup from "@/components/CreateSalePopup";
import DeletePopup from "@/components/DeletePopup";

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  console.log(isPopupOpen, "isPopupOpen");

  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);

  const handleAddPopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="p-3">
      <PageHeader
        pageTitle="Ticket Sale List"
        buttonTitle="+ Add Sales"
        handleAddPopup={handleAddPopup}
      />

      <SalesList />

      {isPopupOpen && (
        <CreateSalePopup title="Add Ticket Sale" okBtnText="Create Sale" />
      )}

      {isDeletePopupOpen && <DeletePopup />}
    </div>
  );
}
