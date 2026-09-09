import { TechCard } from "../molecules/TechCard";
import { SoftSkillItem } from "../molecules/SkillCard";
import { mySkills, softSkills, type SkillCategory } from "../../data/skills";
import "./skills.css";

const categories: SkillCategory[] = [
  "Frameworks & Librerías",
  "Lenguajes",
  "Bases de Datos & Herramientas",
];

export const Skills = () => {
  return (
    <section className="section" id="skills">
      <p className="section-kicker">Habilidades</p>
      <h2 className="section-title">Tecnologías y competencias</h2>
      <div className="skills-grid">
        <div className="skills-categories-wrap">
          {categories.map((category) => {
            const categorySkills = mySkills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category} className="skill-category-group">
                <h3 className="skill-category-title">{category}</h3>
                <div className="tech-cards-wrap">
                  {categorySkills.map((skill) => (
                    <TechCard
                      key={skill.id}
                      name={skill.name}
                      icon={skill.icon}
                      isComingSoon={skill.isComingSoon}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-soft-wrap">
          <h3 className="skill-heading">Soft Skills</h3>
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
