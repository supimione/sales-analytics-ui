"use client";

import { useState } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import AddButton from "@/components/layout/AddButton";
import SalesList from "@/components/lists/SalesList";
import CreateSalePopup from "@/components/forms/CreateSalePopup";
import DeletePopup from "@/components/modal/DeletePopup";
import masterData from "@/jsonData/masterData.json";

export default function Home() {
  const [addPopupOpen, setAddPopupOpen] = useState(false);
  const [salesList, setSalesList] = useState([]);
  const [salesEdit, setSalesEdit] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deletingItem, setDeletingItem] = useState(null);

  const handleAddPopup = () => {
    setAddPopupOpen(!addPopupOpen);
    setSalesEdit(null);
  };

  const handleEdit = (id) => {
    const itemToEdit = salesList.find((item) => item.id === id);
    setSalesEdit(itemToEdit);
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
    setSalesList((prevData) =>
      prevData.filter((item) => item.id !== deletingItem)
    );
    setShowDeletePopup(false);
  };

  const handleCreateSales = (saleData) => {
    if (salesEdit) {
      setSalesList((prevData) =>
        prevData.map((item) =>
          item.id === salesEdit.id ? { ...item, ...saleData } : item
        )
      );
    } else {
      setSalesList((prevData) => [
        ...prevData,
        { ...saleData, id: prevData.length + 1 },
      ]);
    }
    setAddPopupOpen(false);
    setSalesEdit(null);
  };

  const handleExportExcel = () => {
    // Convert the salesList into an Excel-compatible format
    const ws = XLSX.utils.json_to_sheet(salesList, {
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
    XLSX.utils.book_append_sheet(wb, ws, "Sales Data");

    // Write the Excel file and trigger download
    const excelFile = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelFile], { type: "application/octet-stream" });
    saveAs(blob, "sales_data.xlsx");
  };

  return (
    <div className="p-5">
      <AddButton onAdd={handleAddPopup} />

      <SalesList
        title="Sales List"
        tableHeader={masterData.tableHeader.sales}
        tableData={salesList}
        generateExcel={handleExportExcel}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CreateSalePopup
        isOpen={addPopupOpen}
        ticketRef={false}
        width="max-w-4xl"
        title={salesEdit ? "Update Sales" : "Add Sales"}
        btnText={salesEdit ? "Update Changes" : "Save Changes"}
        onClose={handleAddPopup}
        onCreate={handleCreateSales}
        initialValues={salesEdit}
      />

      <DeletePopup
        isOpen={showDeletePopup}
        cancel={handleCancelDelete}
        confirm={handleConfirmDelete}
      />
    </div>
  );
}
