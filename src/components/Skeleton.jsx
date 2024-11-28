import React from "react";

const Skeleton = ({ count }) => {
  return (
    <div className="container">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="p-3 shadow-lg">
          <div className="w-full h-96 lg:h-60 md:h-40 sm:h-32 bg-slate-200 rounded-md"></div>
          <div className="w-9/12 h-6 lg:h-4 md:h-3 sm:h-2 bg-slate-200 mt-3 mx-auto rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
