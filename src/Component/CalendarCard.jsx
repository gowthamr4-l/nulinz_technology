import React from 'react';
import '../Css/calendarcard.css';

const CalendarCard = () => {
    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su'];

    // Array representing the dates in the image (including padding from March/May)
    const calendarDays = [
        { day: 29, type: 'prev' }, { day: 30, type: 'prev' }, { day: 31, type: 'prev' },
        { day: 1, type: 'current-highlight' }, { day: 2, type: 'current' }, { day: 3, type: 'current' }, { day: 4, type: 'current' },
        { day: 5, type: 'current' }, { day: 6, type: 'current' }, { day: 7, type: 'current' }, { day: 8, type: 'current' },
        { day: 9, type: 'current' }, { day: 10, type: 'current' }, { day: 11, type: 'current' },
        { day: 12, type: 'current' }, { day: 13, type: 'current' }, { day: 14, type: 'current' }, { day: 15, type: 'current' },
        { day: 16, type: 'current' }, { day: 17, type: 'current' }, { day: 18, type: 'current' },
        { day: 19, type: 'current' }, { day: 20, type: 'current' }, { day: 21, type: 'current' }, { day: 22, type: 'current' },
        { day: 23, type: 'current' }, { day: 24, type: 'current' }, { day: 25, type: 'current' },
        { day: 26, type: 'current' },
        { day: 27, type: 'range-start' }, { day: 28, type: 'range-mid' }, { day: 29, type: 'range-mid' }, { day: 30, type: 'range-end' },
        { day: 1, type: 'next' }, { day: 2, type: 'next' },
        // { day: 3, type: 'next' }, { day: 4, type: 'next' }, { day: 5, type: 'next' }, { day: 6, type: 'next' },
        // { day: 7, type: 'next' }, { day: 8, type: 'next' }, { day: 9, type: 'next' },
    ];

    return (
        <div className="calendar-card">
            <div className="calendar-header">
                <div className="dropdown month-dropdown">
                    April <span className="arrow"></span>
                </div>
                <div className="dropdown year-dropdown">
                    2021 <span className="arrow"></span>
                </div>
            </div>

            <div className="calendar-grid">
                {daysOfWeek.map(day => (
                    <div key={day} className="weekday-label">{day}</div>
                ))}

                {calendarDays.map((item, index) => (
                    <div key={index} className={`calendar-day ${item.type}`}>
                        <span className="day-number">{item.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarCard;