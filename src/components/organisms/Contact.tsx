import "./contact.css";

const linkedInUrl =
  "https://www.linkedin.com/in/juan-jose-alvarez-manjarrez-203976405/";
const githubUrl = "https://github.com/artyomalvarez";
const emailAddress = "alvarezmanjarrezjuanjose@gmail.com";

export const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <p className="section-kicker">Contacto</p>
      <h2 className="section-title">Hablemos de oportunidades</h2>

      <div className="contact-card">
        <p className="contact-card-text">
          Abierto a oportunidades como desarrollador junior o pasante en backend con{" "}
          <strong>C#, .NET, ASP.NET Core y Node.js</strong>, ya sea en Barranquilla o en remoto.
          Si buscas a alguien comprometido con el rigor técnico, la mejora continua y el trabajo en
          equipo, hablemos.
        </p>

        <div className="contact-channels">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-channel-btn"
          >
            <img src="/icons/LinkedIN_white.svg" alt="LinkedIn" />
            <span>Perfil en LinkedIn</span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-channel-btn"
          >
            <img src="/icons/Github_white.png" alt="GitHub" />
            <span>GitHub (@artyomalvarez)</span>
          </a>

          <a href={`mailto:${emailAddress}`} className="contact-channel-btn">
            <img src="/icons/Gmail_white.png" alt="Email" />
            <span>{emailAddress}</span>
          </a>
        </div>

        <ul className="contact-meta-list">
          <li>
            <strong>Ubicación:</strong> Barranquilla, Atlántico, Colombia
          </li>
          <li>
            <strong>Idiomas:</strong> Español (Nativo) · Inglés (A2)
          </li>
          <li>
            <strong>Enfoque:</strong> Backend · APIs REST · Modelado de Datos
          </li>
        </ul>
      </div>

      <div className="contact-footer">
        <div className="social-icons">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/icons/LinkedIN_white.svg" alt="LinkedIn" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img src="/icons/Github_white.png" alt="GitHub" />
          </a>
          <a href={`mailto:${emailAddress}`} aria-label="Enviar correo">
            <img src="/icons/Gmail_white.png" alt="Email" />
          </a>
        </div>
        <p>Juan José Alvarez Manjarrez © 2026</p>
      </div>
    </section>
  );
};
