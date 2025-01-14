"use client";

import { useState, useEffect } from "react";
import { saveAs } from "file-saver"; // To help with file download
import * as XLSX from "xlsx"; // Import xlsx for Excel export
import PageHeader from "@/components/PageHeader";
import SalesList from "@/components/SalesList";
import CreateSalePopup from "@/components/CreateSalePopup";
import DeletePopup from "@/components/DeletePopup";
import masterData from "@/data/masterData.json";

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
        ticketRef: "TKT-20240910-092049",
        date: "2024-09-11",
        customer: "S Basak",
        lottery: "Wed",
        from: "29",
        to: "53",
        same: "1",
        group: "53",
        ticketQty: 53,
      },
      {
        id: 2,
        ticketRef: "TKT-20240911-105210",
        date: "2024-09-12",
        customer: "R Sharma",
        lottery: "Mon",
        from: "12",
        to: "34",
        same: "2",
        group: "34",
        ticketQty: 34,
      },
      {
        id: 3,
        ticketRef: "TKT-20240912-112356",
        date: "2024-09-13",
        customer: "M Das",
        lottery: "Fri",
        from: "45",
        to: "76",
        same: "3",
        group: "76",
        ticketQty: 76,
      },
      {
        id: 4,
        ticketRef: "TKT-20240913-124506",
        date: "2024-09-14",
        customer: "A Kumar",
        lottery: "Sun",
        from: "23",
        to: "78",
        same: "1",
        group: "78",
        ticketQty: 78,
      },
      {
        id: 5,
        ticketRef: "TKT-20240914-134620",
        date: "2024-09-15",
        customer: "P Roy",
        lottery: "Tue",
        from: "15",
        to: "56",
        same: "2",
        group: "56",
        ticketQty: 56,
      },
      {
        id: 6,
        ticketRef: "TKT-20240915-145320",
        date: "2024-09-16",
        customer: "L Saha",
        lottery: "Wed",
        from: "10",
        to: "90",
        same: "1",
        group: "90",
        ticketQty: 90,
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
      <PageHeader
        title="Unsold List"
        btnText=" + Add Unsold Item"
        onAdd={handleAddPopup}
      />

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
        btnText={unsoldEdit ? "Update Sale" : "Create Sale"}
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
