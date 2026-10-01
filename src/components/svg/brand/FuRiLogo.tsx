import React from "react";

interface FuRiLogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: "horizontal" | "vertical" | "monogram";
  accentColor?: string;
  textColor?: string;
}

export const FuRiLogo: React.FC<FuRiLogoProps> = ({
  variant = "horizontal",
  accentColor = "#C6923B",
  textColor = "currentColor",
  className = "h-10 w-auto",
  ...props
}) => {
  if (variant === "monogram") {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <circle cx="50" cy="50" r="47" stroke={accentColor} strokeWidth="2.5" />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke={accentColor}
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.6"
        />
        <path
          d="M35 27 H64 C70 27 72 32 68 36 C64 40 58 40 52 40 H41 V72 C41 76 35 76 35 72 Z"
          fill={accentColor}
        />
        <path d="M46 47 H60 C64 47 66 51 62 54 H46 Z" fill="#E8C37B" />
        <path
          d="M47 44 L61 72 C63 76 67 76 69 72 L81 44"
          stroke="#E8C37B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="18" r="3" fill={accentColor} />
        <circle cx="50" cy="82" r="3" fill={accentColor} />
        <circle cx="18" cy="50" r="3" fill={accentColor} />
        <circle cx="82" cy="50" r="3" fill={accentColor} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 460 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Monogram Section */}
      <g transform="translate(10, 8)">
        <circle cx="42" cy="42" r="40" stroke={accentColor} strokeWidth="2" />
        <circle
          cx="42"
          cy="42"
          r="36"
          stroke={accentColor}
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.6"
        />
        <path
          d="M30 22 H54 C59 22 61 26 57 29 C54 33 49 33 44 33 H35 V62 C35 65 30 65 30 62 Z"
          fill={accentColor}
        />
        <path d="M40 39 H51 C54 39 56 42 52 45 H40 Z" fill="#E8C37B" />
        <path
          d="M41 37 L52 62 C54 65 57 65 59 62 L69 37"
          stroke="#E8C37B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Brand Text */}
      <g transform="translate(110, 20)">
        <text
          x="0"
          y="35"
          fontFamily="Cinzel, 'Playfair Display', Georgia, serif"
          fontSize="30"
          fontWeight="700"
          letterSpacing="2"
          fill={accentColor}
        >
          FuRi Valentine
        </text>
        <text
          x="2"
          y="56"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fontWeight="600"
          letterSpacing="6"
          fill={textColor}
          opacity="0.85"
        >
          BATIK HERITAGE
        </text>
      </g>
    </svg>
  );
};
