import React from "react";
import { BsCheckCircleFill, BsXCircleFill, BsExclamationTriangleFill, BsThreeDots } from "react-icons/bs";
import "../Css/complextable.css";

const ComplexTable = () => {
  const data = [
    { name: "Horizon UI PRO", status: "approved", date: "18 Apr 2021", progress: 75 },
    { name: "Horizon UI Free", status: "disabled", date: "18 Apr 2021", progress: 30 },
    { name: "Marketplace", status: "error", date: "20 May 2021", progress: 90 },
    { name: "Weekly Updates", status: "approved", date: "12 Jul 2021", progress: 50 },
  ];

  const statusIcons = {
    approved: <BsCheckCircleFill className="text-success me-2" />,
    disabled: <BsXCircleFill className="text-danger me-2" />,
    error: <BsExclamationTriangleFill className="text-warning me-2" />,
  };

  return (
    <div className="table-card card border-0 shadow-sm p-4" style={{ height: "381px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold text-navy mb-0">Complex Table</h5>
        <div className="more-btn">
          <BsThreeDots />
        </div>
      </div>

      {/* Desktop Table */}
      <div className="table-responsive d-none d-md-block">
        <table className="table table-borderless align-middle custom-table">
          <thead>
            <tr>
              <th className="text-muted small fw-bold">NAME</th>
              <th className="text-muted small fw-bold">STATUS</th>
              <th className="text-muted small fw-bold">DATE</th>
              <th className="text-muted small fw-bold">PROGRESS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td className="fw-bold text-navy">{row.name}</td>
                <td>
                  <div className="d-flex align-items-center fw-bold text-navy">
                    {statusIcons[row.status]}
                    {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                  </div>
                </td>
                <td className="fw-bold text-navy">{row.date}</td>
                <td style={{ width: "150px" }}>
                  <div className="progress custom-progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${row.progress}%` }}
                      aria-valuenow={row.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="d-block d-md-none">
        {data.map((row, idx) => (
          <div key={idx} className="mobile-table-card mb-3 p-3 border rounded">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-bold text-navy">{row.name}</span>
              <div className="d-flex align-items-center fw-bold">
                {statusIcons[row.status]}
                {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-1">
              <span className="text-muted small">Date:</span>
              <span className="fw-bold text-navy">{row.date}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-muted small">Progress:</span>
              <div className="progress w-50 custom-progress mb-0">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${row.progress}%` }}
                  aria-valuenow={row.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span className="ms-2 fw-bold">{row.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplexTable;