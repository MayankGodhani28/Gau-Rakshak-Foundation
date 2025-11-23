import React, { useState } from "react";
import axios from "axios";

const initialFormData = {
  name: "",
  email: "",
  role: "",
  rating: 0,
  experience: "",
  category: "",
  suggestions: "",
  recommend: "",
};

// add API base for axios from CRA-style env var REACT_APP_API_URL (trim trailing slash)
const AXIOS_API = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

const ReviewForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
   
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (value) => {
    // console.log(formData);
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = async (e) => {
    // console.log(formData);
    e.preventDefault();
    try {
      // use REACT_APP_API_URL for axios requests only, fallback to relative path
      const endpoint = AXIOS_API ? `${AXIOS_API}/api/feedbacks` : "/api/feedbacks";
      await axios.post(endpoint, formData);
      alert("Feedback submitted successfully!");
      setFormData(initialFormData);
      if (onSubmitSuccess) onSubmitSuccess();
    } catch (err) {
      console.error(err);
      alert("Failed to submit feedback.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 sm:p-8 shadow-md rounded-lg">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        Share Your Experience
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </div>

        {/* Relationship */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Your Relationship with Us
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">How do you know us?</option>
            <option value="Donor">Donor</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Community Member">Community Member</option>
            <option value="Former Owner">Former Owner</option>
          </select>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium mb-1">Overall Rating *</label>
          <div className="flex space-x-2 text-2xl">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRating(star)}
                className={`cursor-pointer ${
                  formData.rating >= star ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Describe Your Experience *
          </label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="3"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Feedback Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">What area are you providing feedback on?</option>
            <option value="Rescue Operations">Rescue Operations</option>
            <option value="Animal Care">Animal Care</option>
            <option value="Sanctuary Experience">Sanctuary Experience</option>
            <option value="Donations">Donations</option>
          </select>
        </div>

        {/* Suggestions */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Suggestions for Improvement
          </label>
          <textarea
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="2"
          />
        </div>

        {/* Recommend */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Would you recommend us to others?
          </label>
          <div className="space-y-1">
            {["Definitely", "Probably", "Maybe", "Probably not"].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="recommend"
                  value={option}
                  checked={formData.recommend === option}
                  onChange={handleChange}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
