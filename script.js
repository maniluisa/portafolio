document.addEventListener('DOMContentLoaded', function() {
    // Redimensionamiento de encabezado y pie de página (código previo)
    var header = document.getElementById('header');
    var headerResize = document.getElementById('header-resize');
    var headerMinimize = document.getElementById('header-minimize');
    var headerMaximize = document.getElementById('header-maximize');

    var footer = document.getElementById('footer');
    var footerResize = document.getElementById('footer-resize');
    var footerMinimize = document.getElementById('footer-minimize');
    var footerMaximize = document.getElementById('footer-maximize');

    var isHeaderDragging = false;
    var isFooterDragging = false;

    // Manejadores de redimensionamiento de encabezado
    headerResize.addEventListener('mousedown', function(e) {
        isHeaderDragging = true;
        document.body.style.cursor = 'row-resize';
    });

    headerMinimize.addEventListener('click', function() {
        header.style.height = '50px';
    });

    headerMaximize.addEventListener('click', function() {
        header.style.height = '200px';
    });

    // Manejadores de redimensionamiento de pie de página
    footerResize.addEventListener('mousedown', function(e) {
        isFooterDragging = true;
        document.body.style.cursor = 'row-resize';
    });

    footerMinimize.addEventListener('click', function() {
        footer.style.height = '50px';
    });

    footerMaximize.addEventListener('click', function() {
        footer.style.height = '200px';
    });

    // Evento de movimiento del ratón para redimensionar
    document.addEventListener('mousemove', function(e) {
        if (isHeaderDragging) {
            var newHeight = Math.max(50, Math.min(e.clientY, 300));
            header.style.height = newHeight + 'px';
        }

        if (isFooterDragging) {
            var newHeight = Math.max(50, Math.min(window.innerHeight - e.clientY, 300));
            footer.style.height = newHeight + 'px';
        }
    });

    // Detener el redimensionamiento
    document.addEventListener('mouseup', function() {
        isHeaderDragging = false;
        isFooterDragging = false;
        document.body.style.cursor = 'default';
    });

    // Modo Oscuro / Claro
    var themeToggle = document.getElementById('theme-toggle');
    var themeIcon = document.getElementById('theme-icon');

    themeToggle.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
        
        // Cambiar ícono
        if (document.documentElement.classList.contains('dark')) {
            // Ícono de sol para modo oscuro
            themeIcon.innerHTML = `
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
            `;
        } else {
            // Ícono de luna para modo claro
            themeIcon.innerHTML = `
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            `;
        }
    });

    // Manejo de carga de imágenes y texto
    document.querySelectorAll('.content-block').forEach(block => {
        const imageInput = block.querySelector('.image-input');
        const textInput = block.querySelector('.text-input');

        // Crear contenedores para imagen y texto si no existen
        if (!block.querySelector('.image-container')) {
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container', 'mb-2');
            block.insertBefore(imageContainer, imageInput);
        }

        // Manejar carga de imágenes
        imageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            const imageContainer = block.querySelector('.image-container');
            
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    // Limpiar contenedor anterior
                    imageContainer.innerHTML = '';
                    
                    // Crear nueva imagen
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.classList.add('max-w-full', 'max-h-48', 'object-contain');
                    
                    imageContainer.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    });
});