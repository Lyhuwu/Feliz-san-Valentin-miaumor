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
    popup.style.display = 'flex';

    // RESETEAR EL ESTADO: Siempre mostrar la pregunta primero
    document.getElementById('step-pregunta').style.display = 'block';
    document.getElementById('step-respuesta').style.display = 'none';

    // Regresar el botón "No" a su lugar original por si se movió antes
    const btnNo = document.getElementById('btn-no');
    btnNo.style.position = 'static'; 
}

function cerrarPopup() {
    document.getElementById('valentine-popup').style.display = 'none';
}

function aceptarValentine() {
    // Ocultar pregunta, mostrar celebración
    document.getElementById('step-pregunta').style.display = 'none';
    document.getElementById('step-respuesta').style.display = 'block';
}

// === FUNCIÓN DEL BOTÓN ESCURRIDIZO (MÓVIL Y PC) ===
function moverBoton() {
    const btnNo = document.getElementById('btn-no');
    
    // Ancho y alto de la pantalla
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calcular nueva posición aleatoria
    // Restamos 100px para que no se salga de la pantalla
    const newX = Math.random() * (width - 100);
    const newY = Math.random() * (height - 100);

    // Aplicar posición fija para que "flote" libremente
    btnNo.style.position = 'fixed';
    btnNo.style.left = newX + 'px';
    btnNo.style.top = newY + 'px';
}
