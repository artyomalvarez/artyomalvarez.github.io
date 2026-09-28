import { TechCard } from "../molecules/TechCard";
import { SoftSkillItem } from "../molecules/SkillCard";
import { mySkills, softSkills } from "../../data/skills";
import "./skills.css";

const todaySkills = mySkills.filter((skill) => skill.group === "today");
const exploringSkills = mySkills.filter((skill) => skill.group === "exploring");

export const Skills = () => {
  return (
    <section className="section" id="skills">
      <p className="section-kicker">Habilidades</p>
      <h2 className="section-title">Uso hoy</h2>
      <p className="section-intro">
        C#, LINQ, POO, interfaces, async/await y manejo de errores. En ASP.NET: MVC, Entity
        Framework Core, Fluent API y DbContext.
      </p>

      <div className="skills-grid">
        <div className="skills-categories-wrap">
          <div className="tech-cards-wrap">
            {todaySkills.map((skill) => (
              <TechCard key={skill.id} name={skill.name} icon={skill.icon} />
            ))}
          </div>

          <div className="skill-category-group">
            <h3 className="skill-category-title">Explorando</h3>
            <div className="tech-cards-wrap">
              {exploringSkills.map((skill) => (
                <TechCard
                  key={skill.id}
                  name={skill.name}
                  icon={skill.icon}
                  isComingSoon
                />
              ))}
            </div>
          </div>
        </div>

        <div className="skills-soft-wrap">
          <h3 className="skill-heading">Cómo trabajo</h3>
          <ul className="soft-list">
            {softSkills.map((skill) => (
              <SoftSkillItem key={skill.title} skill={skill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
