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
  const [stockList, setStockList] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [stockEdit, setStockEdit] = useState(null);
  const [deletingItem, setDeletingItem] = useState(null);

  const handleAddPopup = () => {
    setAddPopupOpen(!addPopupOpen);
    setStockEdit(null);
  };

  // const handleEdit = (id) => {
  //   const itemToEdit = stockList.find((item) => item.id === id);
  //   setStockEdit(itemToEdit);
  //   setAddPopupOpen(true);
  // };

  const handleDelete = (id) => {
    setDeletingItem(id);
    setShowDeletePopup(true);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  const handleConfirmDelete = () => {
    setStockList((prevData) =>
      prevData.filter((item) => item.id !== deletingItem)
    );
    setShowDeletePopup(false);
  };

  const handleCreateStock = (stockData) => {
    if (stockEdit) {
      setStockList((prevData) =>
        prevData.map((item) =>
          item.id === stockEdit.id ? { ...item, ...stockData } : item
        )
      );
    } else {
      setStockList((prevData) => [
        ...prevData,
        { ...stockData, id: prevData.length + 1 },
      ]);
    }
    setAddPopupOpen(false);
    setStockEdit(null);
  };

  const handleExportExcel = () => {
    // Convert the salesList into an Excel-compatible format
    const ws = XLSX.utils.json_to_sheet(stockList, {
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
    XLSX.utils.book_append_sheet(wb, ws, "Stocks Data");

    // Write the Excel file and trigger download
    const excelFile = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelFile], { type: "application/octet-stream" });
    saveAs(blob, "stocks_data.xlsx");
  };

  return (
    <div className="p-5">
      <AddButton onAdd={handleAddPopup} />

      <SalesList
        title="Stock List"
        tableHeader={masterData.tableHeader.sales}
        tableData={stockList}
        generateExcel={handleExportExcel}
        ShowEdit={false}
        onDelete={handleDelete}
      />

      <CreateSalePopup
        isOpen={addPopupOpen}
        ticketRef={false}
        width="max-w-4xl"
        title={stockEdit ? "Update Stock" : "Add Stock"}
        btnText={stockEdit ? "Update Changes" : "Save Changes"}
        onClose={handleAddPopup}
        onCreate={handleCreateStock}
        initialValues={stockEdit}
      />

      <DeletePopup
        isOpen={showDeletePopup}
        cancel={handleCancelDelete}
        confirm={handleConfirmDelete}
      />
    </div>
  );
}
