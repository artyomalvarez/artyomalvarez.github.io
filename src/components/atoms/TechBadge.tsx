import type { ReactNode } from "react";
import "./tech-badge.css";

export type BadgeVariant = "yellow" | "blue" | "green" | "purple" | "orange";

interface TechBadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export const TechBadge = ({ children, variant = "blue", className = "" }: TechBadgeProps) => {
  return (
    <span className={`tech-badge tech-badge--${variant} ${className}`.trim()}>
      {children}
    </span>
  );
};
