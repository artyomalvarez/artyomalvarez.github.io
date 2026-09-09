import type { Project } from "../../data/projects";
import "./project-card.css";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="project-card">
      {project.image ? (
        <img src={project.image} alt={project.title} />
      ) : (
        <div className="project-card-banner">
          <div className="project-card-badges-wrap">
            <span className="project-card-badge">Backend & APIs</span>
            {project.status && (
              <span className="project-card-status">
                <span className="status-dot" aria-hidden="true" />
                {project.status}
              </span>
            )}
          </div>
          <div className="project-card-icon-code">&lt;/&gt;</div>
        </div>
      )}
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-tech">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer">
              {project.status ? "Ver Avance en GitHub →" : "Ver Repositorio en GitHub →"}
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer">
              Demo en Vivo →
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
