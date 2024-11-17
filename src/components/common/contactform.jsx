import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MainImg from '../../assets/images/form-img.jpg';

const ContactForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5555/contact/",
        formData,
        { withCredentials: true }
      );
      if (response.status === 200) {
        navigate(0);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError(
          "An error occurred while posting query. Please try again later."
        );
      }
    }
  };

  return (
    <div className="container max-w-3xl my-8 mx-auto px-6 py-10 bg-purple-50 rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg p-8">
          <div className="text-center">
            <img
              src={MainImg}
              alt="appointment"
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            <h2 className="text-2xl font-semibold text-white mt-6">
              Book a Free Appointment
            </h2>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <textarea
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                id="query"
                placeholder="Your query..."
                name="query"
                value={formData.query}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="flex justify-end">
              <button
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                type="submit"
              >
                Submit
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
