function startExperience() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('desktop-screen').style.display = 'block';
}

function openWindow(windowId) {
    // Cerrar otras ventanas normales
    document.querySelectorAll('.retro-window:not(.full-screen-window)').forEach(w => w.style.display = 'none');
    
    // Abrir la ventana deseada
    document.getElementById('window-' + windowId).style.display = 'flex';

    // Si abrimos la carta, aseguramos que el popup esté cerrado al inicio
    if (windowId === 'carta') {
        document.getElementById('valentine-popup').style.display = 'none';
    }
}

function closeWindow(windowId) {
    document.getElementById('window-' + windowId).style.display = 'none';
    
    // Detener video al cerrar carta
    if (windowId === 'carta') {
        const iframe = document.querySelector('#window-carta iframe');
        if (iframe) { const tempSrc = iframe.src; iframe.src = ''; iframe.src = tempSrc; }
    }
}

// === FUNCIONES DEL POPUP ===

function mostrarPopupValentine() {
    // Esto hace visible el popup encima de la carta
    document.getElementById('valentine-popup').style.display = 'flex';
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
    // Opcional: Aquí podrías lanzar confeti si quisieras
}
