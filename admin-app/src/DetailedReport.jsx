import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './DetailedReport.css';
import { FaEdit } from 'react-icons/fa';
import EditModal from './EditModal.jsx';

const DetailedReport = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (row) => {
    setSelectedUser(row);
    setIsModalOpen(true);
  };

  const columns = useMemo(() => [
    {
      name: 'CUSTOMER NAME',
      selector: (row) => row.CustomerName,
      sortable: true,
      // cell: (row) => (
    //   <div style={{ display: 'flex', alignItems: 'center' }}>
    //     <img
    //       src={row.avatar || 'https://via.placeholder.com/30'}
    //       alt={row.customerName}
    //       style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
    //     />
    //     {row.customerName}
    //   </div>
    // ),
    },
    {
      name: 'COMPANY',
      selector: (row) => row.Company,
      sortable: true,
    },
    {
      name: 'ORDER VALUE',
      selector: (row) => row.OrderValue,
      sortable: true,
    },
    {
      name: 'ORDER DATE',
      selector: (row) => row.OrderDate,
      sortable: true,
      cell: (row) =>
        new Date(row.OrderDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
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
        const response = await axios.get('https://67f15283c733555e24acd43d.mockapi.io/Customer');
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
          <button className="action-button">Import</button>
          <button className="action-button">Export</button>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}

      {isModalOpen && (
        <EditModal
          user={selectedUser}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default DetailedReport;
