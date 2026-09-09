export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  badgeText?: string;
  badgeVariant?: "yellow" | "blue" | "green" | "purple" | "orange";
}

export const educationList: EducationItem[] = [
  {
    id: "riwi-dev",
    degree: "Ruta de Desarrollo de Software (C# & Node.js)",
    institution: "Riwi",
    period: "2026",
    description:
      "Formación técnica intensiva (~6 meses de práctica rigurosa): desarrollo backend con C# y .NET, construcción de Web APIs REST con ASP.NET Core, consultas eficientes con LINQ, persistencia en SQL Server y metodologías ágiles en equipo.",
    highlights: ["C# & .NET", "ASP.NET Core", "Node.js", "SQL Server", "Git"],
    badgeText: "En curso",
    badgeVariant: "blue",
  },
  {
    id: "centro-inca-cocina",
    degree: "Técnico en Cocina & Gastronomía",
    institution: "Centro Inca",
    period: "2025 - Presente",
    description:
      "Formación culinaria profesional enfocada en estandarización de recetas, producción estricta bajo presión, higiene (BPM) y control de costos. Fuente de rigor, orden metódico y atención al detalle aplicada al código.",
    highlights: ["Mise en place", "Estandarización", "Trabajo bajo presión"],
    badgeText: "Técnico",
    badgeVariant: "yellow",
  },
];
