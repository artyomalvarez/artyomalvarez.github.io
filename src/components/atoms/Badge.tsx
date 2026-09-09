import type React from "react";

export interface BadgeProps {
  label: string;
  color: string; // Recibirá un HEX, ej: '#3b82f6' (azul) o '#eab308' (amarillo)
  className?: string;
}

export const Badge = ({ label, color, className = "" }: BadgeProps) => {
  return (
    <span
      className={`custom-badge ${className}`.trim()}
      style={{ "--badge-color": color } as React.CSSProperties}
    >
      {label}
    </span>
  );
};
