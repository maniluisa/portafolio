// script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const formulario = document.getElementById('form-contacto');

//     formulario.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         // Aquí podrías agregar la lógica para enviar el formulario
//         // Por ejemplo, usando fetch para enviar los datos a un backend
        
//         alert('Mensaje enviado. ¡Gracias por contactarme!');
//         formulario.reset();
//     });

//     // Smooth scrolling para enlaces internos
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();

//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // Capturar datos del formulario
//     const nombre = e.target.querySelector('input[type="text"]').value;
//     const email = e.target.querySelector('input[type="email"]').value;
//     const mensaje = e.target.querySelector('textarea').value;

//     // Aquí necesitarías un servicio o backend para enviar el correo
//     // Este código por sí solo no funciona
//     fetch('/enviar-correo', {
//         method: 'POST',
//         body: JSON.stringify({ nombre, email, mensaje })
//     })
//     .then(respuesta => {
//         alert('Mensaje enviado');
//         formulario.reset();
//     })
//     .catch(error => {
//         alert('Error al enviar el mensaje');
//     });
// });
