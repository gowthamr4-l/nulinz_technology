import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsMoon, BsInfoCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "../Css/header.css";

export default function Header({ currentPage, setIsOpen }) {
  const displayTitle =
    currentPage?.toLowerCase() === "dashboard"
      ? "Main Dashboard"
      : currentPage;

  return (
    <div className="header-container d-flex justify-content-between align-items-center px-3 py-2">

      {/* Title Section */}
      <div className="title-section">
        <p className="breadcrumb-text mb-0">
          Pages / <span className="current-path">{displayTitle}</span>
        </p>
        <h2 className="main-title fw-bold mb-0">{displayTitle}</h2>
      </div>

      {/* Action Bar */}
      <div className="action-bar d-flex align-items-center gap-3">

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle-btn d-lg-none"
          onClick={() => setIsOpen(true)}
          aria-label="Toggle Navigation"
        >
          <FaBars size={20} />
        </button>

        {/* Search + Icons */}
        <div className="glass-container d-flex align-items-center gap-3">

          {/* Search */}
          <div className="search-wrapper d-flex align-items-center">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
          </div>

          {/* Icons */}
          <IoNotificationsOutline className="header-icon" size={20} />
          <BsMoon className="header-icon" size={18} />
          <BsInfoCircle className="header-icon" size={18} />

          {/* Avatar */}
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