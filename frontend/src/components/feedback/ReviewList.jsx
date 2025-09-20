import React from "react";

const ReviewList = ({ reviews }) => {
  return (
    <div className="space-y-4 bg-white p-6 shadow-md rounded-lg h-full">
      <h2 className="text-xl font-semibold">What Others Are Saying</h2>

      <div className="h-[600px] overflow-y-auto pr-2 space-y-4">
        {reviews.length > 0 ? (
          reviews.map((r, index) => (
            <div key={index} className="bg-white p-4 shadow rounded-lg border space-y-2">
              <div className="flex text-yellow-500">
                {"★".repeat(r.rating)}
                <span className="text-gray-300">{"★".repeat(5 - r.rating)}</span>
              </div>
              <p className="italic text-gray-700">"{r.experience}"</p>
              <p className="font-semibold">{r.name}</p>
              {r.role && <p className="text-sm text-gray-500">{r.role}</p>}
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No reviews yet...</p>
        )}
      </div>

      <div className="bg-amber-50 border-l-4 border-green-600 p-4 rounded">
        <h3 className="font-semibold flex items-center space-x-2">
          <span role="img" aria-label="heart">💚</span>
          <span>Thank You!</span>
        </h3>
        <p className="text-gray-600 text-sm mt-2">
          Every piece of feedback helps us create a better sanctuary for the cows in our care. 
          Your voice makes a difference in our mission to rescue and rehabilitate these gentle giants.
        </p>
      </div>
    </div>
  );
};

export default ReviewList;
