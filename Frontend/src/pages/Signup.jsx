import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const fetchdatas = async () => {
    try {
      const response = await axios.post('http://localhost:3444/auth/signup', formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchdatas();
    console.log('Form data submitted:', formData);
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register User In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          
          
          <div>
            <label className="block text-gray-700 font-semibold">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
