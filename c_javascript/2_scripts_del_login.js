document.addEventListener('DOMContentLoaded', () => {

    // LOGO → HOME
    const logo = document.getElementById('ContenedorLogo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }

    // ICONOS
    document.getElementById('ContenedorIconoWhatsapp')
        ?.addEventListener('click', () => {
            window.location.href = '../a_html/3_index_del_whatsapp.html';
        });

    document.getElementById('ContenedorIconoInstagram')
        ?.addEventListener('click', () => {
            window.location.href = 'https://www.instagram.com/maye_rap_2026/';
        });

    // LOGIN
    const btnLogin = document.getElementById('btnLogin');
    const modal = document.getElementById('modalBienvenida');
    const texto = document.getElementById('textoBienvenida');
    const btnAceptar = document.getElementById('btnAceptar');

    btnLogin.addEventListener('click', (e) => {
        e.preventDefault();

        const usuario = document.getElementById('usuario').value.trim();
        const clave = document.getElementById('password').value.trim();

        if (usuario === "" || clave === "") {
            alert("Por favor completa usuario y contraseña");
            return;
        }

        texto.textContent = `Bienvenida, ${usuario} 💖`;
        modal.classList.add('activo');
    });

    btnAceptar.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

});