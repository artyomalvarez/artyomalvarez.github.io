import { TechBadge } from "../atoms/TechBadge";
import { HeroButtons } from "../molecules/HeroButtons";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <p className="hero-badge">Backend junior · C# / .NET</p>
        <h1>
          Juan José
          <span>Alvarez Manjarrez</span>
        </h1>
        <p className="hero-lead">Aprendo construyendo soluciones a problemas reales.</p>
        <p className="hero-p">
          De Barranquilla. Me formo en <strong>C#, .NET y ASP.NET</strong> en Riwi. Busco prácticas
          o un primer rol junior, en la ciudad o remoto.
        </p>
        <div className="hero-tags">
          <TechBadge variant="blue">C# · .NET</TechBadge>
          <TechBadge variant="purple">ASP.NET · EF Core</TechBadge>
          <TechBadge variant="green">Product Owner</TechBadge>
          <TechBadge variant="orange">Barranquilla, CO</TechBadge>
        </div>
        <HeroButtons />
        <p className="hero-availability">
          <span className="hero-availability-dot" aria-hidden="true" />
          Disponible para junior / prácticas
        </p>
      </div>

      <div className="hero-portrait">
        <figure className="hero-frame">
          <img
            src="/img/juan-jose.jpg"
            alt="Retrato profesional de Juan José Alvarez Manjarrez, desarrollador de software en Barranquilla"
            width={1067}
            height={1600}
          />
          <figcaption>
            <span>Juan José Alvarez</span>
            <span className="hero-frame-status">
              <span className="hero-availability-dot" aria-hidden="true" />
              Disponible
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
