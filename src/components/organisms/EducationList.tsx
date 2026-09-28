import { InfoCard } from "../molecules/InfoCard";
import { educationList } from "../../data/education";
import "./education-list.css";

export const EducationList = () => {
  return (
    <section className="section" id="education">
      <p className="section-kicker">Formación</p>
      <h2 className="section-title">Ruta técnica y fundamentos</h2>
      <div className="education-grid">
        {educationList.map((edu) => (
          <div
            key={edu.id}
            className={edu.featured ? "education-featured" : "education-simple"}
          >
            <InfoCard
              title={edu.degree}
              subtitle={edu.institution}
              period={edu.period}
              description={edu.description}
              tags={edu.highlights}
              badgeText={edu.badgeText}
              badgeVariant={edu.badgeVariant}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
