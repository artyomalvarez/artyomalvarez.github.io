import "./about.css";

export const About = () => {
  return (
    <section className="section" id="about">
      <p className="section-kicker">Sobre mí</p>
      <h2 className="section-title">Backend, datos y disciplina operativa</h2>
      
      <div className="about-content">
        <p className="about-text">
          Soy <strong>Juan José Alvarez Manjarrez</strong>, aspirante a desarrollador de software
          radicado en Barranquilla. Me formo en la ruta avanzada de <strong>Riwi</strong> con
          foco en <strong>C#, .NET, ASP.NET Core y Node.js</strong>. Mi interés central está en el
          backend: construir APIs limpias, modelar dominios claros y diseñar soluciones estructuradas
          para necesidades reales de negocio.
        </p>

        <p className="about-text">
          He desarrollado proyectos como <strong>Cooperativa Financiera El Progreso</strong> (Web API
          REST en C# con LINQ y TRM), <strong>InDivízia</strong> (conciliación colaborativa de gastos
          grupales con POO y SQL en Esthercita-Factory), <strong>Veterinary Clinic System</strong>{" "}
          (arquitectura orientada a objetos con asincronía y tests) y <strong>ALTEA</strong> (SPA
          con Node.js y PostgreSQL). Me defino desde la honestidad de un perfil junior:
          compromiso técnico, código legible y ganas constantes de profundizar.
        </p>

        <div className="about-highlight-box">
          <div className="about-highlight-title">
            <span>🍳</span> Fundamentos, disciplina y &apos;mise en place&apos;
          </div>
          <p>
            Dato formativo: Además de programación, curso Cocina y Gastronomía en el Centro Inca y
            trabajé en <strong>Gelthy</strong> en la operación, inventario diario y trazabilidad de
            merma. Esa experiencia me enseñó el rigor de trabajar bajo alta presión, la importancia
            del orden estricto antes de producir y una perspectiva clara de cómo el software puede
            eliminar fricciones en la operación real de una empresa.
          </p>
        </div>
      </div>
    </section>
  );
};
