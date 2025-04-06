import React from 'react';
import OverviewCard from './OverviewCard';
import '../css/OverviewSection.css';
import { CiShoppingCart } from "react-icons/ci";
import { MdAttachMoney , MdAccountCircle} from "react-icons/md";

const OverviewSection = () => {
  return (
    <div className="overview-section">
      <h2 className="section-title">OVERVIEW</h2>
      <div className="cards-container">
        <OverviewCard
          title="Turnover"
          value="$92,405"
          percentageChange="5.39%"
          icon={<CiShoppingCart size={30} />}
          backgroundColor="#ffe6e6"
        />
        <OverviewCard
          title="Profit"
          value="$32,218"
          percentageChange="5.39%"
          icon={<MdAttachMoney size={30} />}
          backgroundColor="#e6f0ff"
        />
        <OverviewCard
          title="New customer"
          value="298"
          percentageChange="6.84%"
          icon={<MdAccountCircle size={30} />}
          backgroundColor="#fff"
        />
      </div>
    </div>
  );
};

export default OverviewSection;