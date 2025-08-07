import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientHome from "./pages/patient/PatientHome";
import Navbar from "./components/Navbar"; // Make sure Navbar is imported
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <Navbar />

        <div className=" ">
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/patient/home" element={<PatientHome />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
