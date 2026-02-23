import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router basename="/nulinz_technology">
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;