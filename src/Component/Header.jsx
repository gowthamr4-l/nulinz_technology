import React from "react";
import { FaSearch, FaBell, FaCog, FaBars } from "react-icons/fa";
import "../Css/header.css";

export default function Header({ currentPage, setIsOpen }) {
  return (
    <div className="header-wrapper">

      <div>
        <p className="breadcrumb">
          Pages / <span>{currentPage}</span>
        </p>
        <h2 className="page-title">{currentPage}</h2>
      </div>

      <div className="header-actions">

        <button
          className="toggle-btn d-lg-none"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>

        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div>

        <FaBell className="icon-btn" />
        <FaCog className="icon-btn" />

        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="avatar"
        />
      </div>
    </div>
  );
}