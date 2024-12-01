import React from "react";

const Stars = ({ rating }) => {
  const stars = Math.round(rating);
  return (
    <div>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <span
            key={index}
            className={index < stars ? "text-yellow-500" : "text-gray-400"}
          >
            ★
          </span>
        ))}
    </div>
  );
};

export default Stars;
