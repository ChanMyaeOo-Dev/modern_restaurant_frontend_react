import React, { useState } from "react";
import AwesomeStarsRating from "react-awesome-stars-rating";
import "./StarRating.css";

const RatingComponent = ({ rating, handleRating, setRating }) => {
  const onChange = (nextValue) => {
    setRating(nextValue);
  };

  return (
    <div className="star_rating flex justify-center mt-4">
      <AwesomeStarsRating
        value={rating}
        onChange={onChange}
        size={40}
        isHalf={false}
        starGap={8}
        selectedColor={"#ffb400"}
        secondaryColor={"#E5E7EB"}
      />
    </div>
  );
};

export default RatingComponent;
