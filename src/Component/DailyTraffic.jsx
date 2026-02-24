import React from "react";
import Chart from "react-apexcharts";

export default function DailyTraffic() {
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      zoom: { enabled: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15px",
        borderRadius: 8,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        gradientToColors: ["#c4b5fd"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    colors: ["#6c48d7"],
    xaxis: {
      categories: ["00", "04", "08", "12", "14", "16", "18"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: "#aab4be",
          fontSize: "12px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
        },
      },
    },
    yaxis: { show: false },
    grid: { show: false },
    legend: { show: false },
    stroke: { show: false },
    tooltip: {
      theme: "light",
      y: { formatter: (val) => `${val} visitors` },
    },
  };

  const series = [
    {
      name: "Visitors",
      data: [65, 45, 90, 58, 72, 98, 30],
    },
  ];

  return (
    <div style={{
      background: "#fff",
      borderRadius: "20px",
      padding: "20px 16px 4px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      fontFamily: "'DM Sans', sans-serif",
      width: "100%",
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
        <span style={{ fontSize: "13px", color: "#8a94a6", fontWeight: 500 }}>Daily Traffic</span>
        <span style={{ fontSize: "13px", fontWeight: 700, color: "#22c55e", display: "flex", alignItems: "center", gap: "3px" }}>
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M5 1L9 5H6V9H4V5H1L5 1Z" fill="#22c55e" />
          </svg>
          +2.45%
        </span>
      </div>

      {/* Visitor count */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "4px" }}>
        <span style={{ fontSize: "32px", fontWeight: 800, color: "#1a1f36", letterSpacing: "-1px", lineHeight: 1 }}>
          2.579
        </span>
        <span style={{ fontSize: "14px", color: "#8a94a6", fontWeight: 500 }}>Visitors</span>
      </div>

      {/* Chart */}
      <Chart options={options} series={series} type="bar" height={300} width="100%" />
    </div>
  );
}
