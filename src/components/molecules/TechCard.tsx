// src/components/molecules/TechCard.tsx
import type { ReactNode } from "react";
import "./tech-card.css";

interface TechCardProps {
  name: string;
  icon: ReactNode;
  isComingSoon?: boolean;
}

export const TechCard = ({ name, icon, isComingSoon }: TechCardProps) => {
  return (
    <div className={`tech-card ${isComingSoon ? "is-coming-soon" : ""}`.trim()}>
      {isComingSoon && (
        <span className="tech-card-badge-soon">Próximamente</span>
      )}
      <div className="tech-card-icon">{icon}</div>
      <span className="tech-card-name">{name}</span>
    </div>
  );
};
