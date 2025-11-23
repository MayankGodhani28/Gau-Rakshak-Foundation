import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import axios from "axios";

const AXIOS_API = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

const Feedback = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from backend
  const fetchReviews = async () => {
    try {
      // use REACT_APP_API_URL for axios requests only, fallback to relative path
      const endpoint = AXIOS_API ? `${AXIOS_API}/api/feedbacks` : "/api/feedbacks";
      const res = await axios.get(endpoint);
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50 p-8 mt-10">
      <HeroSection />
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ReviewForm onSubmitSuccess={fetchReviews} />
          <ReviewList reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
