import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-stone-200 bg-white p-6 shadow-sm",
        hoverEffect && "transition-all duration-300 hover:-translate-y-1 hover:border-amber-700/30 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
