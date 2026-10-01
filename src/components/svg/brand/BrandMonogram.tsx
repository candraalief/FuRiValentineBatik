import React from "react";

export const BrandMonogram: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = "w-10 h-10 text-amber-500",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="2.5" />
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.6"
      />
      <path
        d="M35 27 H64 C70 27 72 32 68 36 C64 40 58 40 52 40 H41 V72 C41 76 35 76 35 72 Z"
        fill="currentColor"
      />
      <path d="M46 47 H60 C64 47 66 51 62 54 H46 Z" fill="currentColor" opacity="0.8" />
      <path
        d="M47 44 L61 72 C63 76 67 76 69 72 L81 44"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="18" r="3" fill="currentColor" />
      <circle cx="50" cy="82" r="3" fill="currentColor" />
      <circle cx="18" cy="50" r="3" fill="currentColor" />
      <circle cx="82" cy="50" r="3" fill="currentColor" />
    </svg>
  );
};
