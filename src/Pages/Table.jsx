import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Header from "../Component/Header";
import DevelopmentTable from "../Component/DevelopmentTable";
import CheckTable from "../Component/checkingtable";
import ComplexTable from "../Component/comtable";
import FourColumnTable from "../Component/fourcolumntable";

function Table() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Tables"); // <-- current page name

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%", backgroundColor: "#f4f7fe" }}>

      {/* Sidebar */}
      <div style={{ width: "260px", height: "100vh" }}>
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", overflow: "auto" }}>
        <Header currentPage={currentPage} setIsOpen={setIsOpen} /> {/* <-- pass currentPage */}

        {/* Table Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "20px",
          }}
        >
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