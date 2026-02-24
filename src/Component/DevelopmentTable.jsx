import React from "react";
import "../Css/development_table.css";

const ICON_COLOR = "#c8d8ea";

// Flat light-blue icons — no background boxes
const AppleIcon = () => (
  <svg width="15" height="18" viewBox="0 0 814 1000" fill={ICON_COLOR}>
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.8-150.3-109.2C85.7 752.6 45 642 45 535.2c0-179.1 116.4-274 230.8-274 60.7 0 111.5 39.9 149.5 39.9 36.3 0 93.3-42.2 161.6-42.2 25.7 0 108.2 2.6 168.9 80.3zM554.1 158.4c27.3-36.9 47.5-89.1 47.5-141.3 0-7.1-.6-14.3-1.9-20.1-44.9 1.9-98.4 30.4-130.4 71.9-24.3 29.7-47.5 81.9-47.5 134.8 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 40.2 0 89.7-26.8 116.8-64.7z" />
  </svg>
);

const AndroidIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={ICON_COLOR}>
    <path d="M6.18 9.59a.86.86 0 1 0 0 1.72.86.86 0 0 0 0-1.72zm11.64 0a.86.86 0 1 0 0 1.72.86.86 0 0 0 0-1.72zM16.9 4.02l1.44-2.5a.3.3 0 0 0-.52-.3L16.3 3.77A8.9 8.9 0 0 0 12 2.9c-1.5 0-2.92.36-4.18.98L6.18 1.22a.3.3 0 1 0-.52.3l1.44 2.5A8.94 8.94 0 0 0 2.9 12h18.2a8.94 8.94 0 0 0-4.2-7.98zM12 21.1c-1.82 0-3.3-1.48-3.3-3.3h6.6c0 1.82-1.48 3.3-3.3 3.3zm-7.2-5.2a1.1 1.1 0 0 1-1.1-1.1v-5.5a1.1 1.1 0 0 1 2.2 0v5.5a1.1 1.1 0 0 1-1.1 1.1zm14.4 0a1.1 1.1 0 0 1-1.1-1.1v-5.5a1.1 1.1 0 1 1 2.2 0v5.5a1.1 1.1 0 0 1-1.1 1.1zm-1.1-1.1H3.9V12h16.2v2.8h-2z" />
  </svg>
);

const WindowsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 88 88" fill={ICON_COLOR}>
    <path d="M0 12.4L35.7 7.5V42H0zM40.3 6.8L88 0v42H40.3zM0 46H35.7V80.5L0 75.6zM40.3 46H88V88L40.3 81.2z" />
  </svg>
);

// Each row defines which icons to show
const ALL_ICONS = [<AppleIcon />, <AndroidIcon />, <WindowsIcon />];

function StatusIcons({ count }) {
  return (
    <div className="dt-status-icons">
      {ALL_ICONS.slice(0, count).map((icon, i) => (
        <span key={i} className="dt-status-icon">{icon}</span>
      ))}
    </div>
  );
}

function ProgressCell({ value, color }) {
  return (
    <div className="dt-progress-wrap">
      <span className="dt-progress-pct">{value}%</span>
      <div className="dt-progress-track">
        <div className="dt-progress-bar" style={{ width: `${value}%`, background: color }} />
      </div>
    </div>
  );
}

function SortIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="dt-sort-icon">
      <path d="M3 4L5 2L7 4M3 6L5 8L7 6" stroke="#a3aed0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const rows = [
  { name: "Marketplace", icons: 3, date: "12.Jan.2021", progress: 75.5, color: "#4318ff" },
  { name: "Venus DB PRO", icons: 1, date: "21.Feb.2021", progress: 35.4, color: "#4318ff" },
  { name: "Venus DS", icons: 2, date: "13.Mar.2021", progress: 25, color: "#4318ff" },
  { name: "Venus 3D Asset", icons: 2, date: "24.Jan.2021", progress: 100, color: "#4318ff" },
  { name: "Uranus", icons: 2, date: "21.Sep.2021", progress: 12.2, color: "#e53e3e" },
  { name: "Uranus", icons: 2, date: "21.Sep.2021", progress: 12.2, color: "#e53e3e" },
  { name: "Uranus", icons: 2, date: "21.Sep.2021", progress: 12.2, color: "#e53e3e" },
  { name: "Uranus", icons: 2, date: "21.Sep.2021", progress: 12.2, color: "#e53e3e" },
  { name: "Uranus", icons: 2, date: "21.Sep.2021", progress: 12.2, color: "#e53e3e" },
  { name: "Uranus", icons: 2, date: "21.Sep.2021", progress: 12.2, color: "#e53e3e" },
  { name: "Uranus", icons: 2, date: "21.Sep.2021", progress: 12.2, color: "#e53e3e" },
];

export default function DevelopmentTable() {
  return (
    <div className="dt-card">
      <div className="dt-header">
        <h2 className="dt-title">Development Table</h2>
        <button className="dt-menu-btn" aria-label="More options">
          <span /><span /><span />
        </button>
      </div>

      <div className="dt-table-wrapper">
        <table className="dt-table">
          <thead>
            <tr>
              {["Name", "Status", "Date", "Progress"].map((h, i) => (
                <th key={i} className="dt-th">{h} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="dt-tr">
                <td className="dt-td dt-name">{row.name}</td>
                <td className="dt-td"><StatusIcons count={row.icons} /></td>
                <td className="dt-td dt-date">{row.date}</td>
                <td className="dt-td"><ProgressCell value={row.progress} color={row.color} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}