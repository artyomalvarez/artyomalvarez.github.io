// src/data/skills.tsx
import type { ReactNode } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiDotnet,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiSupabase,
  SiKotlin,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";
import { FaJava, FaCss3Alt, FaDatabase } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";

export type SkillGroup = "today" | "exploring";

export interface TechSkill {
  id: string;
  name: string;
  group: SkillGroup;
  icon: ReactNode;
}

export const mySkills: TechSkill[] = [
  { id: "csharp", name: "C#", group: "today", icon: <TbBrandCSharp /> },
  { id: "dotnet", name: ".NET", group: "today", icon: <SiDotnet /> },
  { id: "aspnet", name: "ASP.NET", group: "today", icon: <SiDotnet /> },
  { id: "efcore", name: "EF Core", group: "today", icon: <SiDotnet /> },
  { id: "sql", name: "SQL", group: "today", icon: <FaDatabase /> },
  { id: "sqlserver", name: "SQL Server", group: "today", icon: <DiMsqlServer /> },
  { id: "postgresql", name: "PostgreSQL", group: "today", icon: <SiPostgresql /> },
  { id: "git", name: "Git", group: "today", icon: <SiGit /> },
  { id: "js", name: "JavaScript", group: "today", icon: <SiJavascript /> },
  { id: "nodejs", name: "Node.js", group: "today", icon: <SiNodedotjs /> },
  { id: "express", name: "Express", group: "today", icon: <SiExpress /> },
  { id: "html", name: "HTML", group: "today", icon: <SiHtml5 /> },
  { id: "css", name: "CSS", group: "today", icon: <FaCss3Alt /> },

  { id: "angular", name: "Angular", group: "exploring", icon: <SiAngular /> },
  { id: "ts", name: "TypeScript", group: "exploring", icon: <SiTypescript /> },
  { id: "java", name: "Java", group: "exploring", icon: <FaJava /> },
  { id: "kotlin", name: "Kotlin", group: "exploring", icon: <SiKotlin /> },
  { id: "mongo", name: "MongoDB", group: "exploring", icon: <SiMongodb /> },
  { id: "docker", name: "Docker", group: "exploring", icon: <SiDocker /> },
  { id: "azure", name: "Azure", group: "exploring", icon: <TbBrandAzure /> },
  { id: "supabase", name: "Supabase", group: "exploring", icon: <SiSupabase /> },
  { id: "python", name: "Python", group: "exploring", icon: <SiPython /> },
];

export interface SoftSkill {
  title: string;
  description: string;
  iconClass: string;
}

export const softSkills: SoftSkill[] = [
  {
    title: "Product Owner en equipo",
    description:
      "En Riwi armo épicas, historias y tareas, y organizo sprints y dailies. Traduzco el trabajo técnico a un backlog que el equipo puede ejecutar.",
    iconClass: "fa-solid fa-list-check",
  },
  {
    title: "Aprender explicando",
    description:
      "Construyo el proyecto y lo explico en pocas líneas. Si no lo puedo enseñar, todavía no lo doy por entendido.",
    iconClass: "fa-solid fa-chalkboard-user",
  },
  {
    title: "Definición de terminado",
    description:
      "Una tarea solo está lista si corre en local, cumple criterios, queda en un commit con README y la puedo explicar.",
    iconClass: "fa-solid fa-circle-check",
  },
  {
    title: "Un proyecto activo",
    description:
      "Un Scrum personal de sprints semanales. Lo que aprendo en Firmeza (entidades, DbContext, migraciones) pasa a InDivízia cuando le toque el turno.",
    iconClass: "fa-solid fa-layer-group",
  },
];
