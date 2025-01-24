* Allgemeine Reset-Einstellungen */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    background-color: #121212;
    color: #ffffff;
    cursor: url('assets/images/circle.png') 16 16, pointer;
}

/* Overlay für die Sidebar */
.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 2;
}

/* Bild-Container für das Header-Bild */
.header-image-container {
    text-align: center;
    margin-bottom: 0;
}

.header-image {
    width: 100%;
    height: auto;
    max-width: 2560px;
    max-height: 360px;
}

/* Oberer leuchtender Streifen (direkt unter dem Header-Bild) */
.header-box-container {
    width: 100%;
    height: 3px; /* Höhe auf 3px */
    background: linear-gradient(90deg, red, orange, yellow, green, cyan, blue, purple);
    background-size: 300% 100%;
    animation: rainbow 15s linear infinite;
    position: fixed; /* Fest positioniert */
    top: 360px; /* Abstand vom oberen Rand (Höhe des Header-Bildes) */
    left: 0;
    z-index: 1; /* Unter der Sidebar */
}

/* Sidebar */
.sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    left: -250px;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    z-index: 3;
    box-shadow: 5px 0 20px rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar.open {
    width: 250px;
    left: 0;
}

/* Signatur der Künstlerin */
.artist-signature {
    text-align: center;
    padding: 20px;
    animation: float 3s ease-in-out infinite;
}

.artist-signature img {
    max-width: 100%;
    height: auto;
}

/* Links in der Sidebar */
.sidebar a {
    padding: 10px 10px 10px 32px;
    text-decoration: none;
    font-size: 22px;
    color: rgba(255, 255, 255, 0.9);
    display: block;
    transition: 0.3s;
    font-family: 'Pacifico', cursive;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 5px 10px;
    border-radius: 5px;
    cursor: url('assets/images/circle.png') 16 16, pointer;
    position: relative; /* Relative Positionierung */
    top: 0; /* Immer auf der gleichen Höhe */
    transition: top 0s; /* Keine Animation für die Höhe */
}

.sidebar a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 1);
    transform: translateX(5px);
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}

/* Button zum Öffnen und Schließen der Sidebar */
.toggle-button {
    font-size: 60px;
    color: #fff;
    background-color: transparent;
    border-radius: 50%;
    padding: 15px;
    cursor: url('assets/images/circle.png') 16 16, pointer;
    position: fixed;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    z-index: 3;
    transition: left 0.5s ease, transform 0.3s ease;
}

.sidebar.open + .toggle-button {
    left: 265px;
    transform: translateY(-50%) rotate(90deg);
}

/* Unterer leuchtender Streifen (direkt über dem Footer) */
.second-header-box-container {
    width: 100%;
    height: 3px; /* Höhe auf 3px */
    background: linear-gradient(90deg, red, orange, yellow, green, cyan, blue, purple);
    background-size: 300% 100%;
    animation: rainbow 15s linear infinite;
    position: fixed; /* Fest positioniert */
    bottom: 51px; /* Abstand vom unteren Rand (Höhe des Footers) */
    left: 0;
    z-index: 1; /* Unter der Sidebar */
}

/* Footer mit Hintergrundbild */
footer {
    width: 100%;
    height: 51px;
    position: relative; /* Am Ende des Inhalts */
    background-color: rgba(0, 0, 0, 0.8); /* Hintergrundfarbe für bessere Sichtbarkeit */
    z-index: 1;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}

.footer-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.footer-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

footer p {
    position: relative;
    z-index: 1;
    color: #fff;
    text-align: center;
    line-height: 51px;
    margin: 0;
}

footer a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

footer a:hover {
    color: #007bff;
}

/* Animationen */
@keyframes rainbow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
}

/* Stile für den Hauptinhalt */
.content {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    flex: 1; /* Füllt den verfügbaren Platz aus */
    padding-bottom: 100px; /* Platz für Footer und bunten Streifen */
}   
