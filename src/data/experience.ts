export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  badgeText?: string;
  badgeVariant?: "yellow" | "blue" | "green" | "purple" | "orange";
}

export const experiences: ExperienceItem[] = [
  {
    id: "gelthy-assistant",
    role: "Administrative & Operational Assistant",
    company: "Gelthy (Panadería artesanal)",
    period: "Ago 2025 - Ene 2026",
    description:
      "Control de la operación de punta a punta: gestión y conciliación de inventario diario, registro y trazabilidad de merma para reducción de pérdidas de producción, despacho de pedidos y estandarización de flujos con Excel.",
    technologies: [
      "Control de Inventario",
      "Trazabilidad de Merma",
      "Excel Operativo",
      "Gestión de Procesos",
    ],
    badgeText: "Operaciones",
    badgeVariant: "orange",
  },
];
