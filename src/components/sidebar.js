import React, { useState } from 'react';
import { FaChevronDown, FaUser, FaBuilding, FaHandshake, FaTasks, FaChartLine } from 'react-icons/fa';
import { BiGridAlt, BiEnvelope } from 'react-icons/bi';
import './sidebar.css';

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    mainMenu: false,
    crm: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="sidebar">
      {/* User Info */}
      <div className="user-profile">
        <img
          src="https://via.placeholder.com/50"
          alt="User Profile"
          className="profile-img"
        />
        <div className="user-info">
          <h5 className='text-dark'>Waseem Akram</h5>
          <p>Web Developer</p>
        </div>
      </div>

      {/* Main Menu */}
      <ul className="menu">
        <li className="menu-title">MAIN MENU</li>
        <li
          className={`menu-item ${dropdownOpen.mainMenu ? 'active' : ''}`}
          onClick={() => toggleDropdown('mainMenu')}
        >
          <BiGridAlt className="menu-icon" />
          Dashboard
          <FaChevronDown className="dropdown-icon" />
        </li>
        {dropdownOpen.mainMenu && (
          <ul className="submenu">
            <li className="submenu-item">Analytics</li>
            <li className="submenu-item">Performance</li>
          </ul>
        )}

        <li className="menu-item">
          <FaTasks className="menu-icon" />
          Application
        </li>
      </ul>

      {/* CRM Menu */}
      <ul className="menu">
        <li className="menu-title">CRM</li>
        <li className="menu-item">
          <FaUser className="menu-icon" />
          Contacts
        </li>
        <li className="menu-item">
          <FaBuilding className="menu-icon" />
          Companies
        </li>
        <li className="menu-item">
          <FaHandshake className="menu-icon" />
          Deals
        </li>
        <li className="menu-item">
          <FaChartLine className="menu-icon" />
          Leads
        </li>
        <li className="menu-item">
          <FaTasks className="menu-icon" />
          Pipeline
        </li>
        <li className="menu-item">
          <BiEnvelope className="menu-icon" />
          Campaign
        </li>
        <li className="menu-item">
          <FaTasks className="menu-icon" />
          Projects
        </li>
        <li className="menu-item">
          <FaTasks className="menu-icon" />
          Tasks
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
