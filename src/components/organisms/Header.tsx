import { useEffect, useState } from "react";
import { Logo } from "../atoms/Logo";
import { ThemeButton } from "../atoms/ThemeButton";
import { NavMenu } from "../molecules/NavMenu";
import "./header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#inicio" className="logo">
            <Logo />
          </a>

          <div className="header-actions">
            <a href="#contact" className="header-contact">
              Contáctame
            </a>
            <ThemeButton />
            <button
              type="button"
              className="menu-toggle"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <NavMenu isOpen={isMenuOpen} onNavigate={() => setIsMenuOpen(false)} />

      {isMenuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Cerrar menú"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};
