import React from "react";
import "../Css/complex_table.css";

const rows = [
  { name: "Marketplace", status: "Approved", date: "24.Jan.2021", progress: 75 },
  { name: "Venus Dashboard Builder", status: "Disable", date: "30.Dec.2021", progress: 35 },
  { name: "Venus Design System", status: "Error", date: "20.May.2021", progress: 55 },
  { name: "Uranus", status: "Approved", date: "12.Jul.2021", progress: 30 },
];

const statusConfig = {
  Approved: {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#01b574" />
        <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#01b574",
  },
  Disable: {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#e53e3e" />
        <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: "#e53e3e",
  },
  Error: {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#f6ad55" />
        <path d="M12 7v6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="12" cy="16.5" r="1.2" fill="#fff" />
      </svg>
    ),
    color: "#f6ad55",
  },
};

const progressColors = {
  Approved: "#4318ff",
  Disable: "#e53e3e",
  Error: "#4318ff",
};

function SortIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="ct-sort-icon">
      <path d="M3 4L5 2L7 4M3 6L5 8L7 6" stroke="#a3aed0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ComplexTable() {
  return (
    <div className="ct-card">
      {/* Header */}
      <div className="ct-header">
        <h2 className="ct-title">Complex Table</h2>
        <button className="ct-menu-btn" aria-label="More options">
          <span /><span /><span />
        </button>
      </div>

      {/* Table */}
      <div className="ct-table-wrapper">
        <table className="ct-table">
          <thead>
            <tr>
              {["Title", "Title", "Title", "Title"].map((h, i) => (
                <th key={i} className="ct-th">{h} <SortIcon /></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const s = statusConfig[row.status];
              const barColor = progressColors[row.status];
              return (
                <tr key={i} className="ct-tr">
                  {/* Name */}
                  <td className="ct-td ct-name">{row.name}</td>

                  {/* Status badge */}
                  <td className="ct-td">
                    <div className="ct-status">
                      {s.icon}
                      <span className="ct-status-text" style={{ color: s.color }}>
                        {row.status}
                      </span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="ct-td ct-date">{row.date}</td>

                  {/* Progress bar */}
                  <td className="ct-td">
                    <div className="ct-progress-track">
                      <div
                        className="ct-progress-bar"
                        style={{ width: `${row.progress}%`, background: barColor }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}