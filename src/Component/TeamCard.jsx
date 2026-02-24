import React from 'react';

const TeamCard = () => {
    const members = [
        { name: "Adela Parkson", role: "Creative Director", img: "https://i.pravatar.cc/100?u=a" },
        { name: "Christian Mad", role: "Product Designer", img: "https://i.pravatar.cc/100?u=b" },
        { name: "Jason Statham", role: "Junior Graphic Designer", img: "https://i.pravatar.cc/100?u=c" }
    ];

    return (
        <div className="card border-0 shadow-sm p-4 custom-card-radius" style={{ width: '340px', borderRadius: '25px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold text-dark-blue mb-0">Team members</h5>
                <button className="btn btn-indigo-light btn-sm rounded-3">
                    <i className="bi bi-plus-lg"></i>
                </button>
            </div>

            {members.map((m, i) => (
                <div key={i} className="card border-0 shadow-sm p-3 mb-3 member-item-card">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img src={m.img} className="rounded-circle me-3" width="50" height="50" alt={m.name} />
                            <div>
                                <div className="fw-bold text-dark-blue">{m.name}</div>
                                <div className="text-muted small">{m.role}</div>
                            </div>
                        </div>
                        <i className="bi bi-three-dots-vertical text-muted cursor-pointer"></i>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamCard;