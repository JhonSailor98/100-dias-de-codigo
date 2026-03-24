// Reemplaza estos datos con los del negocio real cuando tengas cliente
const negocio = {
    nombre: "Cafetería El Árbol",
    whatsapp: "5214421234567", // Cambia por número real
    instagram: "cafeteria.arbol",
    ubicacion: "https://maps.app.goo.gl/ejemplo",
    menu: "#" // Aquí va link a PDF o foto del menú
};
// WhatsApp
document.getElementById('link-whatsapp').addEventListener('click', (e) => {
    e.preventDefault();
    const mensaje = `Hola! Quiero hacer un pedido a ${negocio.nombre}`;
    window.open(`https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`, '_blank');
});
// Instagram
document.getElementById('link-instagram').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(`https://instagram.com/${negocio.instagram}`, '_blank');
});
// Menú
document.getElementById('link-menu').addEventListener('click', (e) => {
    e.preventDefault();
    // Si no hay menú real, mostramos un mensaje
    if (negocio.menu === '#') {
        alert('🍽️ El menú estará disponible pronto. Por ahora, pregunta por WhatsApp.');
    } else {
        window.open(negocio.menu, '_blank');
    }
});
// Ubicación
document.getElementById('link-ubicacion').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(negocio.ubicacion, '_blank');
});
// Botón de contacto para el dueño (TU número)
document.getElementById('btn-contacto').addEventListener('click', () => {
    const numero = "4423961439"; // PON AQUÍ TU NÚMERO REAL
    const mensaje = "Hola! Vi la página que hiciste para Cafetería El Árbol y quiero una para mi negocio";
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, '_blank');
});
// Animación al cargar
window.addEventListener('load', () => {
    console.log('☕ Página para negocio creada por @juan.dev.code');
});