import { InfoCard } from "../molecules/InfoCard";
import { educationList } from "../../data/education";
import "./education-list.css";

export const EducationList = () => {
  return (
    <section className="section" id="education">
      <p className="section-kicker">Formación</p>
      <h2 className="section-title">Educación y técnica</h2>
      <div className="education-grid">
        {educationList.map((edu) => (
          <InfoCard
            key={edu.id}
            title={edu.degree}
            subtitle={edu.institution}
            period={edu.period}
            description={edu.description}
            tags={edu.highlights}
            badgeText={edu.badgeText}
            badgeVariant={edu.badgeVariant}
          />
        ))}
      </div>
    </section>
  );
};
