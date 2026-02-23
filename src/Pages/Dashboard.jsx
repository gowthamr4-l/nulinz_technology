import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Card, Row, Col } from "react-bootstrap";
import Sidebar from "../Component/Sidebar";
import Header from "../Component/Header";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");

  /* Charts */
  const lineOptions = {
    chart: { toolbar: { show: false } },
    stroke: { curve: "smooth" },
    colors: ["#6a11cb"],
    xaxis: {
      categories: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"]
    }
  };

  const lineSeries = [
    { name: "Total Spent", data: [30, 40, 35, 50, 49, 60] }
  ];

  const barOptions = {
    chart: { toolbar: { show: false } },
    colors: ["#2575fc"],
    plotOptions: {
      bar: { borderRadius: 6, columnWidth: "40%" }
    },
    xaxis: {
      categories: ["17", "18", "19", "20", "21", "22", "23"]
    }
  };

  const barSeries = [
    { name: "Revenue", data: [44, 55, 41, 67, 22, 43, 21] }
  ];

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCurrentPage={setCurrentPage}
      />

      <div className="main-content">
        <Header
          setIsOpen={setIsOpen}
          currentPage={currentPage}
        />

        <div className="container-fluid">

          {/* Stats Cards */}
          <Row className="g-4 mb-4">
            {[
              { title: "Earnings", value: "$350.4" },
              { title: "Spend this month", value: "$642.39" },
              { title: "Sales", value: "$574.34" },
              { title: "New Tasks", value: "154" }
            ].map((item, index) => (
              <Col xl={3} md={6} sm={12} key={index}>
                <Card className="shadow-sm border-0 rounded-4 h-100">
                  <Card.Body>
                    <h6 className="text-muted">{item.title}</h6>
                    <h4 className="fw-bold">{item.value}</h4>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Charts */}
          <Row className="g-4">
            <Col lg={8} sm={12}>
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body>
                  <h5>Total Spent</h5>
                  <Chart
                    options={lineOptions}
                    series={lineSeries}
                    type="line"
                    height={300}
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} sm={12}>
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body>
                  <h5>Weekly Revenue</h5>
                  <Chart
                    options={barOptions}
                    series={barSeries}
                    type="bar"
                    height={300}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </div>
      </div>
    </>
  );
}