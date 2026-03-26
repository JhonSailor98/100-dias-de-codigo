const numero = "5214421234567";
const mensaje = "Hola, me interesa su servicio";
const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
document.getElementById("btnWhatsapp").onclick = () => window.open(url, "_blank");