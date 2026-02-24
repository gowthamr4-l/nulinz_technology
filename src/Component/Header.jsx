import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsMoon, BsInfoCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "../Css/header.css";

export default function Header({ currentPage, setIsOpen }) {
  const displayTitle =
    currentPage?.toLowerCase() === "dashboard" ? "Main Dashboard" : currentPage;

  return (
    <div className="header-container d-flex justify-content-between align-items-center">
      {/* Title Section */}
      <div className="title-section">
        <p className="breadcrumb-text mb-0">
          Pages / <span className="current-path">{displayTitle}</span>
        </p>
        <h2 className="main-title fw-bold">{displayTitle}</h2>
      </div>

      {/* Responsive Action Bar */}
      <div className="action-bar d-flex align-items-center">
        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle-btn d-lg-none"
          onClick={() => setIsOpen(true)}
          aria-label="Toggle Navigation"
        >
          <div className="icon-wrapper">
            <FaBars />
          </div>
        </button>

        {/* Glassmorphism Search & Icon Container */}
        <div className="glass-container d-flex align-items-center">
          <div className="search-wrapper d-flex align-items-center">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>

          <IoNotificationsOutline className="header-icon" />
          <BsMoon className="header-icon" />
          <BsInfoCircle className="header-icon" />

          <img
            src="https://i.pravatar.cc/100?u=user"
            alt="user-avatar"
            className="header-avatar"
          />
        </div>
      </div>
    </div>
  );
}