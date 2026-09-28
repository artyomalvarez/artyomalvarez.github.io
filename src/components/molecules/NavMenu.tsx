import "./nav-menu.css";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

type NavMenuProps = {
  isOpen: boolean;
  onNavigate: () => void;
};

export const NavMenu = ({ isOpen, onNavigate }: NavMenuProps) => {
  return (
    <nav
      id="primary-navigation"
      className={`nav-shell${isOpen ? " is-open" : ""}`}
      aria-label="Principal"
    >
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
