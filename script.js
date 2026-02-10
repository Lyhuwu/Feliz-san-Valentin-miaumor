// Función para iniciar la experiencia (Botón Play Together)
function startExperience() {
    // 1. Ocultar la pantalla de inicio
    const intro = document.getElementById('intro-screen');
    intro.style.display = 'none';
    
    // 2. Mostrar el escritorio
    const desktop = document.getElementById('desktop-screen');
    desktop.style.display = 'block';

    // Debug: Mensaje en consola por si falla
    console.log("Experiencia iniciada");
}

// Función para abrir ventanas
function openWindow(windowId) {
    // Cierra todas las ventanas retro (no la carta full screen aun)
    const retroWindows = document.querySelectorAll('.retro-window');
    retroWindows.forEach(w => w.style.display = 'none');
    
    // Si abrimos la carta, aseguramos que se vea (es full screen)
    if (windowId === 'carta') {
        document.getElementById('window-carta').style.display = 'flex';
    } else {
        // Si es otra ventana, la mostramos normal
        document.getElementById('window-' + windowId).style.display = 'flex';
    }
}

// Función para cerrar ventanas
function closeWindow(windowId) {
    document.getElementById('window-' + windowId).style.display = 'none';

    // DETENER VIDEO YOUTUBE AL CERRAR
    if (windowId === 'carta') {
        const iframe = document.querySelector('#window-carta iframe');
        if (iframe) {
            const tempSrc = iframe.src;
            iframe.src = '';
            iframe.src = tempSrc;
        }
    }
}
