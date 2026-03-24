// Datos del negocio (CÁMBIALOS por el que elijas contactar)
const negocio = {
    nombre: "Peluquería Estilo",
    telefono: "5214421234567", // Número de WhatsApp del negocio
    instagram: "peluqueria.estilo",
    ubicacion: "https://maps.app.goo.gl/uD7Av8neUbVUkrDu8"
};
// Botón de WhatsApp en hero
document.getElementById('btn-whatsapp').addEventListener('click', (e) => {
    e.preventDefault();
    const mensaje = `Hola! Quisiera reservar un turno en ${negocio.nombre}`;
    window.open(`https://wa.me/${negocio.telefono}
        ?text=${encodeURIComponent(mensaje)}`, '_blank');
});
// Botón de mapa
document.getElementById('btn-mapa').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(negocio.ubicacion, '_blank');
});
// Botón de WhatsApp en footer
document.getElementById('btn-whatsapp-footer').addEventListener('click', (e) => {
    e.preventDefault();
    const mensaje = `Hola! Quisiera reservar un turno en ${negocio.nombre}`;
    window.open(`https://wa.me/${negocio.telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
});
