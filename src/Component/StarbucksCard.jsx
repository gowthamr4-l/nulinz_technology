import React from 'react';
import '../Css/starbuckscard.css';

const StarbucksCard = () => {
    return (
        <div className="starbucks-card">
            {/* Top Image */}
            <div className="starbucks-img-wrapper">
                <img
                    src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=400&auto=format&fit=crop"
                    alt="Starbucks Drink"
                    className="starbucks-main-img"
                />
                {/* Clock badge */}
                <div className="starbucks-timer-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                </div>
                {/* Starbucks logo overlapping */}
                <div className="starbucks-logo-wrap">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
                        alt="Starbucks Logo"
                        className="starbucks-logo"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="starbucks-body">
                <h5 className="starbucks-name">Starbucks</h5>
                <div className="starbucks-cashback">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8a94a6" strokeWidth="2" strokeLinecap="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>10% cashback & off</span>
                </div>
            </div>
        </div>
    );
};

export default StarbucksCard;