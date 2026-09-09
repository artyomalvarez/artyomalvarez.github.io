export interface TechSkill {
  name: string;
  deviconClass: string;
}

export interface SoftSkill {
  title: string;
  description: string;
  iconClass: string;
}

export const techSkills: TechSkill[] = [
  { name: "Python", deviconClass: "devicon-python-plain colored" },
  { name: "HTML5", deviconClass: "devicon-html5-plain colored" },
  { name: "CSS3", deviconClass: "devicon-css3-plain colored" },
  { name: "Java", deviconClass: "devicon-java-plain-wordmark colored" },
  { name: "C++", deviconClass: "devicon-cplusplus-plain colored" },
  { name: "JavaScript", deviconClass: "devicon-javascript-plain colored" },
];

export const softSkills: SoftSkill[] = [
  {
    title: "Gestión bajo presión",
    description: "Resolución eficiente en entornos críticos.",
    iconClass: "fa-solid fa-gauge-high",
  },
  {
    title: "Atención al detalle",
    description: "Enfoque en la calidad del código y UI.",
    iconClass: "fa-solid fa-eye",
  },
  {
    title: "Multitasking",
    description: "Capacidad de priorizar tareas y flujos de trabajo.",
    iconClass: "fa-solid fa-layer-group",
  },
  {
    title: "Trabajo en equipo",
    description: "Comunicación clara y colaboración efectiva.",
    iconClass: "fa-solid fa-users",
  },
];
