// corregir sintaxis y agregar funcionalidad de redirección
function metodoofuncionsaludar() {
    const contenedordelsaludoenjava = document.getElementById("contenedordelsaludodesdehtml");
    if (contenedordelsaludoenjava) {
        contenedordelsaludoenjava.textContent = "Hola, esto fue impreso desde javascript";
    }
}

// navegación al hacer clic en el icono de login
document.addEventListener('DOMContentLoaded', () => {
    const loginIcon = document.getElementById('ContenedorIconoLogin');
    if (loginIcon) {
        loginIcon.addEventListener('click', () => {
            // cambiar la ruta según el nombre real de la página
            window.location.href = '../a_html/2_index_del_login.html';
        });
    }
});
