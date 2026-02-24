import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Header from "../Component/Header";
import DevelopmentTable from "../Component/DevelopmentTable";
import CheckTable from "../Component/checkingtable";
import ComplexTable from "../Component/comtable";
import FourColumnTable from "../Component/fourcolumntable";
import "../Css/table.css";

function Table() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Tables");

  return (
    <div className="layout-container">

      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCurrentPage={setCurrentPage}
      />

      {/* Main Content */}
      <div className="main-content">
        <Header currentPage={currentPage} setIsOpen={setIsOpen} />

        {/* Responsive Grid */}
        <div className="table-grid">
          <DevelopmentTable />
          <CheckTable />
          <FourColumnTable />
          <ComplexTable />
        </div>
      </div>
    </div>
  );
}

export default Table;