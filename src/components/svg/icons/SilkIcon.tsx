import React from "react";

export const SilkIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = "w-6 h-6",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <ellipse cx="14" cy="24" rx="6" ry="14" fill="currentColor" fillOpacity="0.15" />
      <path d="M14 10 H36 C39.3 10 42 16.3 42 24 C42 31.7 39.3 38 36 38 H14" />
      <ellipse cx="36" cy="24" rx="6" ry="14" fill="currentColor" fillOpacity="0.3" />
      <path d="M22 10 C 25 16 25 32 22 38" strokeDasharray="2 2" />
      <path d="M29 10 C 32 16 32 32 29 38" strokeDasharray="2 2" />
    </svg>
  );
};
