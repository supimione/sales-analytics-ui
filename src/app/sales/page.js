"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SalesList from "@/components/SalesList";
import CreateSalePopup from "@/components/CreateSalePopup";
import DeletePopup from "@/components/DeletePopup";

export default function Home() {
  const [addPopupOpen, setAddPopupOpen] = useState(false);
  const [selectItem, setSelectItem] = useState([]);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);

  const handleAddPopup = () => {
    setAddPopupOpen(!addPopupOpen);
  };

  const handleSelectedItem = (items) => {
    setSelectItem(items);
  };

  const handleDeletePopup = () => {
    setDeletePopupOpen(!deletePopupOpen);
  };

  return (
    <div className="p-5">
      <PageHeader
        title="Ticket Sale List"
        buttonTitle="+ Add Sales"
        add={handleAddPopup}
      />

      <SalesList selectedItem={handleSelectedItem} />

      {addPopupOpen && (
        <CreateSalePopup
          isOpen={addPopupOpen}
          cancel={handleAddPopup}
          title="Add Ticket Sale"
          buttonTitle="Create Sale"
        />
      )}

      {deletePopupOpen && (
        <DeletePopup isOpen={deletePopupOpen} cancel={handleDeletePopup} />
      )}
    </div>
  );
}
