import React, { useContext } from "react";
import { BsSun, BsGear, BsBell, BsPersonCircle,BsFillGridFill} from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme/themeContext";
import "../theme/theme.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar px-3 py-2 border-bottom fixed-top ${
        theme === "dark" ? "navbar-custom-dark" : "navbar-custom-light"
      }`}
      style={{ zIndex: "999" }}
    >
      {/* Logo Section */}
      <a
        href="#index"
        className="navbar-brand d-flex align-items-center"
        id="logo"
      >
        <img
          src="https://crms.dreamstechnologies.com/html/template/assets/img/logo.svg"
          alt="Logo"
          className="ms-4"
          style={{ width: "120px", height: "40px" }}
        />
      </a>

      {/* Toggle Button for Small Screens */}
      <button
        className="navbar-toggler d-lg-none ms-auto me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ border: "none" }}
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Search Bar */}
      <form className="d-none d-lg-flex w-50 mx-auto">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
          />
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </form>

      {/* Icons Section */}
      <div className="d-flex align-items-center ms-auto">
        {/* Light/Dark Mode Toggle */}
        <button
          className="btn btn-outline-secondary me-2"
          onClick={toggleTheme}
        >
          <BsSun />
        </button>

        {/* Settings */}
        <button className="btn btn-outline-secondary me-2">
          <BsGear />
        </button>

        {/* piechart */}
        <button className="btn btn-outline-secondary me-2">
        <AiOutlinePieChart />
        </button>

        {/* Notifications */}
        <div className="dropdown me-2">
          <button
            className="btn btn-outline-secondary position-relative"
            type="button"
            id="dropdownNotifications"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsBell />
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
              13
            </span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownNotifications">
            <li>
              <a className="dropdown-item" href="#/action-1">
                Notification 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/action-2">
                Notification 2
              </a>
            </li>
          </ul>
        </div>

        {/* User Profile */}
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownProfile"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsPersonCircle size={24} />
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownProfile"
          >
            <li className="d-flex px-2 align-items-center">
            <BsPersonCircle />
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
            </li>
            <li className="d-flex px-2 align-items-center">
            <BsFillGridFill />
              <a className="dropdown-item" href="#/settings">
                dashboard
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#/logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
