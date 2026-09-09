export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  status?: string;
  links: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "cooperativa-el-progreso",
    title: "Cooperativa Financiera El Progreso",
    description:
      "Sistema de gestión financiera en C# y .NET estructurado en consola y Web API REST. Implementa lógica de préstamos, gestión de clientes, transacciones multimoneda consumiendo TRM, consultas con LINQ y persistencia en SQL.",
    technologies: ["C#", ".NET", "ASP.NET Core", "SQL", "LINQ", "REST API"],
    links: {
      github:
        "https://github.com/artyomalvarez/-Sistema-de-Gestion-Para-La-Cooperativa-Financiera-El-Progreso-",
    },
  },
  {
    id: "indivizia",
    title: "InDivízia — Gastos Grupales",
    status: "En desarrollo · Coming Soon",
    description:
      "Plataforma colaborativa para división y conciliación de gastos en equipo desarrollada dentro de Esthercita-Factory. Enfoque en modelado de dominio con POO, transacciones seguras y liquidación equitativa de balances.",
    technologies: ["C#", ".NET", "POO", "LINQ", "SQL", "Git Colaborativo"],
    links: {
      github: "https://github.com/Esthercita-Factory/artyomalvarez-Ind-v-z-",
    },
  },
  {
    id: "veterinary-clinic",
    title: "Veterinary Clinic System",
    description:
      "Sistema integral de gestión para clínicas veterinarias con arquitectura orientada a objetos (POO), agendamiento de citas, historiales médicos de pacientes, flujos asíncronos (async/await), LINQ y suite de pruebas unitarias.",
    technologies: ["C#", ".NET", "Async/Await", "LINQ", "Unit Testing", "POO"],
    links: {
      github:
        "https://github.com/Esthercita-Factory/artyomalvarez-VeterinaryClinicSystem",
    },
  },
  {
    id: "altea-gestion",
    title: "ALTEA — Sistema de Gestión",
    description:
      "Single Page Application desarrollada en el ecosistema Riwi / CodeUp. Backend construido con Node.js y base de datos relacional PostgreSQL, con autenticación segura vía JWT y despliegue en Vercel/Render.",
    technologies: ["Node.js", "PostgreSQL", "JWT", "REST API", "SPA"],
    links: {
      github: "https://github.com/artyomalvarez",
    },
  },
];
