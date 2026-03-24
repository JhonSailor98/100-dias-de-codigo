// Seleccionar todos los botones de proyecto
const botonesProyecto = document.querySelectorAll('.btn-proyecto:not(:disabled)');

// Agregar evento a cada botón
botonesProyecto.forEach(boton => {
    boton.addEventListener('click', function() {
        const proyecto = this.getAttribute('data-proyecto');
        
        if (proyecto === '1') {
            //alert('🎉 Día 1: Mi primera tarjeta. Fue el primer paso de este viaje.');
             window.open('https://www.instagram.com/p/DVzzbNFjjeS/?img_index=1', '_blank');
        } else if (proyecto === '2') {
            //alert('✨ Día 2: Tarjetas con Flexbox. Ahí empecé a entender la magia.');
            window.open('https://www.instagram.com/p/DV1lQ1ekUcQ/?img_index=1', '_blank');
        }
        
    });
});

// Efecto extra: cambiar color del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.opacity = '0.85';
        header.style.padding = '2rem';
    } else {
        header.style.opacity = '1';
        header.style.padding = '4rem 2rem';
    }
});

// Mensaje de bienvenida en consola (para los devs que inspeccionen)
console.log('🚀 Sitio en construcción por @juan.dev.code');