import { ProjectCard } from "../molecules/ProjectCard";
import { projects } from "../../data/projects";
import "./projects.css";

export const Projects = () => {
  return (
    <section className="section" id="projects">
      <p className="section-kicker">Proyectos</p>
      <h2 className="section-title">Proyectos</h2>

      <article className="current-project">
        <p className="current-project-kicker">Proyecto actual</p>
        <h3>Firmeza</h3>
        <p className="current-project-status">Estado: proyecto activo en Riwi · Product Owner</p>
        <ul className="current-project-done">
          <li>Definí el stack (ASP.NET, Razor Pages, .NET 10)</li>
          <li>Armé la épica con features e historias de usuario</li>
          <li>TODO: punto hecho 3</li>
          <li>TODO: punto hecho 4</li>
        </ul>
        <p className="current-project-next">
          En curso: TODO · Próximo: TODO
        </p>
      </article>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p className="projects-upcoming">Próximo: inventario para locales de comida</p>
    </section>
  );
};
