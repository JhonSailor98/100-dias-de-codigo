const form = document.getElementById('formCita');
const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (!nombre || !telefono) {
        mensajeConfirmacion.textContent = '❌ Por favor, completa al menos tu nombre y teléfono.';
        mensajeConfirmacion.style.color = '#e74c3c';
        return;
    }

    // Aquí se puede guardar la información (por ahora solo mostramos éxito)
    mensajeConfirmacion.textContent = `✅ Gracias ${nombre}, en menos de 1 hora te contactamos al ${telefono} para agendar tu cita.`;
    mensajeConfirmacion.style.color = '#2c7da0';

    // Limpia el formulario (opcional)
    form.reset();
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