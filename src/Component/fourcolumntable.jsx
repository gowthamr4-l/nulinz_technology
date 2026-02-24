import React from "react";
import "../Css/four_column_table.css";

const rows = [
  { name: "Marketplace", progress: "17.5%", quantity: "2,458", date: "24.Jan.2021" },
  { name: "Venus PRO", progress: "10.8%", quantity: "1,485", date: "12.Jun.2021" },
  { name: "Uranus Kit", progress: "21.3%", quantity: "1,024", date: "5.Jan.2021" },
  { name: "Venus DS", progress: "31.5%", quantity: "858", date: "7.Mar.2021" },
  { name: "Venus 3D Asset", progress: "12.2%", quantity: "258", date: "17.Dec.2021" },
];

function SortIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="fct-sort-icon">
      <path d="M3 4L5 2L7 4M3 6L5 8L7 6" stroke="#a3aed0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FourColumnTable() {
  return (
    <div className="fct-card">
      {/* Header */}
      <div className="fct-header">
        <h2 className="fct-title">4-Column Table</h2>
        <button className="fct-menu-btn" aria-label="More options">
          <span /><span /><span />
        </button>
      </div>

      {/* Scrollable wrapper */}
      <div className="fct-table-wrapper">
        <table className="fct-table">
          <thead>
            <tr>
              {["Title", "Title", "Title", "Title"].map((h, i) => (
                <th key={i} className="fct-th">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="fct-tr">
                <td className="fct-td fct-name">{row.name}</td>
                <td className="fct-td fct-num">{row.progress}</td>
                <td className="fct-td fct-num">{row.quantity}</td>
                <td className="fct-td fct-date">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}