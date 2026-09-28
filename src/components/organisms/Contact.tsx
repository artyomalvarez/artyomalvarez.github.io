import "./contact.css";

const linkedInUrl =
  "https://www.linkedin.com/in/juan-jose-alvarez-manjarrez-203976405/";
const githubUrl = "https://github.com/artyomalvarez";
const mailUrl = "mailto:alvarezmanjarrezjuanjose@gmail.com";

export const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <p className="section-kicker">Contacto</p>
      <h2 className="section-title">¿Buscas un junior de backend?</h2>

      <div className="contact-card">
        <p className="contact-card-text">
          Estoy abierto a <strong>prácticas o un rol junior</strong> en C# y .NET, en Barranquilla
          o remoto. Hoy soy Product Owner de Firmeza en Riwi. Escríbeme o hablemos por LinkedIn.
        </p>

        <div className="contact-channels">
          <a href={mailUrl} className="contact-channel-btn is-mail">
            <img src="/icons/Gmail_white.png" alt="" />
            <span>Escríbeme</span>
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-btn is-linkedin"
          >
            <img src="/icons/LinkedIN_white.svg" alt="" />
            <span>LinkedIn</span>
          </a>
        </div>

        <ul className="contact-meta-list">
          <li>
            <strong>Email:</strong>{" "}
            <a href={mailUrl}>alvarezmanjarrezjuanjose@gmail.com</a>
          </li>
          <li>
            <strong>Ubicación:</strong> Barranquilla, Atlántico, Colombia
          </li>
          <li>
            <strong>Idiomas:</strong> Español (nativo) · Inglés (A2)
          </li>
          <li>
            <strong>Enfoque:</strong> Backend C# / .NET · ASP.NET · EF Core
          </li>
        </ul>
      </div>

      <div className="contact-footer">
        <div className="social-icons">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="is-linkedin"
            aria-label="Perfil de LinkedIn de Juan José Alvarez"
          >
            <img src="/icons/LinkedIN_white.svg" alt="" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="is-github"
            aria-label="GitHub de artyomalvarez"
          >
            <img src="/icons/Github_white.png" alt="" />
          </a>
        </div>
        <p>Juan José Alvarez Manjarrez © 2026</p>
      </div>
    </section>
  );
};
