import React from "react";

interface KawungPatternProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  opacity?: number;
}

export const KawungPattern: React.FC<KawungPatternProps> = ({
  color = "currentColor",
  opacity = 0.25,
  className = "w-full h-full",
  ...props
}) => {
  const patternId = React.useId();

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <pattern
          id={patternId}
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <ellipse
            cx="30"
            cy="15"
            rx="10"
            ry="14"
            fill="none"
            stroke={color}
            strokeWidth="1.2"
            opacity={opacity}
          />
          <ellipse
            cx="30"
            cy="45"
            rx="10"
            ry="14"
            fill="none"
            stroke={color}
            strokeWidth="1.2"
            opacity={opacity}
          />
          <ellipse
            cx="15"
            cy="30"
            rx="14"
            ry="10"
            fill="none"
            stroke={color}
            strokeWidth="1.2"
            opacity={opacity}
          />
          <ellipse
            cx="45"
            cy="30"
            rx="14"
            ry="10"
            fill="none"
            stroke={color}
            strokeWidth="1.2"
            opacity={opacity}
          />
          <circle cx="30" cy="30" r="2.5" fill={color} opacity={opacity * 1.5} />
          {/* Corners */}
          <ellipse
            cx="0"
            cy="0"
            rx="10"
            ry="14"
            fill="none"
            stroke={color}
            strokeWidth="1.2"
            opacity={opacity}
          />
          <ellipse
            cx="60"
            cy="0"
            rx="10"
            ry="14"
            fill="none"
            stroke={color}
            strokeWidth="1.2"
            opacity={opacity}
          />
          <ellipse
            cx="0"
            cy="60"
            rx="10"
            ry="14"
            fill="none"
            stroke={color}
            strokeWidth="1.2"
            opacity={opacity}
          />
          <ellipse
            cx="60"
            cy="60"
            rx="10"
            ry="14"
            fill="none"
            stroke={color}
            strokeWidth="1.2"
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
