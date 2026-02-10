// Pantalla de inicio
function startExperience() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('desktop-screen').style.display = 'block';
}

// Abrir ventanas
function openWindow(windowId) {
    document.querySelectorAll('.retro-window:not(.full-screen-window)').forEach(w => w.style.display = 'none');
    document.getElementById('window-' + windowId).style.display = 'flex';

    if (windowId === 'carta') {
        // Aseguramos que el popup esté cerrado al entrar
        document.getElementById('valentine-popup').style.display = 'none';
    }
}

// Cerrar ventanas
function closeWindow(windowId) {
    document.getElementById('window-' + windowId).style.display = 'none';
    if (windowId === 'carta') {
        const iframe = document.querySelector('#window-carta iframe');
        if (iframe) { const tempSrc = iframe.src; iframe.src = ''; iframe.src = tempSrc; }
    }
}

// === LÓGICA DEL POPUP ===

function mostrarPopupValentine() {
    const popup = document.getElementById('valentine-popup');
    // Forzamos la visibilidad
    popup.style.display = 'flex';
}

function cerrarPopup() {
    document.getElementById('valentine-popup').style.display = 'none';
}

function aceptarValentine() {
    // Buscamos el contenido del popup para cambiar el mensaje
    const caja = document.querySelector('.popup-box');
    
    caja.innerHTML = `
        <h1 style="font-size:30px; margin:20px 0;">🎉🥰🎉</h1>
        <h3 style="color:#ff6b9d;">¡SABÍA QUE DIRÍAS QUE SÍ!</h3>
        <p>Te amo infinito.</p>
        <br>
        <button class="pixel-btn" onclick="cerrarPopup(); closeWindow('carta'); openWindow('sorpresas')">
            Volver al escritorio
        </button>
    `;
}
