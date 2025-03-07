// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./leftbar.css";
import logoShort from "/logoShort.png";


const LeftBar = () => {
  return (
    <div className="sidebar1">
      <div className="logo-container">
        <img src={logoShort} alt="Logo" className="logo" />
      </div>
      <div className="menu">
        <Link to="./" className="menu-item">
          {/* <FontAwesomeIcon icon="fa-solid fa-fan" className="icon"/> */}
          <span>Dashboard</span>
        </Link>
        <Link to="../admin" className="menu-item">
          {/* <FontAwesomeIcon icon={"faBook"} className="icon" /> */}
          <span>All Courses</span>
        </Link>
        <Link to="../admin/users" className="menu-item">
          {/* <FontAwesomeIcon icon={"faSignOutAlt"} className="icon" /> */}
          <span>Users</span>
        </Link>
        <Link to="../admin/instructors" className="menu-item">
          {/* <FontAwesomeIcon icon={"faSignOutAlt"} className="icon" /> */}
          <span>Instructors</span>
        </Link>
        <Link to="../admin/purchases" className="menu-item">
          {/* <FontAwesomeIcon icon={"faSignOutAlt"} className="icon" /> */}
          <span>Purchases</span>
        </Link>
        <Link to="../admin/ela" className="menu-item">
          {/* <FontAwesomeIcon icon={"faSignOutAlt"} className="icon" /> */}
          <span>ElA</span>
        </Link>
        <Link to="/" className="menu-item">
          {/* <FontAwesomeIcon icon={"faSignOutAlt"} className="icon" /> */}
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default LeftBar;