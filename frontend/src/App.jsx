import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import UserHome from "./pages/user/UserHome";
import UserRequestForm from "./pages/user/UserRequestForm";
import LoginUser from "./pages/user/LoginUser";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <Navbar />

        <div className=" ">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/user/userhome" element={<UserHome />} />
            <Route path="/user/request-form" element={<UserRequestForm />} />
            <Route path="/user/login" element={<LoginUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
