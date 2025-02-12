"use client";

import { useState } from "react";
import { saveAs } from "file-saver"; // To help with file download
import * as XLSX from "xlsx"; // Import xlsx for Excel export
import AddButton from "@/components/layout/AddButton";
import SalesList from "@/components/lists/SalesList";
import CreateSalePopup from "@/components/forms/CreateSalePopup";
import DeletePopup from "@/components/modal/DeletePopup";
import masterData from "@/jsonData/masterData.json";

export default function Home() {
  const [addPopupOpen, setAddPopupOpen] = useState(false);
  const [unsoldList, setUnsoldList] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [unsoldEdit, setUnsoldEdit] = useState(null);
  const [deletingItem, setDeletingItem] = useState(null);

  const handleAddPopup = () => {
    setAddPopupOpen(!addPopupOpen);
    setUnsoldEdit(null);
  };

  const handleEdit = (id) => {
    const itemToEdit = unsoldList.find((item) => item.id === id);
    setUnsoldEdit(itemToEdit);
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
    setUnsoldList((prevData) =>
      prevData.filter((item) => item.id !== deletingItem)
    );
    setShowDeletePopup(false);
  };

  const handleCreateUnsold = (unsoldData) => {
    if (unsoldEdit) {
      setUnsoldList((prevData) =>
        prevData.map((item) =>
          item.id === unsoldEdit.id ? { ...item, ...unsoldData } : item
        )
      );
    } else {
      setUnsoldList((prevData) => [
        ...prevData,
        { ...unsoldData, id: prevData.length + 1 },
      ]);
    }
    setAddPopupOpen(false);
    setUnsoldEdit(null);
  };

  const handleExportExcel = () => {
    // Convert the salesList into an Excel-compatible format
    const ws = XLSX.utils.json_to_sheet(unsoldList, {
      header: [
        "id",
        "ticketRef",
        "date",
        "customer",
        "lottery",
        "from",
        "to",
        "same",
        "group",
        "ticketQty",
      ],
    });

    // Create a new workbook and append the sheet to it
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Unsold Data");

    // Write the Excel file and trigger download
    const excelFile = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelFile], { type: "application/octet-stream" });
    saveAs(blob, "unsold_data.xlsx");
  };

  return (
    <div className="p-5">
      <AddButton onAdd={handleAddPopup} />

      <SalesList
        title="Unsold List"
        tableHeader={masterData.tableHeader.sales}
        tableData={unsoldList}
        generateExcel={handleExportExcel}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CreateSalePopup
        isOpen={addPopupOpen}
        ticketRef={false}
        width="max-w-4xl"
        title={unsoldEdit ? "Update Unsold" : "Add Unsold"}
        btnText={unsoldEdit ? "Update Changes" : "Save Changes"}
        onClose={handleAddPopup}
        onCreate={handleCreateUnsold}
        initialValues={unsoldEdit}
      />

      <DeletePopup
        isOpen={showDeletePopup}
        cancel={handleCancelDelete}
        confirm={handleConfirmDelete}
      />
    </div>
  );
}
