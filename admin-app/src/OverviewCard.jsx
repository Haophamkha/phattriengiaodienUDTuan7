import React from 'react';
import './OverviewCard.css';

const OverviewCard = ({ title, value, percentageChange, icon, backgroundColor }) => {
  return (
    <div className="overview-card" style={{ backgroundColor }}>
      <div className="card-header">
        <span className="card-title">{title}</span>
        <span className="card-icon">{icon}</span>
      </div>
      <div className="card-value">{value}</div>
      <div className="card-change">
        <span className="change-arrow">▲</span>
        <span className="change-text">{percentageChange} period of change</span>
      </div>
    </div>
  );
};

export default OverviewCard;