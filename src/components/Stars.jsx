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
    let outline = 5 - Math.ceil(number);
    let fillStar = Array(fill).fill().map((_, inx) => <FaStar key={`fill-${inx}`} />);
    let halfStar = Array(half).fill().map((_, inx) => <FaStarHalfAlt key={`half-${inx}`} />);
    let outlineStar = Array(outline).fill().map((_, inx) => <FaRegStar key={`outline-${inx}`} />);
    return [...fillStar, ...halfStar, ...outlineStar];
  };
  return setStar(rating);
};

export default Stars;
