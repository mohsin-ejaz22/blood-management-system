import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PatientSidebar from './UserSidebar';
import { FaSyncAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const UserHome = () => {
  const [stats, setStats] = useState({
    requestMade: "",
    pending: "",
    approved: "",
    rejected: "",
  });

  // useEffect(() => {
  //   const fetchDashboardStats = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:9000/patient/dashboard-stats');
  //       setStats(response.data);
  //     } catch (error) {
  //       console.error('Failed to fetch dashboard stats:', error);
  //     }
  //   };

  //   fetchDashboardStats();
  // }, []);

  return (
    <div className="d-flex bg-light">
      <PatientSidebar />
      <div className="container mt-5">
        <div className="row justify-content-center g-4">
          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <FaSyncAlt className="text-primary fs-3" />
                <h5 className="card-title mt-2">Request Made</h5>
                <p className="card-text fs-4">{stats.requestMade}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <FaSyncAlt className="text-primary fs-3" />
                <h5 className="card-title mt-2">Pending Request</h5>
                <p className="card-text fs-4">{stats.pending}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <FaCheckCircle className="text-primary fs-3" />
                <h5 className="card-title mt-2">Approved Request</h5>
                <p className="card-text fs-4">{stats.approved}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <FaTimesCircle className="text-primary fs-3" />
                <h5 className="card-title mt-2">Rejected Request</h5>
                <p className="card-text fs-4">{stats.rejected}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
