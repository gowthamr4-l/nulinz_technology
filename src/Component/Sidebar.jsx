import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaTable,
  FaThLarge,
  FaUser,
  FaSignInAlt,
  FaLock
} from "react-icons/fa";
import "../Css/sidebar.css";

export default function Sidebar({ isOpen, setIsOpen, setCurrentPage }) {

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "NFT Marketplace", path: "/", icon: <FaShoppingCart /> },
    { name: "Tables", path: "/table", icon: <FaTable /> },
    { name: "Kanban", path: "/", icon: <FaThLarge /> },
    { name: "Profile", path: "/", icon: <FaUser /> },
    { name: "Sign In", path: "/login", icon: <FaSignInAlt /> },
  ];

  return (
    <>
      {/* Backdrop — tapping closes sidebar on mobile */}
      {isOpen && (
        <div className="sidebar-backdrop" onClick={() => setIsOpen(false)} />
      )}

      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <h5 className="logo">HORIZON FREE</h5>

        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
                onClick={() => {
                  setCurrentPage(item.name);
                  setIsOpen(false);
                }}
              >
                <span className="icon">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="upgrade-card">
          <div className="lock-icon">
            <FaLock />
          </div>
          <h6>Upgrade to PRO</h6>
          <p>Access all premium features</p>
        </div>
      </div>
    </>
  );
}