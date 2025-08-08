import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientHome from "./pages/patient/PatientHome";
import Navbar from "./components/Navbar"; // Make sure Navbar is imported
import Home from "./pages/Home";
import PatientRequestForm from "./pages/patient/PatientRequestForm";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <Navbar />

        <div className=" ">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/patient/patienthome" element={<PatientHome />} />
            <Route path="/patient/patienthome" element={<PatientHome />} />
            <Route path="/patient/request-form" element={<PatientRequestForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
