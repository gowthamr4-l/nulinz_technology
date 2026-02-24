import React from 'react';
import '../css/LessonCard.css';

const LessonCard = () => {
    return (
        <div className="card border-0 shadow-sm p-4 lesson-card" style={{ borderRadius: '25px', width: '340px' }}>
            <div className="d-flex align-items-center mb-4">
                <div className="fire-icon-box me-3">
                    🔥
                </div>
                <div>
                    <div className="text-muted small">Business Design</div>
                    <div className="fw-bold">New lesson is available</div>
                </div>
            </div>

            <h4 className="fw-bold text-dark mb-4 lh-base">
                What do you need to know to create better products?
            </h4>

            <div className="d-flex gap-4 mb-4">
                <div className="d-flex align-items-center text-muted small">
                    <i className="bi bi-stopwatch me-2 text-success fs-5"></i> 85 mins
                </div>
                <div className="d-flex align-items-center text-muted small">
                    <i className="bi bi-play-circle me-2 text-danger fs-5"></i> Video format
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="avatar-group">
                    <img src="https://i.pravatar.cc/150?u=1" alt="user" />
                    <img src="https://i.pravatar.cc/150?u=2" alt="user" />
                    <img src="https://i.pravatar.cc/150?u=3" alt="user" />
                    <img src="https://i.pravatar.cc/150?u=4" alt="user" />
                    <div className="avatar-more">18+</div>
                </div>
                <button className="btn btn-primary px-4 py-2 fw-bold" style={{ borderRadius: '12px', background: '#4f26ff' }}>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default LessonCard;