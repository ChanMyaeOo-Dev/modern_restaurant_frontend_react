import React from "react";

const StandardButton = ({ buttonText, buttonFunction }) => {
  return (
    <div
      onClick={buttonFunction}
      style={{
        width: "auto",
        height: "48px",
        paddingLeft: 32,
        paddingRight: 32,
        background:
          "linear-gradient(90deg, #28BF5D 0%, #1B9E48 100%), radial-gradient(50.00% 50.00% at 50.00% 25.00%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0) 100%)",
        boxShadow: "0px 4px 16px rgba(52, 178, 96, 0.34)",
        borderRadius: 50,
        border: "0.50px #0CAC4C solid",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        display: "inline-flex",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 14,
          fontFamily: "Inter",
          fontWeight: "700",
          textTransform: "capitalize",
          lineHeight: 20,
          letterSpacing: 0.28,
          wordWrap: "break-word",
        }}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default StandardButton;
