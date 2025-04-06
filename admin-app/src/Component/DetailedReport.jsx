import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { MdAttachMoney } from "react-icons/md";
import '../css/DetailedReport.css';
import { FaEdit } from 'react-icons/fa';
import EditModal from './EditModal.jsx';
import AddModal from './AddModal.jsx';
import { getCustomers } from '../api.jsx';
const DetailedReport = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  
  const handleEdit = (row) => {
    setSelectedUser(row);
    setIsModalOpen(true);
  };

  const columns = useMemo(() => [
    {
      name: 'CUSTOMER NAME',
      selector: (row) => row.CustomerName,
      sortable: true,
     
    },
    {
      name: 'COMPANY',
      selector: (row) => row.Company,
      sortable: true,
    },
    {
      name: 'ORDER VALUE',
      selector: (row) => (
        <span style={{ display: 'flex', alignItems: 'center'}}>
          <MdAttachMoney size={20} />
          {row.OrderValue}
        </span>
      ),
      sortable: true,
    },    
    {
      name: 'ORDER DATE',
      selector: (row) => row.OrderDate,
      sortable: true,
      cell: (row) => (
        <span style={{ color: 'gray' }}>
          {new Date(row.OrderDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
        </span>
      ),
    },
    
    {
      name: 'STATUS',
      selector: (row) => row.Status,
      sortable: true,
      cell: (row) => (
        <span
          style={{
            padding: '5px 10px',
            borderRadius: '15px',
            backgroundColor:
              row.Status === 'New'
                ? '#e6f0ff'
                : row.Status === 'In-progress'
                ? '#fff3cd'
                : '#d4edda',
            color:
              row.Status === 'New'
                ? '#007bff'
                : row.Status === 'In-progress'
                ? '#856404'
                : '#155724',
          }}
        >
          {row.Status}
        </span>
      ),
    },
    {
      name: '',
      cell: (row) => (
        <span style={{ cursor: 'pointer' }} onClick={() => handleEdit(row)}>
          <FaEdit size={18} color="#007bff" />
        </span>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ], []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCustomers();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="detailed-report">
      <div className="report-header">
        <h2 className="report-title">DETAILED REPORT</h2>
        <div className="report-actions">
          <button className="action-button" onClick={openAddModal}>Thêm</button>
          <button className="action-button">Import</button>
          <button className="action-button">Export</button>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          
          <DataTable
          columns={columns}
          data={data}
          selectableRows
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          customStyles={{
            headCells: {
              style: {
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#666',
                textTransform: 'uppercase',
              },
            },
            cells: {
              style: {
                fontSize: '14px',
                color: '#333',
              },
            },
            rows: {
              style: {
                minHeight: '60px',
              },
            },
          }}
        />
        <div className="table-footer">
  <div className="result-count">{data.length} results</div>
</div>
        </div>
      )}

      {isModalOpen && (
        <EditModal
          user={selectedUser}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {isAddModalOpen && (
        <AddModal onClose={closeAddModal} />
      )}
    </div>
  );
};

export default DetailedReport;
