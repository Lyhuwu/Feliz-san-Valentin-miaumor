// 1. INICIAR EXPERIENCIA
function startExperience() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('desktop-screen').style.display = 'block';
}

// 2. ABRIR VENTANAS
function openWindow(windowId) {
    // Primero cerramos todas para que no se amontonen
    const windows = document.querySelectorAll('.retro-window');
    windows.forEach(w => w.style.display = 'none');
    
    // Abrimos la seleccionada
    document.getElementById('window-' + windowId).style.display = 'flex';
}

// 3. CERRAR VENTANAS
function closeWindow(windowId) {
    document.getElementById('window-' + windowId).style.display = 'none';
    
    // TRUCO: Si cerramos la carta, detenemos el video de YouTube
    if (windowId === 'carta') {
        const iframe = document.querySelector('#window-carta iframe');
        if (iframe) {
            const tempSrc = iframe.src;
            iframe.src = ''; 
            iframe.src = tempSrc;
        }
    }
}
