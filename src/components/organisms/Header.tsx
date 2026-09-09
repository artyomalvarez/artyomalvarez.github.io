import { useState } from "react";
import { Logo } from "../atoms/Logo";
import { ThemeButton } from "../atoms/ThemeButton";
import { NavMenu } from "../molecules/NavMenu";
import "./header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo" aria-label="Inicio">
          <Logo />
        </a>

        <NavMenu isOpen={isMenuOpen} onNavigate={() => setIsMenuOpen(false)} />

        <div className="header-actions">
          <ThemeButton />
          <button
            type="button"
            className="menu-toggle"
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};
