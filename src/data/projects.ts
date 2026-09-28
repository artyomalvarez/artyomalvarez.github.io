export interface Project {
  id: string;
  title: string;
  description: string;
  /** TODO: agregar captura en public/img/projects/<id>.png */
  image?: string;
  role: string;
  technologies: string[];
  status?: string;
  featured?: boolean;
  links: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "indivizia",
    title: "InDivízia",
    featured: true,
    role: "Desarrollo (backend .NET y frontend Vite)",
    status: "Funcional · próximo: persistencia con EF Core",
    description:
      "App para dividir gastos en grupo. Backend en .NET con arquitectura por capas (Domain, Application, Api y Tests) y frontend en Vite. El cálculo está probado con casos como 38 personas donde solo 17 pagaron, y lo validé con un grupo real.",
    technologies: ["C#", ".NET", "Arquitectura en capas", "Tests", "Vite"],
    links: {
      github: "https://github.com/Esthercita-Factory/artyomalvarez-Ind-v-z-",
    },
  },
  {
    id: "firmeza",
    title: "Firmeza",
    role: "Product Owner",
    status: "Proyecto activo · Riwi",
    description:
      "Aplicación de equipo en ASP.NET con Razor Pages y .NET 10. Definí el stack y armé la épica con features e historias de usuario.",
    technologies: ["C#", ".NET 10", "ASP.NET", "Razor Pages", "EF Core"],
    links: {},
  },
  {
    id: "cooperativa-el-progreso",
    title: "Cooperativa Financiera El Progreso",
    role: "Desarrollo",
    description:
      "Sistema de gestión financiera en C# y .NET, con consola y Web API REST. Cubre préstamos, clientes, transacciones multimoneda con TRM, consultas LINQ y persistencia en SQL.",
    technologies: ["C#", ".NET", "ASP.NET Core", "SQL", "LINQ", "REST API"],
    links: {
      github:
        "https://github.com/artyomalvarez/-Sistema-de-Gestion-Para-La-Cooperativa-Financiera-El-Progreso-",
    },
  },
  {
    id: "veterinary-clinic",
    title: "Veterinary Clinic System",
    role: "Desarrollo",
    description:
      "Gestión de clínica veterinaria con POO, citas, historiales, async/await, LINQ y pruebas. Repositorio en Esthercita-Factory.",
    technologies: ["C#", ".NET", "Async/Await", "LINQ", "Unit Testing", "POO"],
    links: {
      github:
        "https://github.com/Esthercita-Factory/artyomalvarez-VeterinaryClinicSystem",
    },
  },
  {
    id: "altea",
    title: "ALTEA",
    role: "Desarrollo · Riwi",
    description:
      "SPA con Node/Express, PostgreSQL y JWT. Proyecto de Riwi, desplegada en Vercel/Render.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "SPA"],
    links: {
      // TODO: pegar URL del repositorio
      // TODO: pegar URL del demo (Vercel/Render)
    },
  },
];
