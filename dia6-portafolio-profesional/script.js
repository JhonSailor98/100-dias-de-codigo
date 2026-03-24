// Botón de WhatsApp en contacto
document.getElementById('btn-contacto').addEventListener('click', () => {
    const numero = "4423961439"; // PON AQUÍ TU NÚMERO REAL
    const mensaje = "Hola! Vi tu portafolio y quiero saber más sobre tus servicios para mi negocio en Querétaro";
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, '_blank');
});

// Smooth scroll para los links del nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(102, 126, 234, 0.95)';
        nav.style.padding = '0.5rem 2rem';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '1rem 2rem';
    }
});