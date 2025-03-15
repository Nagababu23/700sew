import React, { useState, useEffect } from "react";

const ImageComparisonSlider = ({ before, after }) => {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowAfter((prev) => !prev); // Toggle between before and after
    }, 3000); // Change the duration as needed

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        maxWidth: "450px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          overflow: "hidden",
          borderRadius: "0.5rem",
        }}
      >
        {/* Before Image */}
        <img
          src={before}
          alt="Before"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: showAfter ? 0 : 1, // Hide when showAfter is true
            transition: "opacity 1s ease-in-out",
          }}
        />

        {/* After Image */}
        <img
          src={after}
          alt="After"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: showAfter ? 1 : 0, 
            transition: "opacity 1s ease-in-out",
          }}
        />

        {/* Animation Overlay */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(255, 255, 255, 0.8)",
            padding: "8px 16px",
            borderRadius: "999px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "bold",
            opacity: showAfter ? 0 : 1, // Hide when showAfter is true
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          Before
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
          After
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;