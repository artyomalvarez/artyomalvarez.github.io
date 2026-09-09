# 🌐 Portafolio Profesional - Juan Alvarez

> Portafolio web integral que combina la pasión por la gastronomía y la tecnología, con una sección especializada de adopción de mascotas denominada **WOLF & COLD**.

---

## 🚀 Tecnologías Utilizadas

| Categoría | Tecnología |
|-----------|-----------|
| Frontend | HTML5, CSS3, JavaScript Vanilla |
| Arquitectura CSS | Atomic Design (Átomos, Moléculas, Organismos) |
| Iconografía | Font Awesome 6.5.1, Devicon |

---

## 📁 Estructura del Proyecto

```
artyomalvarez.github.io/
├── public/                    # Recursos estáticos (imágenes, iconos)
├── src/
│   ├── components/
│   │   ├── atomos/         # Componentes atomicos
│   │   │   ├── atoms.css
│   │   │   ├── button.css
│   │   │   ├── input.css
│   │   │   └── pet-atoms.css
│   │   │   ├── projects-elements.css
│   │   │   ├── typography.css
│   │   │   ├── variables.css
│   │   ├── molecules/         # Componentes moleculares
│   │   │   ├── hero-buttons.css
│   │   │   ├── molecules.css
│   │   │   ├── nav-menu.css
│   │   │   └── pet-molecules.css
│   │   │   ├── skill-card.css
│   │   │   ├── social-group.css
│   │   └── organism/          # Componentes organismos
│   │       ├── about-section.css
│   │       ├── contact-section.css
│   │       ├── footer.css
│   │       ├── header.css
│   │       ├── hero.css
│   │       ├── organism.css
│   │       ├── pet-organims.css
│   │       ├── projects-grid.css
│   │       └── skills-wrapper.css
│   ├── css/                   # Estilos globales y específicos
│   │   ├── style.css
│   │   └── pet-style.css
│   ├── js/                    # Lógica de interactividad y componentes
│   │   └── script.js
│   └── views/                 # Páginas secundarias
│       └── pets.html          # Sección Mascotas (Wolf & Cold)
├── index.html                 # Página principal
└── README.md
```

---

## ✨ Características Principales

- 📱 **Diseño Responsivo** — Adaptabilidad total a dispositivos móviles, tablets y escritorio.
- 🐾 **Marketplace de Mascotas** — Sección temática *Wolf & Cold* con tarjetas interactivas y formularios de solicitud.
- 🧩 **Gestión de Componentes** — Uso de `@import` en CSS para una carga estructurada de estilos basada en Atomic Design.

---

## 🖥️ Instalación y Uso

1. Clona el repositorio:
```bash
git clone https://github.com/artyomalvarez/artyomalvarez.github.io.git
```

2. Accede al directorio del proyecto:
```bash
cd artyomalvarez.github.io
```

3. Abre el archivo `index.html` en cualquier navegador moderno.

> No requiere instalación de dependencias adicionales.

---

## 🌍 Demo en Vivo

🔗 [artyomalvarez.github.io](https://artyomalvarez.github.io)

---

## 📬 Contacto

Desarrollado con 💙 por **Juan Alvarez**  
*Un hombre que quiere llevar la cocina a la aotomatizacion*

---

© 2026. Todos los derechos reservados.






1. Archivos de Componentes (React)
Regla: PascalCase (Todas las palabras empiezan con mayúscula, sin espacios ni guiones).
Por qué: React exige que tus componentes empiecen con mayúscula para diferenciarlos de las etiquetas HTML normales (<header> vs <Header/>).

✅ Correcto: Header.tsx, ProjectCard.tsx, Button.tsx

❌ Incorrecto: header.tsx, project-card.tsx, button.js

2. Carpetas
Regla: Todo en minúsculas. Si son agrupaciones, usamos plurales.
Por qué: Evita problemas al subir el código a GitHub o al cambiar entre Linux (que es sensible a mayúsculas) y Windows.

✅ Correcto: atoms, molecules, organisms, styles, data

❌ Incorrecto: Atoms, Molecules, organism (singular)

3. Variables, Funciones y Archivos de Datos (.ts)
Regla: camelCase (La primera palabra en minúscula, las siguientes con la primera letra en mayúscula).
Por qué: Es el estándar universal de JavaScript para la lógica.

✅ Correcto: isMenuOpen, toggleMenu(), projects.ts, contactData.ts

❌ Incorrecto: IsMenuOpen, toggle_menu(), Projects.ts

4. Clases de CSS
Regla: kebab-case (Todo en minúsculas, separado por guiones).
Por qué: Es el estándar de CSS y facilita la lectura rápida.

✅ Correcto: nav-menu, btn-primary, hero-title

❌ Incorrecto: navMenu, btn_primary, HeroTitle