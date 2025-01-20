"use client";

import { useState, useEffect } from "react";
import { saveAs } from "file-saver"; // To help with file download
import * as XLSX from "xlsx"; // Import xlsx for Excel export
import PageHeader from "@/components/layout/PageHeader";
import SalesList from "@/components/lists/SalesList";
import CreateSalePopup from "@/components/forms/CreateSalePopup";
import DeletePopup from "@/components/forms/DeletePopup";
import masterData from "@/api/masterData.json";

export default function Home() {
  const [addPopupOpen, setAddPopupOpen] = useState(false);
  const [unsoldList, setUnsoldList] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [unsoldEdit, setUnsoldEdit] = useState(null);
  const [deletingItemId, setDeletingItemId] = useState(null);

  useEffect(() => {
    setUnsoldList([
      {
        id: 1,
        ticketRef: "T0114773772",
        date: "11-01-2025",
        customer: "S Basak",
        session: "MOR(13:00)",
        ticket: "DEAR",
        from: "293124",
        to: "53213",
        count: "123",
        same: "5",
        ticketQty: 533,
        price: 345234,
      },
    ]);
  }, []);

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
    setDeletingItemId(id);
    setShowDeletePopup(true);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  const handleConfirmDelete = () => {
    setUnsoldList((prevData) =>
      prevData.filter((item) => item.id !== deletingItemId)
    );
    setShowDeletePopup(false);
  };

  const handleCreateSales = (newSaleData) => {
    if (unsoldEdit) {
      setUnsoldList((prevData) =>
        prevData.map((item) =>
          item.id === unsoldEdit.id ? { ...item, ...newSaleData } : item
        )
      );
    } else {
      setUnsoldList((prevData) => [
        ...prevData,
        { ...newSaleData, id: prevData.length + 1 },
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
      <PageHeader title="Unsold List" btnText=" + Add" onAdd={handleAddPopup} />

      <SalesList
        tableHeader={masterData.tableHeader.sales}
        tableData={unsoldList}
        generateExcel={handleExportExcel}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CreateSalePopup
        isOpen={addPopupOpen}
        title={unsoldEdit ? "Edit Unsold Ticket" : "Add Unsold Tickets"}
        btnText={unsoldEdit ? "Save Changes" : "Update Changes"}
        onClose={handleAddPopup}
        onCreate={handleCreateSales}
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
