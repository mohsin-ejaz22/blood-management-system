import React from 'react';
import { Link } from 'react-router-dom';
import PatientSidebar from './PatientSidebar';

const PatientHome = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <PatientSidebar />
    </div>
  );
};
export default PatientHome;
