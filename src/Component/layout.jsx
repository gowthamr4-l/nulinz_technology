import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");

  return (
    <div className="d-flex">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCurrentPage={setCurrentPage}
      />

      <div className="main-content w-100">
        <Header
          currentPage={currentPage}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}