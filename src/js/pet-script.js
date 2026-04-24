/**
 * pet-script.js - Lógica específica para WOLF & COLD
 */

window.onload = () => {
    initPetsModal();
    initMobileMenu();
};

/**
 * Modal de bienvenida para la tienda
 */
function initPetsModal() {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    `;

    const tarjeta = document.createElement("div");
    tarjeta.style.cssText = `
      background: #1a1a1a;
      border: 1px solid #3a3a3a;
      border-radius: 16px;
      padding: 2rem;
      max-width: 360px;
      width: 90%;
      text-align: center;
      font-family: sans-serif;
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 15px rgba(108, 99, 255, 0.4);
    `;

    tarjeta.innerHTML = `
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:#6c63ff;"></div>
      <div style="width:56px;height:56px;background:#2d2b4a;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0.5rem auto 1rem;">🐾</div>
      <p style="margin:0 0 4px;color:#a78bfa;font-size:13px;font-weight:500;letter-spacing:0.05em;">WOLF & COLD</p>
      <h2 style="margin:0 0 8px;color:#e8e8e8;font-size:20px;font-weight:600;">¡Bienvenido a la tienda!</h2>
      <p style="margin:0 0 1.5rem;color:#999;font-size:14px;line-height:1.6;">
        Encuentra el compañero perfecto y todo lo que necesitas para cuidarlo con amor.
      </p>
      <button id="btnVerMascotas" style="width:100%;background:#6c63ff;color:white;border:none;border-radius:10px;padding:12px 0;font-size:14px;font-weight:500;cursor:pointer;margin-bottom:12px;">Ver mascotas →</button>
      <p id="btnCerrarWolf" style="color:#666;font-size:12px;cursor:pointer;margin:0;">Quizás más tarde</p>
    `;

    overlay.appendChild(tarjeta);
    document.body.appendChild(overlay);

    const cerrar = () => overlay.remove();
    document.getElementById("btnVerMascotas").onclick = cerrar;
    document.getElementById("btnCerrarWolf").onclick = cerrar;
    overlay.onclick = (e) => { if (e.target === overlay) cerrar(); };
}

/**
 * Lógica del menú hamburguesa para la página de mascotas
 */
function initMobileMenu() {
    const menuBurgerButton = document.querySelector('.menuburger button');
    const closeMenuButton = document.querySelector('.cerrar-menu');
    const navElement = document.querySelector('.nav-area');

    if (menuBurgerButton && closeMenuButton && navElement) {
        menuBurgerButton.addEventListener('click', () => {
            navElement.classList.add('nav-visible');
        });

        closeMenuButton.addEventListener('click', () => {
            navElement.classList.remove('nav-visible');
        });

        const navLinks = navElement.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navElement.classList.remove('nav-visible');
            });
        });
    }
}