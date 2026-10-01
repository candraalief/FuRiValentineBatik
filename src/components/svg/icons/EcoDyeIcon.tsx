import React from "react";

export const EcoDyeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M10 24 C 10 36, 18 42, 24 42 C 30 42, 38 36, 38 24 Z"
        fill="currentColor"
        opacity="0.2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="14"
        ry="4"
        fill="currentColor"
        opacity="0.4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M24 6 C 24 6, 15 12, 17 20 C 19 23, 24 23, 24 23 C 24 23, 29 23, 31 20 C 33 12, 24 6, 24 6 Z"
        fill="currentColor"
      />
      <path d="M24 10 V 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
