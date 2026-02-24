import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Table from "./Pages/Table";
import Login from "./Pages/Login";


function App() {
  return (
    <Router basename="/nulinz_technology">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table" element={<Table />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;