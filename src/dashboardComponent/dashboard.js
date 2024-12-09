import React from 'react';
import DealsTable from './dealsTable';
import DealsChart from './dealsChart';
import HorizontalBarChart from './dashbar-1'
import DealsChart2 from './dashbar-2';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h5 className='fw-bold fs-5'>Deals Dashboard</h5>
      <div className="dashboard-content-1">
        {/* Recently Created Deals */}
        <div className="section">
          <h6 className='fw-bolder fs-6'>Recently Created Deals</h6>
          <DealsTable />
        </div>

        {/* Deals By Stage */}
        <div className="section">
          <h6 className='fw-bolder fs-6'>Deals By Stage</h6>
          <DealsChart />
        </div>
        
      </div>
      <div className="section">
          <h6 className='fw-bolder fs-6'>Leads By Stage</h6>
          <DealsChart2 />
        </div>
        

        <div className="section">
          <h6 className='fw-bolder fs-6'>Deals By Year</h6>
          <HorizontalBarChart />
        </div>
    </div>
  );
};

export default Dashboard;
