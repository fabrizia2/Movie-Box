import React, { useState } from 'react';
import '../index.css'; // Import your CSS file

function HeartIcon() {
  const [isRed, setIsRed] = useState(false);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleColor}
      className={isRed ? 'red-color' : ''}
    >
      <g filter="url(#filter0_b_27431_78)">
        <ellipse cx="15" cy="15.1842" rx="15" ry="14.6053" fill="#F3F4F6" fill-opacity="0.5" />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.17157 10.4828C9.73367 8.96185 12.2663 8.96185 13.8284 10.4828L15 11.6236L16.1716 10.4828C17.7337 8.96185 20.2663 8.96185 21.8284 10.4828C23.3905 12.0038 23.3905 14.4698 21.8284 15.9908L15 22.6396L8.17157 15.9908C6.60948 14.4698 6.60948 12.0038 8.17157 10.4828Z"
        className="heart-shape" // Add a class to target the heart shape
      />
      <defs>
        <filter id="filter0_b_27431_78" x="-2" y="-1.42105" width="34" height="33.2105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_27431_78" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_27431_78" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default HeartIcon;