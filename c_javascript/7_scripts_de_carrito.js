// redirige al home cuando se hace clic en el logo

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('ContenedorLogo');
    if (logo) {
        logo.addEventListener('click', () => {
            // la ruta puede ajustarse según la ubicación real
            window.location.href = '../index.html';
        });
    }

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

// ===============================
// MODAL COMPRA
// ===============================

document.addEventListener('DOMContentLoaded', () => {

    const btnComprar = document.querySelector('.btn-rap');
    const modal = document.getElementById('modal-compra');
    const btnDescargar = document.getElementById('btn-descargar-ticket');

    const numeroEntrada = Math.floor(10000 + Math.random() * 90000); // número aleatorio

    if (btnComprar) {
        btnComprar.addEventListener('click', () => {
            modal.classList.remove('oculto');

            // actualiza el número en el texto del modal
            modal.querySelector('strong').textContent = numeroEntrada;
        });
    }

    if (btnDescargar) {
        btnDescargar.addEventListener('click', () => {

            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            doc.backgroundColor = "#ffcaed"; // fondo claro
            doc.setFontSize(18);
            doc.text("🎤 TICKET DE EVENTO 🎤", 20, 30);

            doc.setFontSize(14);
            doc.text("Compra exitosa", 20, 50);
            doc.text("Número de entrada:", 20, 70);
            doc.text(String(numeroEntrada), 20, 85);

            doc.text("Gracias por apoyar el rap independiente 💜", 20, 115);

            doc.save("ticket_evento.pdf");

            // ⏳ pequeña pausa y redirección al home
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 800);
        });

    }

});

