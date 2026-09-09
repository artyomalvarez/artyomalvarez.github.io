export type Theme = "light" | "dark";

export const themeStorageKey = "theme";

export function getStoredTheme(): Theme {
  const stored = window.localStorage.getItem(themeStorageKey);
  return stored === "light" ? "light" : "dark";
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  window.localStorage.setItem(themeStorageKey, theme);
}

export function toggleTheme(current: Theme): Theme {
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}
