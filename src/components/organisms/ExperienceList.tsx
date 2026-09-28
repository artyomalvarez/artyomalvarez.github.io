import { InfoCard } from "../molecules/InfoCard";
import { experiences } from "../../data/experience";
import "./experience-list.css";

export const ExperienceList = () => {
  return (
    <section className="section" id="experience">
      <p className="section-kicker">Trayectoria</p>
      <h2 className="section-title">Experiencia operativa</h2>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <InfoCard
            key={exp.id}
            title={exp.role}
            subtitle={exp.company}
            period={exp.period}
            description={exp.description}
            tags={exp.technologies}
            badgeText={exp.badgeText}
            badgeVariant={exp.badgeVariant}
          />
        ))}
      </div>
    </section>
  );
};
