import React, { useState } from "react";
import "../css/EditModal.css";
import { addCustomer } from "../api";

const AddModal = ({ user = {}, onClose }) => {
  const [name, setName] = useState(user.CustomerName || "");
  const [company, setCompany] = useState(user.Company || "");
  const [orderValue, setOrderValue] = useState(user.OrderValue || "");
  const [status, setStatus] = useState(user.Status || "Completed");
  const [orderDate, setOrderDate] = useState(
    user.OrderDate
      ? new Date(user.OrderDate).toISOString().split("T")[0]
      : ""
  );

  const handleSave = async () => {
    if (!name || !company || !orderValue || !orderDate) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
      }
    const newCustomer = {
      CustomerName: name,
      Company: company,
      OrderValue: orderValue,
      OrderDate: new Date(orderDate).getTime(),
      Status: status,
    };

    try {
      await addCustomer(newCustomer);
      console.log("Thêm thành công:", newCustomer);
      onClose();
    } catch (error) {
      console.error("không thêm dc:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Customer</h1>

        <div className="modal-field">
          <label className="label">Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="modal-field">
          <label className="label">Company:</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="modal-field">
          <label className="label">Order Value:</label>
          <input
            value={orderValue}
            onChange={(e) => setOrderValue(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="modal-field">
          <label className="label">Order Date:</label>
          <input
            type="date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="modal-field">
          <label className="label">Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="input-field"
          >
            <option value="Completed">Completed</option>
            <option value="In-progress">In-progress</option>
            <option value="New">New</option>
          </select>
        </div>

        <div className="modal-buttons">
          <button className="btn btnCancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btnSave" onClick={handleSave}>
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
