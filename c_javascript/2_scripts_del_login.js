// redirige al home cuando se hace clic en el logo

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('ContenedorLogo');
    if (logo) {
        logo.addEventListener('click', () => {
            // la ruta puede ajustarse según la ubicación real
            window.location.href = '../index.html';
        });
    }
});