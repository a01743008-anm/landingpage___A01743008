// Animación del Fondo Espacial Interactivo (Estrellas en Movimiento)
const canvas = document.getElementById('space-canvas');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 150;

function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
}

function initStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.3 + 0.05
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.shadowBlur = star.radius * 2;
        ctx.shadowColor = '#FFFFFF';
        ctx.fill();
        
        // Movimiento sutil hacia arriba (simulando navegación en el espacio)
        star.y -= star.speed;
        
        // Titileo sutil
        star.alpha += (Math.random() - 0.5) * 0.02;
        if (star.alpha < 0.2) star.alpha = 0.2;
        if (star.alpha > 1) star.alpha = 1;

        // Reposicionar si sale de la pantalla
        if (star.y < 0) {
            star.y = canvas.height;
            star.x = Math.random() * canvas.width;
        }
    }
    
    requestAnimationFrame(drawStars);
}

window.addEventListener('resize', () => {
    resizeCanvas();
    initStars();
});

// Inicializar animación al cargar la página
resizeCanvas();
initStars();
drawStars();
