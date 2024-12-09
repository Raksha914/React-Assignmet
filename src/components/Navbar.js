import React from "react";
import { Navbar, Form, Button, Dropdown } from "react-bootstrap";
import { BsSun, BsGear, BsBell, BsPersonCircle } from "react-icons/bs";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3 py-2 border-bottom">
      {/* Logo Section */}
      <Navbar.Brand href="#" className="d-flex align-items-center" id="logo">
        <img
          src="https://crms.dreamstechnologies.com/html/template/assets/img/logo.svg"
          alt="Logo"
          className="ms-4"
          style={{ width: "120px", height: "40px" }}
        />
      </Navbar.Brand>

      {/* Toggle Button for Small Screens */}
      <Button
        variant="outline-secondary"
        className="d-lg-none ms-auto me-2"
        style={{ border: "none" }}
      >
        <i className="bi bi-list"></i>
      </Button>

      {/* Search Bar */}
      <Form className="d-none d-lg-flex w-50 mx-auto">
        {/* <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary">
          <i className="bi bi-search"></i>
        </Button> */}
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span className="input-group-text" id="basic-addon1"><i class="bi bi-search"></i>
          </span>
        </div>
      </Form>

      {/* Icons Section */}
      <div className="d-flex align-items-center ms-auto">
        {/* Light/Dark Mode Toggle */}
        <Button variant="outline-secondary" className="me-2">
          <BsSun />
        </Button>

        {/* Settings */}
        <Button variant="outline-secondary" className="me-2">
          <BsGear />
        </Button>

        {/* Notifications */}
        <Dropdown className="me-2">
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            <BsBell />
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-circle">
              13
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Notification 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Notification 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* User Profile */}
        <Dropdown>
          <Dropdown.Toggle
            variant="outline-secondary"
            id="dropdown-profile"
            className="d-flex align-items-center"
          >
            <BsPersonCircle size={24} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
