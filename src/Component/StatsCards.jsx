import React from "react";
import "../Css/statscard.css";

const statsData = [
    {
        title: "Earnings",
        value: "$350.4",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#4318ff">
                <rect x="2" y="10" width="4" height="12" rx="2" />
                <rect x="10" y="6" width="4" height="16" rx="2" />
                <rect x="18" y="2" width="4" height="20" rx="2" />
            </svg>
        ),
        iconClass: "indigo",
    },
    {
        title: "Spend this month",
        value: "$642.39",
        icon: <span style={{ fontSize: "22px", fontWeight: 700, color: "#4318ff" }}>$</span>,
        iconClass: "indigo",
    },
    {
        title: "Sales",
        value: "$574.34",
        growth: "+33%",
        icon: null,
    },
    {
        title: "Your balance",
        value: "$1,000",
        isCurrency: true,
        icon: null,
    },
    {
        title: "New Tasks",
        value: "154",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        ),
        iconClass: "blue",
    },
    {
        title: "Total Projects",
        value: "2935",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#4318ff">
                <path d="M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V8l-4-4H8z" />
                <path d="M14 4v4h4M9 13h6M9 17h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
        ),
        iconClass: "indigo",
    },
];

export default function StatsCards() {
    return (
        <>
            {statsData.map((item, index) => (
                <div key={index} className="stat-card">
                    <div className="stat-card-body">
                        {/* Icon */}
                        {item.icon && (
                            <div className={`stat-icon-box ${item.iconClass}`}>
                                {item.icon}
                            </div>
                        )}

                        {/* Text */}
                        <div className="stat-text">
                            <p className="stat-title">{item.title}</p>
                            <div className="stat-value-row">
                                <h5 className="stat-value">{item.value}</h5>
                                {item.growth && (
                                    <span className="growth-badge">
                                        {item.growth}
                                        <span className="growth-sub"> since last month</span>
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Flag dropdown for balance */}
                        {item.isCurrency && (
                            <div className="stat-flag">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                                    alt="US Flag"
                                    className="flag-img"
                                />
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="#8a94a6">
                                    <path d="M7 10l5 5 5-5z" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}