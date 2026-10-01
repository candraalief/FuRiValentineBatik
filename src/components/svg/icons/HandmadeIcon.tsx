import React from "react";

export const HandmadeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
      <circle
        cx="24"
        cy="24"
        r="21"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      <path
        d="M17 26 C15 24 15 20 18 18 C20 16 23 17 24 19 C25 17 28 16 30 18 C33 20 33 24 31 26 L24 33 L17 26 Z"
        fill="currentColor"
      />
      <path
        d="M12 24 C12 30 18 36 24 36 C30 36 36 30 36 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
