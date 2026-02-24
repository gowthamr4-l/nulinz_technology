import React from "react";
import "../Css/weeklyrevenue.css";

const data = [
    { day: 17, purple: 38, cyan: 25, light: 37 },
    { day: 18, purple: 32, cyan: 20, light: 48 },
    { day: 19, purple: 35, cyan: 28, light: 37 },
    { day: 20, purple: 42, cyan: 22, light: 36 },
    { day: 21, purple: 30, cyan: 26, light: 44 },
    { day: 22, purple: 36, cyan: 20, light: 44 },
];

const COLORS = {
    purple: "#4318ff", // Updated to match Horizon UI primary
    cyan: "#6ad2ff",
    light: "#eff4fb",
};

function topRoundedRect(x, y, w, h, r) {
    if (h <= 0) return "";
    r = Math.min(r, h / 2, w / 2);
    return `M${x + r},${y} H${x + w - r} Q${x + w},${y} ${x + w},${y + r} V${y + h} H${x} V${y + r} Q${x},${y} ${x + r},${y}Z`;
}

function plainRect(x, y, w, h) {
    if (h <= 0) return "";
    return `M${x},${y} H${x + w} V${y + h} H${x}Z`;
}

export default function WeeklyRevenue() {
    const svgW = 300;
    const svgH = 220;
    const paddingLeft = 10;
    const paddingRight = 10;
    const paddingTop = 10;
    const paddingBottom = 30;
    const chartH = svgH - paddingTop - paddingBottom;
    const barW = 12;
    const r = 6;

    const maxTotal = Math.max(...data.map((d) => d.purple + d.cyan + d.light));
    const totalW = svgW - paddingLeft - paddingRight;
    const slotW = totalW / data.length;

    return (
        <div className="weekly-revenue-card shadow-sm">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 px-1">
                <h5 className="fw-bold text-navy mb-0">Weekly Revenue</h5>
                <div className="chart-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="10" width="4" height="12" rx="2" fill="currentColor" />
                        <rect x="10" y="6" width="4" height="16" rx="2" fill="currentColor" />
                        <rect x="18" y="2" width="4" height="20" rx="2" fill="currentColor" />
                    </svg>
                </div>
            </div>

            {/* SVG Chart */}
            <div className="revenue-svg-wrapper">
                <svg
                    width="100%"
                    viewBox={`0 0 ${svgW} ${svgH}`}
                    preserveAspectRatio="xMidYMid meet"
                    style={{ overflow: "visible" }}
                >
                    {data.map((d, i) => {
                        const scale = chartH / maxTotal;
                        const purpleH = d.purple * scale;
                        const cyanH = d.cyan * scale;
                        const lightH = d.light * scale;

                        const cx = paddingLeft + slotW * i + slotW / 2;
                        const x = cx - barW / 2;
                        const baseY = paddingTop + chartH;

                        const purpleY = baseY - purpleH;
                        const cyanY = purpleY - cyanH;
                        const lightY = cyanY - lightH;

                        return (
                            <g key={d.day}>
                                <path d={plainRect(x, purpleY, barW, purpleH)} fill={COLORS.purple} />
                                <path d={plainRect(x, cyanY, barW, cyanH)} fill={COLORS.cyan} />
                                <path d={topRoundedRect(x, lightY, barW, lightH, r)} fill={COLORS.light} />
                                <text
                                    x={cx}
                                    y={baseY + 20}
                                    textAnchor="middle"
                                    fontSize="12"
                                    fontWeight="700"
                                    fill="#A3AED0"
                                    fontFamily="inherit"
                                >
                                    {d.day}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
}