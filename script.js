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

    // RESET: Asegurarnos de que el popup no estorbe si se vuelve a abrir la carta
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

function mostrarPopupValentine() {
    // Esto hace visible el popup
    const popup = document.getElementById('valentine-popup');
    popup.style.display = 'flex';
}

function cerrarPopup() {
    document.getElementById('valentine-popup').style.display = 'none';
}

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
