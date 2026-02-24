import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Header from "../Component/Header";
import StatsCards from "../Component/StatsCards";
import StatsChartCard from "../Component/StatsChartCard";
import WeeklyRevenue from "../Component/WeeklyRevenue";
import CheckTable from "../Component/CheckTable";
import DailyTraffic from "../Component/DailyTraffic";
import YourPieChart from "../Component/YourPieChart";
import ComplexTable from "../Component/ComplexTable";
import TasksCard from "../Component/TasksCard";
import CalendarCard from "../Component/CalendarCard";
import LessonCard from "../Component/LessonCard";
import TeamCard from "../Component/TeamCard";
import SecurityCard from "../Component/SecurityCard";
import StarbucksCard from "../Component/StarbucksCard";
import "../Css/dashboard.css";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");

  return (
    <>
      {/* Sidebar overlay for mobile */}
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <Sidebar setIsOpen={setIsOpen} setCurrentPage={setCurrentPage} />
      </div>

      {/* Main content */}
      <div className="main-content">
        <Header setIsOpen={setIsOpen} currentPage={currentPage} />

        <div className="dashboard-container">

          {/* ROW 1 — Stats Cards */}
          <div className="stats-cards-grid">
            <StatsCards />
          </div>

          {/* ROW 2 — Stats Chart + Weekly Revenue */}
          <div className="row-chart-revenue">
            <StatsChartCard />
            <WeeklyRevenue />
          </div>

          {/* ROW 3 — Check Table + Daily Traffic + Pie Chart */}
          <div className="row-table-traffic-pie">
            <div className="check-table">
              <CheckTable />
            </div>
            <div>
              <DailyTraffic />
            </div>
          </div>
          <div className="row-table-traffic-pie2">
            <div className="your-pie-chart">
              <YourPieChart />
            </div>
            <div className="complex-table">
              <ComplexTable />
            </div>
          </div>
          {/* </div> */}

          {/* ROW 4 — Complex Table + Tasks + Calendar */}
          <div className="row-complex-tasks-calendar">

            <div>
              <TasksCard />
            </div>
            <div className="calendar_card">
              <CalendarCard />
            </div>
            <div>
              <LessonCard />
            </div>
          </div>

          {/* ROW 5 — Lesson + Team + Security + Starbucks */}
          <div className="row-bottom">

            <TeamCard />
            <SecurityCard />
            <StarbucksCard />
          </div>

        </div>
      </div>
    </>
  );
}