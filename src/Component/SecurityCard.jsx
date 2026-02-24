import React from 'react';
import '../Css/security_card.css';
import fingerprintIcon from "../assets/fingerprint.png"; // adjust path

const SecurityCard = () => {
    return (
        <div className="card security-card shadow-sm border-0 p-4">
            {/* Fingerprint Icon Section */}
            <div className="icon-container mb-4">
                <img
                    src={fingerprintIcon}
                    alt="Fingerprint Icon"
                    style={{ width: "100px", height: "100px" }}
                />
            </div>

            {/* Text Content */}
            <div className="content-section mb-4" style={{paddingTop: "30px"}}>
                <h4 className="fw-bold card-title mb-2">
                    Control card security in-app with a tap
                </h4>
                <p className="text-muted card-description small">
                    Discover our cards benefits, with one tap.
                </p>
            </div>

            {/* Action Button */}
            <button className="btn btn-indigo w-100 py-2 fw-bold">
                Cards
            </button>
        </div>
    );
};

export default SecurityCard;