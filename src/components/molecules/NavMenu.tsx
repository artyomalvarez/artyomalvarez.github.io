import "./nav-menu.css";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#education", label: "Educación" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

type NavMenuProps = {
  isOpen: boolean;
  onNavigate: () => void;
};

export const NavMenu = ({ isOpen, onNavigate }: NavMenuProps) => {
  return (
    <nav className={`nav-shell${isOpen ? " is-open" : ""}`} aria-label="Principal">
      <button type="button" className="nav-close" onClick={onNavigate}>
        Cerrar
      </button>
      <ul className="nav-menu">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={onNavigate}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
