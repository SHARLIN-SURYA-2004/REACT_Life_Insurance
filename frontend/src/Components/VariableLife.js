import React, { useState, useEffect } from 'react';
import '../styles/InsuranceForm.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VariableLife = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    age: '',
    beneficiary: '',
    phone: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [userId, setUserId] = useState(null); // State to store the user ID
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get('http://localhost:8080/api/users', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setUserId(response.data.id);
      } catch (error) {
        console.error('Failed to fetch user ID:', error);
      }
    };
    
    fetchUserId();
  }, []);
  
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital Status is required';
    if (!formData.age || formData.age <= 0) newErrors.age = 'Valid age is required';
    if (!formData.beneficiary) newErrors.beneficiary = 'Beneficiary is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    return newErrors;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.post('http://localhost:8080/api/policies', {
          policyName: 'Variable Life Insurance', // Add the policy name
          ...formData, // Spread the form data into the request body
          user_id: userId, // Replace with dynamic user ID
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        setSuccessMessage('Form submitted successfully!');
        setTimeout(() => navigate('/payment'), 2000); // Redirect after 2 seconds
      } catch (error) {
        console.error('There was an error submitting the form!', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <main>
      <Header />
      <div className='insurance-section'>
        <h2>Variable Life Insurance</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
            {errors.dob && <p className="error-message">{errors.dob}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="error-message">{errors.gender}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="maritalStatus">Marital Status</label>
            <select id="maritalStatus" name="maritalStatus" value={formData.marital_status} onChange={handleChange}>
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
            {errors.maritalStatus && <p className="error-message">{errors.maritalStatus}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
            {errors.age && <p className="error-message">{errors.age}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="beneficiary">Beneficiary</label>
            <input type="text" id="beneficiary" name="beneficiary" value={formData.beneficiary} onChange={handleChange} />
            {errors.beneficiary && <p className="error-message">{errors.beneficiary}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
            {errors.address && <p className="error-message">{errors.address}</p>}
          </div>
          <button type="submit" className="btn">Submit</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default VariableLife;
