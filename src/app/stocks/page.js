"use client";

import { useState, useEffect } from "react";
import { saveAs } from "file-saver"; // To help with file download
import * as XLSX from "xlsx"; // Import xlsx for Excel export
import SalesList from "@/components/SalesList";
import DeletePopup from "@/components/DeletePopup";
import masterData from "@/data/masterData.json";

export default function Home() {
  const [stockList, setStockList] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState(null);

  useEffect(() => {
    setStockList([
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

  const handleDelete = (id) => {
    setDeletingItemId(id);
    setShowDeletePopup(true);
  };

  const handleCancelDelete = () => {
    setDeletePopupOpen(false);
  };

  const handleConfirmDelete = () => {
    setStockList((prevData) =>
      prevData.filter((item) => item.id !== deletingItemId)
    );
    setShowDeletePopup(false);
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
      <h1 className="text-xl font-bold">All Stocks</h1>

      <SalesList
        tableHeader={masterData.tableHeader.sales}
        tableData={stockList}
        generateExcel={handleExportExcel}
        ShowEdit={false}
        onDelete={handleDelete}
      />

      <DeletePopup
        isOpen={showDeletePopup}
        cancel={handleCancelDelete}
        confirm={handleConfirmDelete}
      />
    </div>
  );
}
