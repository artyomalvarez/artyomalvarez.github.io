import { Badge } from "../atoms/Badge";
import type { BadgeVariant } from "../atoms/TechBadge";
import "./info-card.css";

export interface InfoCardProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags?: string[];
  badgeText?: string;
  badgeVariant?: BadgeVariant;
  badgeColor?: string;
}

const variantColorMap: Record<string, string> = {
  blue: "#3b82f6",
  green: "#22c55e",
  yellow: "#eab308",
  purple: "#a855f7",
  orange: "#ea580c",
};

const tagColorMap: Record<string, string> = {
  "C# & .NET": "#3b82f6",
  "ASP.NET Core": "#22c55e",
  "Node.js": "#a855f7",
  "Mise en place": "#64748b",
  "Técnico": "#eab308",
  "En curso": "#3b82f6",
  "SQL Server": "#0ea5e9",
  "Git": "#f43f5e",
  "Excel Operativo": "#10b981",
  "Control de Inventario": "#ea580c",
  "Trazabilidad de Merma": "#f59e0b",
  "Gestión de Procesos": "#8b5cf6",
  "Estandarización": "#eab308",
  "Trabajo bajo presión": "#f97316",
};

const defaultPalette = [
  "#3b82f6",
  "#22c55e",
  "#a855f7",
  "#eab308",
  "#64748b",
  "#ea580c",
];

export const InfoCard = ({
  title,
  subtitle,
  period,
  description,
  tags = [],
  badgeText,
  badgeVariant = "blue",
  badgeColor,
}: InfoCardProps) => {
  const resolvedBadgeColor =
    badgeColor ?? variantColorMap[badgeVariant] ?? "#3b82f6";

  return (
    <article className="info-card">
      <header className="info-card-header">
        <div className="info-card-badge-wrap">
          {badgeText && (
            <Badge label={badgeText} color={resolvedBadgeColor} />
          )}
          <span className="info-card-period">{period}</span>
        </div>
      </header>

      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-subtitle">{subtitle}</p>
      <p className="info-card-desc">{description}</p>

      {tags.length > 0 && (
        <ul className="info-card-tags">
          {tags.map((tag, idx) => {
            const tagColor =
              tagColorMap[tag] ?? defaultPalette[idx % defaultPalette.length];
            return (
              <li key={tag}>
                <Badge label={tag} color={tagColor} />
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
};
