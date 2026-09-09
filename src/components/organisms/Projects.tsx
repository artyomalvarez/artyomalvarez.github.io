import { ProjectCard } from "../molecules/ProjectCard";
import { projects } from "../../data/projects";
import "./projects.css";

export const Projects = () => {
  return (
    <section className="section" id="projects">
      <p className="section-kicker">Proyectos</p>
      <h2 className="section-title">Lo que ya salió de la estación</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
