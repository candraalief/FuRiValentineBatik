import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "indigo" | "stone" | "terracotta";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  className,
  ...props
}) => {
  const variantStyles = {
    gold: "bg-amber-100 text-amber-900 border-amber-300",
    indigo: "bg-slate-900 text-amber-300 border-slate-700",
    stone: "bg-stone-100 text-stone-800 border-stone-200",
    terracotta: "bg-rose-100 text-rose-900 border-rose-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
