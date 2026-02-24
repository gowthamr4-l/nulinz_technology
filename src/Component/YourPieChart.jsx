import React from "react";
import Chart from "react-apexcharts";

export default function YourPieChart() {
  const options = {
    chart: {
      type: "pie",
      toolbar: { show: false },
      background: "transparent",
    },
    labels: ["Your files", "System", "Other"],
    colors: ["#4f46e5", "#67e8f9", "#e8edf5"],
    stroke: { width: 2, colors: ["#fff"] },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: { enabled: true, y: { formatter: (val) => `${val}%` } },
    plotOptions: {
      pie: { expandOnClick: false, dataLabels: { offset: 0 } },
    },
    states: {
      hover: { filter: { type: "lighten", value: 0.05 } },
      active: { filter: { type: "none" } },
    },
  };

  const series = [63, 25, 12];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "10px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        fontFamily: "'DM Sans', sans-serif",
        width: "100%",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: "16px", fontWeight: 700, color: "#1a1f36" }}>
          Your Pie Chart
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer",
            marginTop: "8px",
          }}
        >
          <span style={{ fontSize: "13px", color: "#6c48d7", fontWeight: 500 }}>
            Monthly
          </span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#6c48d7">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>

      {/* Chart */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <Chart options={options} series={series} type="pie" width="100%" />
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "16px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {[
          { label: "Your files", value: 63, color: "#4f46e5" },
          { label: "System", value: 25, color: "#67e8f9" },
          { label: "Other", value: 12, color: "#e8edf5", textColor: "#6c48d7" },
        ].map((item, idx) => (
          <div key={idx} style={{ textAlign: "center", minWidth: "80px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                justifyContent: "center",
                marginBottom: "4px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: item.color,
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  color: item.textColor || "#8a94a6",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </span>
            </div>
            <div style={{ fontSize: "22px", fontWeight: 800, color: "#1a1f36" }}>
              {item.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}