import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../theme/theme.css';
import {
  FaChevronDown,
  FaUser,
  FaBuilding,
  FaHandshake,
  FaTasks,
  FaChartLine,
  FaFileAlt,
  FaFileInvoice,
  FaFileContract,
  FaMoneyBillWave,
  FaEnvelopeOpen,
  FaOilCan,
} from "react-icons/fa";
import {
  BiGridAlt,
  BiEnvelope,
  BiLogoProductHunt,
  BiFastForwardCircle,
} from "react-icons/bi";
import {
  BsFillEnvelopeCheckFill,
  BsFillEnvelopeDashFill,
  BsFillEyeSlashFill,
  BsFillFileImageFill,
} from "react-icons/bs";

import "./sidebar.css";
import { ThemeContext } from "../theme/themeContext";

const Sidebar = () => {
  const {theme}=useContext(ThemeContext);

  const [dropdownOpen, setDropdownOpen] = useState({
    mainMenu: false,
    projects: false,
    reports: false,
    crm: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className={`sidebar  ${theme==='dark'?"sidebar-custom-dark":"sidebar-custom-light"}`}>
      <div className="user-profile">
        <Link to="/profile" className="link" style={{ textDecoration: "none" }}>
          <img
            src="https://via.placeholder.com/50"
            alt="User Profile"
            className="profile-img"
          />
          <div className="user-info">
            <h5 className="text-dark">Waseem Akram</h5>
            <p>Web Developer</p>
          </div>
        </Link>
      </div>

      {/* Main Menu */}
      <ul className="menu">
        <li className="menu-title">MAIN MENU</li>
        <li
          className={`menu-item ${dropdownOpen.mainMenu ? "active" : ""}`}
          onClick={() => toggleDropdown("mainMenu")}
        >
          <BiGridAlt className="menu-icon" />
          <Link to="/dashboard">Dashboard</Link>
          <FaChevronDown className="dropdown-icon" />
        </li>
        {dropdownOpen.mainMenu && (
          <ul className="submenu">
            <li className="submenu-item">
              <Link to="/dashboard">
                <FaFileAlt className="submenu-icon" /> Analytics
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/dashboard">
                <FaFileContract className="submenu-icon" /> Performance
              </Link>
            </li>
          </ul>
        )}

        <li className="menu-item">
          <FaTasks className="menu-icon" />
          <Link to="/application">Application</Link>
        </li>
      </ul>

      {/* CRM Section */}
      <ul className="menu">
        <li className="menu-title">CRM</li>
        <li className="menu-item">
          <FaUser className="menu-icon" />
          <Link to="/contacts">Contacts</Link>
        </li>
        <li className="menu-item">
          <FaBuilding className="menu-icon" />
          <Link to="/companies">Companies</Link>
        </li>
        <li className="menu-item">
          <FaHandshake className="menu-icon" />
          <Link to="/deals">Deals</Link>
        </li>
        <li className="menu-item">
          <FaChartLine className="menu-icon" />
          <Link to="/leads">Leads</Link>
        </li>
        <li className="menu-item">
          <FaTasks className="menu-icon" />
          <Link to="/pipeline">Pipeline</Link>
        </li>
        <li className="menu-item">
          <BiEnvelope className="menu-icon" />
          <Link to="/campaign">Campaign</Link>
        </li>
        <li className="menu-item">
          <BiLogoProductHunt className="menu-icon" />
          <Link to="/projects">Projects</Link>
        </li>
        <li className="menu-item">
          <FaTasks className="menu-icon" />
          <Link to="/tasks">Tasks</Link>
        </li>
        <li className="menu-item">
          <FaEnvelopeOpen className="menu-icon" />
          <Link to="/proposals">Proposals</Link>
        </li>
        <li className="menu-item">
          <BsFillEnvelopeCheckFill className="menu-icon" />
          <Link to="/contracts">Contracts</Link>
        </li>
        <li className="menu-item">
          <BsFillEnvelopeDashFill className="menu-icon" />
          <Link to="/estimations">Estimations</Link>
        </li>
        <li className="menu-item">
          <FaOilCan className="menu-icon" />
          <Link to="/invoices">Invoices</Link>
        </li>
        <li className="menu-item">
          <BiFastForwardCircle className="menu-icon" />
          <Link to="/payments">Payments</Link>
        </li>
        <li className="menu-item">
          <BsFillFileImageFill className="menu-icon" />
          <Link to="/analytics">Analytics</Link>
        </li>
        <li className="menu-item">
          <BiEnvelope className="menu-icon" />
          <Link to="/activities">Activities</Link>
        </li>
      </ul>

      {/* Projects Section */}
      <ul className="menu">
        <li className="menu-title">PROJECT MANAGEMENT</li>
        <li
          className={`menu-item ${dropdownOpen.projects ? "active" : ""}`}
          onClick={() => toggleDropdown("projects")}
        >
          <FaTasks className="menu-icon" />
          Projects
          <FaChevronDown className="dropdown-icon" />
        </li>
        {dropdownOpen.projects && (
          <ul className="submenu">
            <li className="submenu-item">
              <Link to="/proposals">
                <FaFileAlt className="submenu-icon" /> Proposals
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/contracts">
                <FaFileContract className="submenu-icon" /> Contracts
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/estimations">
                <FaFileAlt className="submenu-icon" /> Estimations
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/invoices">
                <FaFileInvoice className="submenu-icon" /> Invoices
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/payments">
                <FaMoneyBillWave className="submenu-icon" /> Payments
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/analytics">
                <BsFillEyeSlashFill className="submenu-icon" />
                Analytics
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/activities">
                <FaChartLine className="submenu-icon" /> Activities
              </Link>
            </li>
          </ul>
        )}
      </ul>

      {/* Repeat the same pattern for other sections */}
    </div>
  );
};

export default Sidebar;
