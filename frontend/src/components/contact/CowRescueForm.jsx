import React, { useState } from "react";
import axios from "axios";

const CowRescueForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    urgency: "",
    location: "",
    numberOfAnimals: "",
    situation: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/rescues", formData);
      alert("Rescue request submitted successfully!");

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        urgency: "",
        location: "",
        numberOfAnimals: "",
        situation: "",
        details: "",
      });
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to submit rescue request. Please try again later.";
      alert(errorMessage);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-2">Request Cow Rescue</h2>
      <p className="text-gray-600 mb-6">
        If you know of cows in need of rescue or sanctuary, please fill out this
        form with as much detail as possible. We respond to all rescue requests
        and will work with you to ensure these animals get the help they need.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Your Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Urgency */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Urgency Level
          </label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select urgency level</option>
            <option value="Emergency - Immediate danger">Emergency - Immediate danger</option>
            <option value="Urgent - Within 48 hours">Urgent - Within 48 hours</option>
            <option value="Standard - Within a week">Standard - Within a week</option>
            <option value="Planning - Future rescue">Planning - Future rescue</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Location of Animals
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Number of Animals */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Number of Animals
          </label>
          <input
            type="text"
            name="numberOfAnimals"
            value={formData.numberOfAnimals}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Situation */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Current Situation
          </label>
          <input
            type="text"
            name="situation"
            value={formData.situation}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Additional Details */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Additional Details *
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="4"
            required
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            Submit Rescue Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default CowRescueForm;
