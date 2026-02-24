import React, { useState } from "react";
import "../Css/taskscard.css";

const TasksCard = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Landing Page Design", completed: false },
        { id: 2, title: "Dashboard Builder", completed: true },
        { id: 3, title: "Mobile App Design", completed: true },
        { id: 4, title: "Illustrations", completed: false },
        { id: 5, title: "Promotional LP", completed: true },
    ]);

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="tasks-card">
            <div className="card-header">
                <div className="header-left">
                    <div className="header-checkbox">
                        <i className="check-icon-main">✓</i>
                    </div>
                    <span className="header-title">Tasks</span>
                </div>
                <button className="more-btn">•••</button>
            </div>
            
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id} className={`task-item ${task.completed ? "active" : "inactive"}`}>
                        <div className="task-content" onClick={() => toggleTask(task.id)}>
                            <div className={`custom-checkbox ${task.completed ? "checked" : ""}`}>
                                {task.completed && <span>✓</span>}
                            </div>
                            <span className="task-text">{task.title}</span>
                        </div>
                        <div className="drag-handle">
                            <span></span><span></span>
                            <span></span><span></span>
                            <span></span><span></span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksCard;