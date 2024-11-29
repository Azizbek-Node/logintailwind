import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Stars = ({ rating }) => {
  function calculateStar(n) {
    if (n === 0 || n.toString().length === 1) return n;

    let [whole, decimal] = n.toString().split(".");

    if (decimal[0] < 3) {
      return +decimal;
    } else if (decimal[0] < 8) {
      return +whole + 0.5;
    } else {
      return +whole + 1;
    }
  }

  const setStar = (n) => {
    let number = calculateStar(n);
    let fill = Math.floor(number);
    let half = number - Math.floor(number) ? 1 : 0;
    let outline = 5 - fill - half;
    return [
      ...Array(fill).fill(<FaStar />),
      ...Array(half).fill(<FaStarHalfAlt />),
      ...Array(outline).fill(<FaRegStar />),
    ];
  };
  return setStar(rating);
};

export default Stars;
