// Pantalla de inicio
function startExperience() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('desktop-screen').style.display = 'block';
}

// Abrir ventanas
function openWindow(windowId) {
    // Cerrar otras ventanas normales
    document.querySelectorAll('.retro-window:not(.full-screen-window)').forEach(w => w.style.display = 'none');
    
    // Mostrar la ventana elegida
    document.getElementById('window-' + windowId).style.display = 'flex';

    // RESET: Si abrimos la carta, aseguramos que el popup NO se vea aún
    if (windowId === 'carta') {
        document.getElementById('valentine-popup').style.display = 'none';
    }
}

// Cerrar ventanas
function closeWindow(windowId) {
    document.getElementById('window-' + windowId).style.display = 'none';
    
    // Si cerramos la carta, detener el video
    if (windowId === 'carta') {
        const iframe = document.querySelector('#window-carta iframe');
        if (iframe) { const tempSrc = iframe.src; iframe.src = ''; iframe.src = tempSrc; }
    }
}

// === LÓGICA DEL POPUP ===

// 1. Mostrar la pregunta (solo al dar clic en el botón de la carta)
function mostrarPopupValentine() {
    document.getElementById('valentine-popup').style.display = 'flex';
}

// 2. Cerrar si dice que no
function cerrarPopup() {
    document.getElementById('valentine-popup').style.display = 'none';
}

// 3. Celebrar si dice que sí
function aceptarValentine() {
    const modalContent = document.querySelector('.valentine-modal .modal-content');
    modalContent.innerHTML = `
        <h1 style="font-size:40px;">🎉💖🎉</h1>
        <h3>¡SABÍA QUE DIRÍAS QUE SÍ!</h3>
        <p>Te amo infinito.</p>
        <button class="pixel-btn" onclick="cerrarPopup(); closeWindow('carta'); openWindow('sorpresas')">
            Volver al escritorio
        </button>
    `;
}
