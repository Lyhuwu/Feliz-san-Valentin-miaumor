let popupMostrado = false;

function startExperience() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('desktop-screen').style.display = 'block';
}

function openWindow(windowId) {
    document.querySelectorAll('.retro-window:not(.full-screen-window)').forEach(w => w.style.display = 'none');
    document.getElementById('window-' + windowId).style.display = 'flex';

    if (windowId === 'carta') {
        popupMostrado = false; 
        document.getElementById('valentine-popup').style.display = 'none';
        
        // Empezar a escuchar el scroll en la carta
        const scrollContainer = document.getElementById('carta-scroll-container');
        if(scrollContainer) scrollContainer.addEventListener('scroll', verificarScroll);
    }
}

function closeWindow(windowId) {
    document.getElementById('window-' + windowId).style.display = 'none';
    
    if (windowId === 'carta') {
        const iframe = document.querySelector('#window-carta iframe');
        if (iframe) { const tempSrc = iframe.src; iframe.src = ''; iframe.src = tempSrc; }
        
        const scrollContainer = document.getElementById('carta-scroll-container');
        if(scrollContainer) scrollContainer.removeEventListener('scroll', verificarScroll);
    }
}

function verificarScroll() {
    if (popupMostrado) return;
    const container = document.getElementById('carta-scroll-container');
    // Si llegamos cerca del final del scroll
    if (container.scrollHeight - container.scrollTop - container.clientHeight < 50) {
        mostrarPopupValentine();
        popupMostrado = true;
    }
}

function mostrarPopupValentine() {
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
}
