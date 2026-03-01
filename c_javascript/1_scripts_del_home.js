// navegación al hacer clic en el icono de login
document.addEventListener('DOMContentLoaded', () => {
    const loginIcon = document.getElementById('ContenedorIconoLogin');
    if (loginIcon) {
        loginIcon.addEventListener('click', () => {
            // cambiar la ruta según el nombre real de la página
			window.location.href = '../a_html/2_index_del_login.html';
        });
    }

    const whatsappIcon = document.getElementById('ContenedorIconoWhatsapp');
    if (whatsappIcon) {
        whatsappIcon.addEventListener('click', () => {
            // ir a la página de whatsapp simulada
            window.location.href = '../a_html/3_index_del_whatsapp.html';
        });
    }

    const instaIcon = document.getElementById('ContenedorIconoInstagram');
    if (instaIcon) {
        instaIcon.addEventListener('click', () => {
            // abrir Instagram externo
            window.location.href = 'https://www.instagram.com/maye_rap_2026/';
        });
    }
});
