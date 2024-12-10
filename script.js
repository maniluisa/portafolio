// script.js
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-contacto');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí podrías agregar la lógica para enviar el formulario
        // Por ejemplo, usando fetch para enviar los datos a un backend
        
        alert('Mensaje enviado. ¡Gracias por contactarme!');
        formulario.reset();
    });

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
