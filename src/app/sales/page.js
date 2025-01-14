"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import SalesList from "@/components/SalesList";
import CreateSalePopup from "@/components/CreateSalePopup";
import DeletePopup from "@/components/DeletePopup";
import masterData from "@/data/masterData.json";

export default function Home() {
  const [addPopupOpen, setAddPopupOpen] = useState(false);
  const [salesList, setSalesList] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [edit, setEdit] = useState(null);
  const [deletingItemId, setDeletingItemId] = useState(null);

  useEffect(() => {
    setSalesList([
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
    setEdit(null);
  };

  const handleExportExcel = () => {};

  const handleEdit = (id) => {
    const itemToEdit = salesList.find((item) => item.id === id);
    setEdit(itemToEdit);
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
    setSalesList((prevData) =>
      prevData.filter((item) => item.id !== deletingItemId)
    );
    setShowDeletePopup(false);
  };

  const handleCreateSales = (newSaleData) => {
    if (edit) {
      setSalesList((prevData) =>
        prevData.map((item) =>
          item.id === edit.id ? { ...item, ...newSaleData } : item
        )
      );
    } else {
      setSalesList((prevData) => [
        ...prevData,
        { ...newSaleData, id: prevData.length + 1 },
      ]);
    }
    setAddPopupOpen(false);
    setEdit(null);
  };

  return (
    <div className="p-5">
      <PageHeader
        title="Ticket Sale List"
        btnText="+ Add Sales"
        onAdd={handleAddPopup}
      />

      <SalesList
        tableHeader={masterData.tableHeader.sales}
        tableData={salesList}
        generateExcel={handleExportExcel}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CreateSalePopup
        isOpen={addPopupOpen}
        ticketRef={false}
        title={edit ? "Edit Ticket Sale" : "Add Ticket Sale"}
        btnText={edit ? "Update Sale" : "Create Sale"}
        onClose={handleAddPopup}
        onCreate={handleCreateSales}
        initialValues={edit}
      />

      <DeletePopup
        isOpen={showDeletePopup}
        cancel={handleCancelDelete}
        confirm={handleConfirmDelete}
      />
    </div>
  );
}
