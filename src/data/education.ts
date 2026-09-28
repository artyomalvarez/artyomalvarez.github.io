export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  badgeText?: string;
  badgeVariant?: "yellow" | "blue" | "green" | "purple" | "orange";
  featured?: boolean;
}

export const educationList: EducationItem[] = [
  {
    id: "riwi-dev",
    degree: "Ruta de Desarrollo de Software (C# & Node.js)",
    institution: "Riwi",
    period: "2026",
    description:
      "Formación intensiva en C# y ASP.NET. Lidero un proyecto de equipo como Product Owner: épicas, historias, sprints y dailies. Stack actual: Razor Pages, EF Core, Fluent API y DbContext. Siguiente: migraciones, APIs con JWT, Identity, Blazor y xUnit.",
    highlights: ["C# & .NET", "ASP.NET", "EF Core", "Product Owner", "Scrum"],
    badgeText: "En curso",
    badgeVariant: "blue",
    featured: true,
  },
  {
    id: "centro-inca-cocina",
    degree: "Técnico en Cocina & Gastronomía",
    institution: "Centro Inca",
    period: "2025 - Presente",
    description:
      "Formación culinaria: estandarización, higiene (BPM) y trabajo bajo presión.",
    highlights: ["Estandarización", "Trabajo bajo presión"],
    badgeText: "Técnico",
    badgeVariant: "yellow",
  },
];
