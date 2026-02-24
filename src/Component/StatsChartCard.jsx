import React from "react";
import Chart from "react-apexcharts";

export default function StatsChartCard({
    title = "Total Spent",
    amount = "$37.5K",
    change = "+2.45%",
    subtitle = "This month",
    status = "On track",
    chartHeight = 190,
}) {
    const chartOptions = {
        chart: {
            type: "area",
            toolbar: { show: false },
            zoom: { enabled: false },
            animations: { enabled: true },
            sparkline: { enabled: false },
        },
        stroke: { curve: "smooth", width: [3, 3] },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                opacityFrom: [0.25, 0.1],
                opacityTo: [0.05, 0.0],
                stops: [0, 100],
            },
        },
        tooltip: {
            enabled: true,
            theme: "dark",
            custom: ({ series, seriesIndex, dataPointIndex }) => {
                const val = series[seriesIndex][dataPointIndex];
                return `<div style="background:#4f46e5;color:#fff;padding:5px 10px;border-radius:8px;font-size:12px;font-weight:600;font-family:inherit;">$${val.toFixed(2)}</div>`;
            },
            marker: { show: false },
        },
        markers: {
            size: [0, 0],
            hover: { size: 5 },
            discrete: [{
                seriesIndex: 0, dataPointIndex: 2,
                fillColor: "#fff", strokeColor: "#4f46e5", size: 5, shape: "circle",
            }],
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: ["SEP", "OCT", "NOV", "DEC", "JAN"],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                style: {
                    colors: "#b0b7c3",
                    fontSize: "10px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                },
            },
        },
        yaxis: { show: false },
        grid: { show: false },
        colors: ["#4f46e5", "#67e8f9"],
        legend: { show: false },
    };

    const chartSeries = [
        { name: "This period", data: [42, 38, 55, 35, 65, 60] },
        { name: "Last period", data: [28, 38, 30, 42, 35, 50] },
    ];

    return (
        <div style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "20px 0 0 20px",
            boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
            fontFamily: "'DM Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            minHeight: "200px",
            overflow: "hidden",
            width: "100%",
        }}>
            {/* Left Info Panel */}
            <div style={{
                minWidth: "160px",
                maxWidth: "160px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingBottom: "20px",
                paddingRight: "8px",
                flexShrink: 0,
            }}>
                {/* Badge */}
                <div style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    background: "#f4f5f7", borderRadius: "10px",
                    padding: "4px 10px", marginBottom: "16px", width: "fit-content",
                }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span style={{ fontSize: "12px", color: "#555", fontWeight: 500 }}>{subtitle}</span>
                </div>

                {/* Amount */}
                <div style={{
                    fontSize: "26px", fontWeight: 800, color: "#1a1f36",
                    lineHeight: 1.1, marginBottom: "4px", letterSpacing: "-1px",
                }}>
                    {amount}
                </div>

                {/* Title + change */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "12px", color: "#8a94a6" }}>{title}</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#22c55e", display: "flex", alignItems: "center", gap: "2px" }}>
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                            <path d="M5 1L9 5H6V9H4V5H1L5 1Z" fill="#22c55e" />
                        </svg>
                        {change}
                    </span>
                </div>

                {/* Status */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{
                        width: "18px", height: "18px", borderRadius: "50%",
                        background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5L4.5 7.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#22c55e" }}>{status}</span>
                </div>
            </div>

            {/* Right Chart — takes remaining space */}
            <div style={{ flex: 1, minWidth: 0, marginRight: 0, marginBottom: "-4px", overflow: "hidden" }}>
                <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "16px", marginBottom: "-8px" }}>
                    <div style={{
                        background: "#ede9fb", borderRadius: "10px",
                        width: "32px", height: "32px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="10" width="4" height="12" rx="2" fill="#6c48d7" />
                            <rect x="10" y="6" width="4" height="16" rx="2" fill="#6c48d7" />
                            <rect x="18" y="2" width="4" height="20" rx="2" fill="#6c48d7" />
                        </svg>
                    </div>
                </div>
                <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="area"
                    height={chartHeight}
                    width="100%"
                />
            </div>
        </div>
    );
}