// Datos que cambian
const datos = {
    diasSegundos: 11,
    proyectos: 11,
    seguidores: 2
};

// Actualizar estadísticas
document.getElementById('dias-seguidos').textContent = datos.diasSegundos;
document.getElementById('proyectos').textContent = datos.proyectos;
document.getElementById('seguidores').textContent = datos.seguidores;

// Links funcionales
document.getElementById('link-portafolio').addEventListener('click', (e) => {
    e.preventDefault();
    alert('🚧 Mi portafolio está en construcción. Pronto tendrás acceso.');
});

document.getElementById('link-whatsapp').addEventListener('click', (e) => {
    e.preventDefault();
    // Reemplaza con tu número
    const numero = '4423961439'; // Cambia esto
    window.open(`https://wa.me/${numero}?text=Hola!%20Vi%20tu%20página%20de%20links%20y%20quiero%20más%20info`, '_blank');
});

document.getElementById('link-github').addEventListener('click', (e) => {
    e.preventDefault();
    // Reemplaza con tu usuario de GitHub
    window.open('https://github.com/Jhonsailor', '_blank');
});

// Botón de contacto en footer
document.getElementById('btn-contacto').addEventListener('click', () => {
    const numero = '4423961439'; // Cambia esto
    window.open(`https://wa.me/${numero}?text=Hola!%20Vi%20tu%20página%20de%20links%20y%20quiero%20saber%20más%20sobre%20una%20página%20para%20mi%20negocio`, '_blank');
});

// Animación al cargar
window.addEventListener('load', () => {
    console.log('🚀 Link page de @juan.dev.code cargada');
    
    // Contar visitas (localStorage)
    let visitas = localStorage.getItem('visitas') || 0;
    visitas = parseInt(visitas) + 1;
    localStorage.setItem('visitas', visitas);
    
    if (visitas === 1) {
        console.log('🎉 Primera visita!');
    }
});