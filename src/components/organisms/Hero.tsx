import { TechBadge } from "../atoms/TechBadge";
import { HeroButtons } from "../molecules/HeroButtons";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <span className="hero-badge">Aspiring Software Developer</span>
        <h1>Juan José Alvarez</h1>
        <div className="hero-tags">
          <TechBadge variant="blue">C# · .NET</TechBadge>
          <TechBadge variant="purple">ASP.NET Core</TechBadge>
          <TechBadge variant="green">Node.js & SQL</TechBadge>
          <TechBadge variant="orange">Barranquilla, CO</TechBadge>
        </div>
        <p className="hero-p">
          Desarrollador enfocado en el backend, diseño de APIs robustas y modelado de datos.
          Construyendo sistemas claros y orientados a resolver problemas de negocio reales.
        </p>
        <HeroButtons />
      </div>

      <div className="hero-img">
        <img src="/img/aca.jpg" alt="Juan José Alvarez Manjarrez" />
      </div>
    </section>
  );
};
