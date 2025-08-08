import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import PatientHome from "../pages/patient/PatientHome";

const Navbar = () => {
  // const { user, removeUser } = useUser();
  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //   axios
  //     .post("http://localhost:10000/logout")
  //     .then((response) => {
  //       if (response) {
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: "You are logged out",
  //           showConfirmButton: false,
  //           timer: 1000,
  //         });
  //       }
  //       removeUser();
  //       navigate("/home");
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         position: "center",
  //         icon: "error",
  //         title: "Error logging out! Try again",
  //       });
  //     });
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-3 border-secondary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-primary" to="/home">
          Blood Management System
        </Link>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row gap-2 align-items-center">
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-1" to="/">
              <FaHome /> Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-1" to="/patient/patienthome">
              Patient <FaSignInAlt />
              {/* <PatientHome/> */}
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-1" to="/signup">
              Donor <FaSignInAlt />
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-1" to="/signup">
              Admin <FaSignInAlt />
            </Link>
          </li> */}

          {/* Uncomment below block to show logout and username when logged in */}
          {/* {user?._id && (
            <>
              <li className="nav-item">
                <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              <li className="nav-item">
                <span className="navbar-text d-flex align-items-center gap-1">
                  <BiUser /> {user.username}
                </span>
              </li>
            </>
          )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
