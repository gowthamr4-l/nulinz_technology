import React, { useState } from "react";

const defaultRows = [
    { name: "Horizon UI PRO", progress: 17.5, quantity: 2458, date: "24.Jan.2021", checked: false },
    { name: "Horizon UI Free", progress: 10.8, quantity: 1485, date: "12.Jun.2021", checked: false },
    { name: "Weekly Update", progress: 21.3, quantity: 1024, date: "5.Jan.2021", checked: true },
    { name: "Venus 3D Asset", progress: 31.5, quantity: 858, date: "7.Mar.2021", checked: true },
    { name: "Marketplace", progress: 12.2, quantity: 258, date: "17.Dec.2021", checked: false },
];

export default function CheckTable({ rows }) {
    const [data, setData] = useState(rows || defaultRows);

    const toggle = (i) => {
        setData(prev => prev.map((r, idx) => idx === i ? { ...r, checked: !r.checked } : r));
    };

    return (
        <div style={{
            background: "#fff", borderRadius: "20px", padding: "56px 24px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)", fontFamily: "'DM Sans', sans-serif", width: "100%",
        }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontWeight: 700, fontSize: "17px", color: "#1a1f36" }}>Check Table</span>
                <div style={{ cursor: "pointer", color: "#8a94a6" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                </div>
            </div>

            {/* Column headers */}
            <div style={{
                display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr 1fr",
                padding: "0 4px 8px", borderBottom: "1px solid #f0f2f5",
                fontSize: "11px", fontWeight: 600, color: "#8a94a6", textTransform: "uppercase", letterSpacing: "0.5px",
            }}>
                <span>NAME</span>
                <span>PROGRESS</span>
                <span>QUANTITY</span>
                <span>DATE</span>
            </div>

            {/* Rows */}
            {data.map((row, i) => (
                <div key={i} style={{
                    display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr 1fr",
                    alignItems: "center", padding: "12px 4px",
                    borderBottom: i < data.length - 1 ? "1px solid #f9fafb" : "none",
                }}>
                    {/* Name + checkbox */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                            onClick={() => toggle(i)}
                            style={{
                                width: "16px", height: "16px", borderRadius: "4px", cursor: "pointer", flexShrink: 0,
                                border: row.checked ? "none" : "1.5px solid #cbd5e1",
                                background: row.checked ? "#6c48d7" : "#fff",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                transition: "all 0.15s",
                            }}
                        >
                            {row.checked && (
                                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                                    <path d="M2 5L4 7.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1f36" }}>{row.name}</span>
                    </div>

                    {/* Progress */}
                    <span style={{ fontSize: "13px", color: "#4a5568", fontWeight: 500 }}>{row.progress}%</span>

                    {/* Quantity */}
                    <span style={{ fontSize: "13px", color: "#4a5568", fontWeight: 500 }}>{row.quantity.toLocaleString()}</span>

                    {/* Date */}
                    <span style={{ fontSize: "12px", color: "#8a94a6" }}>{row.date}</span>
                </div>
            ))}
        </div>
    );
}
