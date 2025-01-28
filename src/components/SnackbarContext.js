import React, { createContext, useState, useContext, useEffect } from "react";

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({ visible: false, message: "" });

  const showSnackbar = (message) => {
    setSnackbar({ visible: true, message });

    // Automatically hide the snackbar after 3 seconds (optional)
    setTimeout(() => {
      setSnackbar({ visible: false, message: "" });
    }, 3000);
  };

  const closeSnackbar = () => {
    setSnackbar({ visible: false, message: "" });
  };

  return (
    <SnackbarContext.Provider value={{ snackbar, showSnackbar, closeSnackbar }}>
      {children}
      {snackbar.visible && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg flex items-center justify-between gap-4 w-72"
          role="alert"
        >
          <p>{snackbar.message}</p>
          <button
            onClick={closeSnackbar}
            className="bg-green-600 text-white px-2 py-1 rounded-full text-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
