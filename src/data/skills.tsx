// src/data/skills.tsx
import type { ReactNode } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiDotnet,
  SiReact,
  SiAngular,
  SiSpringboot,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava, FaCss3Alt } from "react-icons/fa6";

export type SkillCategory =
  | "Frameworks & Librerías"
  | "Lenguajes"
  | "Bases de Datos & Herramientas";

export interface TechSkill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: ReactNode;
  isComingSoon?: boolean;
}

export const mySkills: TechSkill[] = [
  // Frameworks & Librerías
  { id: "dotnet", name: "ASP.NET Core", category: "Frameworks & Librerías", icon: <SiDotnet /> },
  { id: "angular", name: "Angular", category: "Frameworks & Librerías", icon: <SiAngular />, isComingSoon: true },
  { id: "react", name: "React", category: "Frameworks & Librerías", icon: <SiReact />, isComingSoon: true },
  { id: "springboot", name: "Spring Boot", category: "Frameworks & Librerías", icon: <SiSpringboot />, isComingSoon: true },

  // Lenguajes
  { id: "csharp", name: "C#", category: "Lenguajes", icon: <TbBrandCSharp /> },
  { id: "ts", name: "TypeScript", category: "Lenguajes", icon: <SiTypescript /> },
  { id: "js", name: "JavaScript", category: "Lenguajes", icon: <SiJavascript /> },
  { id: "python", name: "Python", category: "Lenguajes", icon: <SiPython /> },
  { id: "java", name: "Java", category: "Lenguajes", icon: <FaJava /> },
  { id: "html", name: "HTML5", category: "Lenguajes", icon: <SiHtml5 /> },
  { id: "css", name: "CSS3", category: "Lenguajes", icon: <FaCss3Alt /> },

  // Bases de Datos & Herramientas
  { id: "postgresql", name: "PostgreSQL", category: "Bases de Datos & Herramientas", icon: <SiPostgresql /> },
  { id: "mysql", name: "MySQL", category: "Bases de Datos & Herramientas", icon: <SiMysql /> },
  { id: "mongo", name: "MongoDB", category: "Bases de Datos & Herramientas", icon: <SiMongodb /> },
  { id: "nodejs", name: "Node.js", category: "Bases de Datos & Herramientas", icon: <SiNodedotjs /> },
  { id: "git", name: "Git", category: "Bases de Datos & Herramientas", icon: <SiGit /> },
  { id: "docker", name: "Docker", category: "Bases de Datos & Herramientas", icon: <SiDocker />, isComingSoon: true },
];

export interface SoftSkill {
  title: string;
  description: string;
  iconClass: string;
}

export const softSkills: SoftSkill[] = [
  {
    title: "Resolución bajo presión",
    description:
      "Capacidad forjada en cocina y producción para mantener la calma, priorizar y resolver incidentes con rapidez y precisión.",
    iconClass: "fa-solid fa-gauge-high",
  },
  {
    title: "Atención al detalle y consistencia",
    description:
      "Meticulosidad en el modelado de datos, validaciones y calidad de código para evitar errores en producción.",
    iconClass: "fa-solid fa-eye",
  },
  {
    title: "Orientación a procesos y negocio",
    description:
      "Comprensión real de inventario, merma y flujos comerciales para traducir necesidades operativas en software funcional.",
    iconClass: "fa-solid fa-layer-group",
  },
  {
    title: "Trabajo en equipo y comunicación",
    description:
      "Colaboración fluida en repositorios compartidos, sincronización constante y cultura de mejora continua.",
    iconClass: "fa-solid fa-users",
  },
];
