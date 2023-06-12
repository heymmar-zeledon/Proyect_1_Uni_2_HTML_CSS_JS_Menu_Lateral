const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const saludarButton = document.getElementById('saludarButton');
const contenido = document.querySelector('.contenido');
const saludoMensaje = document.getElementById('saludoMensaje');
const formularioDiv = document.getElementById('formulario');


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');    
});

function showButton() {
    saludarButton.classList.remove('hidden');
}

function showSaludo() {
    saludoMensaje.classList.remove("oculto");
    saludoMensaje.classList.add("show");
}

function ocultarMensaje() {
    var saludoMensaje = document.getElementById("saludoMensaje");
    saludoMensaje.classList.remove("show");
    saludoMensaje.classList.add("oculto");
}

function showForm() {
    formularioDiv.classList.remove('hidden');
}