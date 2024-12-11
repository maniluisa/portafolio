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
