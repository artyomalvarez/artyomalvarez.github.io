import "./profile-card.css";

const facts = [
  { label: "Enfoque", value: "Backend C# / .NET" },
  { label: "Ahora", value: "Firmeza · Product Owner" },
  { label: "Disponibilidad", value: "Junior / prácticas" },
  { label: "Ubicación", value: "Barranquilla, CO" },
];

export const ProfileCard = () => {
  return (
    <aside className="profile-card" aria-label="Perfil profesional">
      <p className="profile-card-kicker">Perfil profesional</p>
      <h3 className="profile-card-name">Juan José Alvarez Manjarrez</h3>
      <p className="profile-card-role">Backend junior · C# / .NET</p>

      <dl className="profile-card-facts">
        {facts.map((fact) => (
          <div key={fact.label} className="profile-card-fact">
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <a className="profile-card-mail" href="mailto:alvarezmanjarrezjuanjose@gmail.com">
        alvarezmanjarrezjuanjose@gmail.com
      </a>
      <a
        className="profile-card-linkedin"
        href="https://www.linkedin.com/in/juan-jose-alvarez-manjarrez-203976405/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </aside>
  );
};
