// redirige al home cuando se hace clic en el logo

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('ContenedorLogo');
    if (logo) {
        logo.addEventListener('click', () => {
            // la ruta puede ajustarse según la ubicación real
            window.location.href = '../index.html';
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

