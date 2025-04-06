import React, { useState } from "react";
import "../css/EditModal.css";
import axios from "axios";
const EditModal = ({ user, onClose }) => {
    const [name, setName] = useState(user?.CustomerName || "");
    const [company, setCompany] = useState(user?.Company || "");
    const [orderValue, setOrderValue] = useState(user?.OrderValue || "");
    const [status, setStatus] = useState(user?.Status || "Completed");
    const [orderDate, setOrderDate] = useState(
      user ? new Date(user.OrderDate).toISOString().split("T")[0] : ""
    );




const updateCustomer = async (id, updatedData) => {
    try {
      const response = await axios.put(`https://67f15283c733555e24acd43d.mockapi.io/Customer/${id}`, updatedData);
      console.log('Updated successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating customer:', error);
      throw error;
    }
  };
  const handleSave = async () => {
    const updatedData = {
      CustomerName: name,
      Company: company,
      OrderValue: orderValue,
      OrderDate: new Date(orderDate).getTime(),
      Status: status,
    };

    await updateCustomer(user.id, updatedData);
    onClose();
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <h1>Customer</h1>

<div className="modal-field">
  <label className="label">Name:</label>
  <input defaultValue={user.CustomerName} className="input-field" onChange={(e) => setName(e.target.value)} />
</div>

<div className="modal-field">
  <label className="label">Company:</label>
  <input defaultValue={user.Company} className="input-field" onChange={(e) => setCompany(e.target.value)} />
</div>

<div className="modal-field">
  <label className="label">Order Value:</label>
  <input defaultValue={user.OrderValue} className="input-field" onChange={(e) => setOrderValue(e.target.value)}/>
</div>

<div className="modal-field">
  <label className="label">Order Date:</label>
  <input
    defaultValue={new Date(user.OrderDate).toISOString().split("T")[0]}
    type="date"
    className="input-field"
    onChange={(e) => setOrderDate(e.target.value)}
  />
</div>

<div className="modal-field">
  <label className="label">Status:</label>
  <select defaultValue={user.Status} className="input-field" onChange={(e) => setStatus(e.target.value)}>
    <option value="Completed">Completed</option>
    <option value="In-progress">In-progress</option>
    <option value="New">New</option>
  </select>
</div>
        <div className="modal-buttons">
          <button className="btn btnCancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btnSave" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

