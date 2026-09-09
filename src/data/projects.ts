export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageContain?: boolean;
  technologies?: string[];
  links?: {
    demo?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: "arduino-consola",
    title: "Proyecto De Arduino consola Funcional",
    description:
      "Desarrollo de una consola de juegos interactiva basada en microcontroladores Arduino, utilizando lógica de programación en Java para la interfaz y el control de periféricos.",
    image: "public/img/Arduino_Logo.svg.png",
    imageContain: true,
    technologies: ["Arduino", "Java", "C++"],
  },
  {
    id: "portafolio-web",
    title: "portafolio web",
    description:
      "Creación de una plataforma digital personal bajo estándares modernos de diseño web, enfocada en la experiencia de usuario (UX) y una arquitectura de estilos modular.",
    image: "public/img/WhatsApp Image 2026-04-23 at 1.01.14 AM.jpeg",
    imageContain: false,
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    links: {
      github: "https://github.com/artyomalvarez",
    },
  },
  {
    id: "inventario-facturacion",
    title: "Inventario Para el Control de Inventario y Facturación",
    description:
      "Sistema integral diseñado para la optimización de recursos, permitiendo un control riguroso de existencias y la automatización de procesos de facturación comercial.",
    image: "public/img/logo del brownie_page-0001.jpg",
    imageContain: true,
    technologies: ["Python", "Database"],
  },
  {
    id: "asistente-virtual-arduino",
    title: "Asistente Virtual Enfocado En Arduino",
    description:
      "Prototipo de asistente interactivo portátil que integra hardware abierto para proporcionar soluciones de automatización y asistencia mediante programación embebida.",
    image: "public/img/chatbot-mensaje-chat-vectorart_78370-4104.avif",
    imageContain: false,
    technologies: ["Arduino", "Python", "Hardware"],
  },
];
