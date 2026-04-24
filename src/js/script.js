/**
 * script.js - Dinamismo para el Portafolio
 */

// 1. Mensaje de bienvenida en consola
console.log("¡Bienvenido al portafolio de Juan Alvarez!");

// 2. Interacción para cambiar texto (Ejemplo: Al hacer clic en el botón de contacto)
const btnSecundario = document.querySelector('.btn-secondary');
const heroParrafo = document.querySelector('.hero-p');

if (btnSecundario && heroParrafo) {
    btnSecundario.addEventListener('click', (e) => {
        // Evitamos el salto si es un enlace vacío para el ejemplo
        heroParrafo.textContent = "¡Gracias por tu interés! Desliza para contactarme.";
        heroParrafo.style.color = "#09f";
    });
}

// 3. Lógica de bienvenida (Modal)
window.onload = () => {
    // Reemplazamos el alert antiguo por el modal visual
    // alert("Hola, estás visitando el portafolio de Juan Alvarez"); // Comentado para usar el modal
    
    // Detectamos en qué página estamos para mostrar el modal adecuado
    if (document.querySelector('.hero-pets')) { // Asume que .hero-pets es un identificador único de la página de mascotas
        initPetsModal();
    } else { // Si no es la página de mascotas, asumimos que es el index
        initWelcomeModal();
    }
};

/**
 * Crea y muestra el modal de bienvenida dinámicamente
 */
function initWelcomeModal() {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.65);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    `;

    const tarjeta = document.createElement("div");
    tarjeta.style.cssText = `
      background: #1f2937;
      border: 1px solid #374151;
      border-radius: 16px;
      padding: 2rem;
      max-width: 360px;
      width: 90%;
      text-align: center;
      font-family: sans-serif;
    `;

    tarjeta.innerHTML = `
      <p style="margin:0 0 4px;color:#a855f7;font-size:13px;font-weight:500;">{juanjochef}</p>
      <h2 style="margin:0 0 8px;color:#f9fafb;font-size:20px;font-weight:600;">¡Hola! Soy Juan Alvarez</h2>
      <p style="margin:0 0 1.5rem;color:#9ca3af;font-size:14px;line-height:1.6;">
        Estudiante de cocina y programador junior.<br>Bienvenido a mi portafolio.
      </p>
      <button id="btnCerrarModal" style="
        width: 100%;
        background: #7c3aed;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 12px 0;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        margin-bottom: 12px;
      ">Ver mi trabajo →</button>
      <p id="textoCerrarModal" style="color:#6b7280;font-size:12px;cursor:pointer;margin:0;">
        Quizás más tarde
      </p>
    `;

    overlay.appendChild(tarjeta);
    document.body.appendChild(overlay);

    const cerrar = () => overlay.remove();

    document.getElementById("btnCerrarModal").onclick = cerrar;
    document.getElementById("textoCerrarModal").onclick = cerrar;
    overlay.onclick = (e) => { if (e.target === overlay) cerrar(); };
}

// --- Funcionalidad del Menú Hamburguesa ---

// Selecciona los elementos del DOM
const menuBurgerButton = document.querySelector('.menuburger button');
const closeMenuButton = document.querySelector('.cerrar-menu');
const navElement = document.querySelector('nav');

// Verifica que los elementos existan antes de añadir los event listeners
if (menuBurgerButton && closeMenuButton && navElement) {
    // Evento para abrir el menú al hacer clic en el botón de hamburguesa
    menuBurgerButton.addEventListener('click', () => {
        navElement.classList.add('nav-visible'); // Añade la clase para mostrar el menú
        console.log("Menú hamburguesa abierto.");
    });

    // Evento para cerrar el menú al hacer clic en el botón de cerrar
    closeMenuButton.addEventListener('click', () => {
        navElement.classList.remove('nav-visible'); // Remueve la clase para ocultar el menú
        console.log("Menú hamburguesa cerrado.");
    });

    // Cerrar el menú automáticamente al hacer clic en cualquier enlace (incluyendo el de mascotas)
    const navLinks = navElement.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navElement.classList.remove('nav-visible');
        });
    });
} else {
    console.warn("No se encontraron todos los elementos para el menú hamburguesa. Asegúrate de que '.menuburger button', '.cerrar-menu' y 'nav' existan en el DOM.");
}