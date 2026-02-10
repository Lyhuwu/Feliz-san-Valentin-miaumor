/* === CONFIGURACIÓN GENERAL === */
:root {
    --bg-color: #2e2157; /* Morado oscuro */
    --window-bg: #e0e0e0; /* Gris Windows 95 */
    --header-bg: #ff6b9d; /* Rosa fuerte */
    --text-color: #333;
}

body {
    margin: 0;
    font-family: 'Press Start 2P', cursive;
    overflow: hidden; 
    background-color: var(--bg-color);
    color: white;
    /* Evita el zoom en móviles al hacer doble tap */
    touch-action: manipulation;
}

/* === PANTALLA DE INICIO === */
#intro-screen {
    position: absolute;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: url('assets/fondo-pixel.gif') no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    text-align: center;
}

.intro-content h1 {
    font-size: 20px;
    line-height: 1.5;
    text-shadow: 4px 4px 0 #000;
    margin-bottom: 20px;
}

.subtitle {
    font-size: 10px;
    margin-bottom: 40px;
    opacity: 0.9;
}

/* BOTÓN RETRO */
.pixel-btn {
    background: #ff6b9d;
    border: 4px solid #fff;
    color: white;
    padding: 15px 20px;
    font-family: inherit;
    font-size: 12px;
    cursor: pointer;
    box-shadow: 6px 6px 0 #000;
    transition: transform 0.1s;
}

.pixel-btn:active {
    transform: translate(4px, 4px);
    box-shadow: 2px 2px 0 #000;
}

/* === ESCRITORIO === */
#desktop-screen {
    width: 100vw; height: 100vh;
    background: url('assets/fondo-escritorio.jpg') no-repeat center center;
    background-size: cover;
    position: relative;
}

.icons-container {
    padding: 20px;
}

.desktop-icon {
    text-align: center;
    cursor: pointer;
    width: 100px;
}

.desktop-icon img {
    width: 60px;
    margin-bottom: 5px;
    filter: drop-shadow(2px 2px 0px #000); 
}

.desktop-icon span {
    font-size: 10px;
    background: rgba(0,0,0,0.5);
    padding: 2px 5px;
    border-radius: 4px;
}

/* === VENTANAS FLOTANTES (Estándar) === */
.retro-window {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    background: var(--window-bg);
    border: 2px solid #000;
    box-shadow: 8px 8px 0 #000;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    z-index: 10;
}

.window-header {
    background: var(--header-bg);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #000;
    color: white;
}

.close-btn {
    background: #ff3333;
    border: 2px solid #fff;
    color: white;
    font-family: inherit;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 2px 2px 0 #000;
}

.window-content {
    padding: 20px;
    max-height: 450px;
    overflow-y: auto; 
}

/* === ESTILOS ESPECIALES PARA LA CARTA PANTALLA COMPLETA === */

/* 1. Ventana de Pantalla Completa */
.full-screen-window {
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    top: 0 !important;
    left: 0 !important;
    transform: none !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
}

/* 2. Fondo GIF animado */
.gif-bg {
    /* CAMBIA ESTO POR TU GIF DE ESTRELLAS/CORAZONES */
    background: url('assets/fondo-carta.gif') no-repeat center center;
    background-size: cover;
}

/* 3. Header Transparente */
.transparent-header {
    background: rgba(255, 107, 157, 0.8); /* Rosa semi-transparente */
    border-bottom: 1px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(5px); /* Efecto de vidrio esmerilado */
}

/* 4. Contenido de Altura Completa */
.full-height-content {
    max-height: none !important;
    height: calc(100% - 50px); /* Resta la altura del header */
    padding: 20px;
}

/* 5. Contenedor de Video Transparente */
.transparent-video-box {
    margin-bottom: 20px;
    border: none;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.5);
    background: transparent;
}

/* 6. Texto Legible sobre el GIF (Cuadro Transparente) */
.transparent-text-box {
    font-family: 'Courier New', Courier, monospace; 
    font-size: 16px; /* Un poco más grande para leer mejor */
    line-height: 1.8;
    color: #fff; /* Texto blanco para mejor contraste */
    
    /* Fondo NEGRO semitransparente para que resalte sobre el gif */
    background: rgba(0, 0, 0, 0.6);
    
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    backdrop-filter: blur(3px); /* Efecto de vidrio */
    margin: 0 auto; /* Centrado */
    max-width: 800px; /* Ancho máximo para que no sea eterno en PC */
}

/* === GRILLA DE LA CARPETA SORPRESAS === */
.folder-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 10px;
}

.folder-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--text-color);
    cursor: pointer;
    transition: transform 0.1s;
}

.folder-item:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
}

.folder-item img {
    width: 50px;
    margin-bottom: 8px;
}

.folder-item span {
    font-size: 10px;
    text-align: center;
    font-weight: bold;
}

/* Scrollbar Bonita (para la carta) */
.window-content::-webkit-scrollbar {
    width: 8px;
}
.window-content::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.1); 
}
.window-content::-webkit-scrollbar-thumb {
    background: rgba(255, 107, 157, 0.8); 
    border-radius: 4px;
}
