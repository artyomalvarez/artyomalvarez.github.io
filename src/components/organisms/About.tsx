import { ProfileCard } from "../molecules/ProfileCard";
import "./about.css";

const highlights = [
  { value: "C# · .NET · EF Core", label: "Stack principal" },
  { value: "PO en proyecto Riwi (Firmeza)", label: "Rol actual en formación" },
  { value: "6 meses en operación real (Gelthy)", label: "Inventario, merma y despacho" },
  { value: "InDivízia validada con usuarios", label: "Cálculo de gastos en grupo" },
];

export const About = () => {
  return (
    <section className="section" id="about">
      <p className="section-kicker">Sobre mí</p>
      <h2 className="section-title">Aprendo construyendo soluciones a problemas reales</h2>

      <div className="about-layout">
        <div className="about-content">
          <p className="about-text">
            Soy desarrollador backend junior en C# y .NET, de Barranquilla. Me estoy formando en
            ASP.NET en Riwi y, dentro de esa formación, soy Product Owner de Firmeza, un proyecto
            de equipo en Razor Pages (.NET 10): defino épicas e historias de usuario y organizo
            sprints y dailies.
          </p>
          <p className="about-text">
            Antes de programar trabajé seis meses en la operación de una panadería (Gelthy):
            inventario, control de merma y despacho de pedidos. De ahí nace mi próximo proyecto, un
            inventario para locales de comida.
          </p>
          <p className="about-text">
            Mi proyecto más completo es InDivízia, una app para dividir gastos en grupo con backend
            .NET por capas. El cálculo está probado con casos como 38 personas donde solo 17
            pagaron, y lo validé con un grupo real.
          </p>
          <p className="about-text">
            Busco prácticas o un primer rol junior en C#/.NET, en Barranquilla o remoto. Estoy
            mejorando mi inglés (hoy A2).
          </p>
          <p className="about-text">Dato curioso: también estudio cocina en Centro Inca.</p>

          <ul className="about-highlights" aria-label="Resumen profesional">
            {highlights.map((item) => (
              <li key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="about-highlight-box">
            <p className="about-highlight-title">Lo que viene</p>
            <p>Consolidarme en C#/.NET y mejorar mi inglés técnico.</p>
          </div>
        </div>

        <ProfileCard />
      </div>
    </section>
  );
};
