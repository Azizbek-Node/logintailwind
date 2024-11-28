import React from "react";
import { toast } from "react-toastify";

const Section = () => {
  return (
    <>
      <h2>Section</h2>
      <button onClick={() => toast("wow juda osonku")}>Show toast</button>
    </>
  );
};

export default Section;
