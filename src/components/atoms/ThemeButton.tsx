import { useState } from "react";
import { toggleTheme, type Theme } from "../../theme";
import "./theme-button.css";

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export const ThemeButton = () => {
  const [theme, setTheme] = useState<Theme>(readTheme);

  return (
    <button
      type="button"
      className="theme-button"
      aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
      onClick={() => setTheme(toggleTheme(theme))}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.2 6.2l1.4 1.4M16.4 16.4l1.4 1.4M6.2 17.8l1.4-1.4M16.4 7.6l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 14.3A8.5 8.5 0 0 1 9.7 3 7 7 0 1 0 21 14.3Z" />
        </svg>
      )}
    </button>
  );
};
