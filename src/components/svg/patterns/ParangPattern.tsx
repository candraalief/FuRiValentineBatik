import React from "react";

interface ParangPatternProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  opacity?: number;
}

export const ParangPattern: React.FC<ParangPatternProps> = ({
  color = "currentColor",
  opacity = 0.2,
  className = "w-full h-full",
  ...props
}) => {
  const patternId = React.useId();

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <pattern
          id={patternId}
          width="80"
          height="80"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 20 Q 20 8, 40 20 T 80 20"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            opacity={opacity}
          />
          <path
            d="M0 40 Q 20 28, 40 40 T 80 40"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            opacity={opacity * 1.3}
          />
          <path
            d="M0 60 Q 20 48, 40 60 T 80 60"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            opacity={opacity}
          />
          <polygon
            points="20,22 24,26 20,30 16,26"
            fill={color}
            opacity={opacity * 1.5}
          />
          <polygon
            points="60,22 64,26 60,30 56,26"
            fill={color}
            opacity={opacity * 1.5}
          />
          <polygon
            points="20,62 24,66 20,70 16,66"
            fill={color}
            opacity={opacity * 1.5}
          />
          <polygon
            points="60,62 64,66 60,70 56,66"
            fill={color}
            opacity={opacity * 1.5}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
