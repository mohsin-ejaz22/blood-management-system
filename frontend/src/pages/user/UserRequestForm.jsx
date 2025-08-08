import React, { useState } from 'react';
import axios from 'axios';
import UserSidebar from './UserSidebar';

const UserRequestForm = () => {
  const [formData, setFormData] = useState({
    Patientname: '',
    age: '',
    bloodgroup: '',
    disease: '',
    doctorname: '',
    address: '',
    mobile: '',
    profilepic: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const response = await axios.post('http://localhost:9000/request/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Request submitted successfully');
      console.log(response.data);
    } catch (err) {
      console.error('Error submitting request:', err);
      alert('Failed to submit request');
    }
  };

  return (
    <div className='d-flex'>

     <UserSidebar/>
   
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h4 className="text-center mb-4">Patient Request Form</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="form-label">Patient Name</label>
                <input type="text" name="Patientname" className="form-control" required onChange={handleChange} />
              </div>

              <div className="mb-2">
                <label className="form-label">Age</label>
                <input type="number" name="age" className="form-control" required onChange={handleChange} />
              </div>

              <div className="mb-2">
                <label className="form-label">Blood Group</label>
                <input type="text" name="bloodgroup" className="form-control" required onChange={handleChange} />
              </div>

              <div className="mb-2">
                <label className="form-label">Disease</label>
                <input type="text" name="disease" className="form-control" required onChange={handleChange} />
              </div>

              <div className="mb-2">
                <label className="form-label">Doctor Name</label>
                <input type="text" name="doctorname" className="form-control" onChange={handleChange} placeholder="Optional" />
              </div>

              <div className="mb-2">
                <label className="form-label">Address</label>
                <textarea name="address" className="form-control" required onChange={handleChange} rows="2"></textarea>
              </div>

              <div className="mb-2">
                <label className="form-label">Mobile</label>
                <input type="number" name="mobile" className="form-control" required onChange={handleChange} />
              </div>

              <div className="mb-2">
                <label className="form-label">Profile Picture</label>
                <input type="file" name="profilepic" className="form-control" accept="image/*" required onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-primary w-100">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default UserRequestForm;
