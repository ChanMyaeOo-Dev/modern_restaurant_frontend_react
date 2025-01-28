import React, { useState } from "react";
import StarRating from "../components/StarRating";
import axios from "axios";
import { API_URL } from "../services/API_URL";
import StandardButton from "../components/StandardButton";
import { useParams, useNavigate } from "react-router-dom";
import { useSnackbar } from "../components/SnackbarContext";

const FeedBack = () => {
  const { tableNo } = useParams();
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmitFeedback = () => {
    axios
      .post(`${API_URL}/feedback_post`, {
        rating: rating,
        message: message,
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        showSnackbar("Submitted successfully!");
        navigate(`/table/${tableNo}`);
      })
      .catch((error) => {
        alert("Error sending data:", error);
      });
  };

  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
      <div className="flex justify-end gap-2 items-center py-4 pr-4 pl-3 min-h-[56px]">
        <div
          className="p-2 bg-slate-100 rounded-full"
          onClick={() => navigate(`/table/${tableNo}`)}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6da44720387f3016a308051e18258a1e024ac5c4e675d227833da73187ba52f6?placeholderIfAbsent=true&apiKey=f0e68d8797cf41d7b36c17f698ec0091"
            alt="Navigation icon"
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cf3abb892cea2127c9651cb4c79aebabffa3c7327f61a3c3f00ca4bdb61a8d8?placeholderIfAbsent=true&apiKey=f0e68d8797cf41d7b36c17f698ec0091"
        alt="Restaurant logo"
        className="object-contain self-center mt-6 max-w-full aspect-[1.39] w-[222px]"
      />
      <div className="self-center mt-8 text-xl font-semibold leading-8 text-center text-black">
        How was your experience with our services and food?
      </div>
      <StarRating rating={rating} setRating={setRating} />
      <form className="flex flex-col justify-center p-4 mt-6 w-full">
        <label htmlFor="remarks" className="sr-only">
          Remarks
        </label>
        <textarea
          id="remarks"
          className="flex-1 shrink gap-2 px-3 pt-2.5 pb-20 w-full bg-gray-100 rounded-lg min-h-[112px] text-sm text-gray-500 mb-3"
          placeholder="Remarks"
          aria-label="Enter your remarks"
          onChange={handleMessage}
        />

        <StandardButton
          buttonText={"Send"}
          buttonFunction={handleSubmitFeedback}
        />
      </form>
    </div>
  );
};

export default FeedBack;
