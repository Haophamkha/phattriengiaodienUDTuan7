import React from 'react';
import OverviewCard from './OverviewCard';
import './OverviewSection.css';

const OverviewSection = () => {
  return (
    <div className="overview-section">
      <h2 className="section-title">OVERVIEW</h2>
      <div className="cards-container">
        <OverviewCard
          title="Turnover"
          value="$92,405"
          percentageChange="5.39%"
          icon="🛒"
          backgroundColor="#ffe6e6"
        />
        <OverviewCard
          title="Profit"
          value="$32,218"
          percentageChange="5.39%"
          icon="💰"
          backgroundColor="#e6f0ff"
        />
        <OverviewCard
          title="New customer"
          value="298"
          percentageChange="6.84%"
          icon="👤"
          backgroundColor="#fff"
        />
      </div>
    </div>
  );
};

export default OverviewSection;