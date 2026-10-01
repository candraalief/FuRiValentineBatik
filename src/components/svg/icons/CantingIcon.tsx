import React from "react";

export const CantingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = "w-6 h-6",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M6 42 L22 26"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M22 26 C 20 22, 23 16, 29 16 C 35 16 39 21 37 26 C 35 31, 26 31, 22 26 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M37 23 Q 43 21, 43 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="43" cy="11" r="2.5" fill="currentColor" />
    </svg>
  );
};
