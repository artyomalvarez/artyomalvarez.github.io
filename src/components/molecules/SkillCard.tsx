import type { SoftSkill, TechSkill } from "../../data/skills";
import "./skill-card.css";

type TechSkillCardProps = {
  skill: TechSkill;
};

export const TechSkillCard = ({ skill }: TechSkillCardProps) => {
  return (
    <li className="skill-card">
      <span>{skill.name}</span>
    </li>
  );
};

type SoftSkillItemProps = {
  skill: SoftSkill;
};

export const SoftSkillItem = ({ skill }: SoftSkillItemProps) => {
  return (
    <li className="soft-skill">
      <i className={skill.iconClass} aria-hidden="true" />
      <p>
        <strong>{skill.title}:</strong> {skill.description}
      </p>
    </li>
  );
};
