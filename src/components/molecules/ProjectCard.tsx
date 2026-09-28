import type { Project } from "../../data/projects";
import "./project-card.css";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const imagePath = `/img/projects/${project.id}.png`;

  return (
    <article className={`project-card${project.featured ? " is-featured" : ""}`}>
      {project.image ? (
        <img src={project.image} alt={`Captura de ${project.title}`} />
      ) : (
        <div className="project-card-image-todo">
          TODO: agregar {imagePath}
        </div>
      )}

      <div className="project-card-body">
        {project.featured && <p className="project-card-featured">Destacado</p>}
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <dl className="project-meta">
          <div>
            <dt>Mi rol</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Estado</dt>
            <dd>{project.status ?? "Código público"}</dd>
          </div>
        </dl>

        <p className="project-stack-label">Stack</p>
        <ul className="project-tech">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {(project.links.github || project.links.demo) && (
          <div className="project-links">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Código de ${project.title} en GitHub`}
              >
                Código
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Demo de ${project.title}`}
              >
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
