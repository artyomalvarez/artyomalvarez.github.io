import "./logo.css";

export const Logo = () => {
  return (
    <div className="logo-container" aria-label="{juanjochef}">
      {/* La llave de apertura en Naranja */}
      <span className="logo-brace">{'{'}</span>

      {/* Tu nombre en Blanco (o negro en modo claro) */}
      <span className="logo-name">juanjo</span>

      {/* El rol en Morado */}
      <span className="logo-role">chef</span>

      {/* La llave de cierre en Naranja */}
      <span className="logo-brace">{'}'}</span>
    </div>
  );
};
