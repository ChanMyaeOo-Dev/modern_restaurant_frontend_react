import React, { useEffect } from "react";

const SnackBar = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-16 left-[50%] translate-x-[-50%] bg-green-500 text-white p-3 px-4 rounded-md shadow-md">
      {message}
    </div>
  );
};

export default SnackBar;
