const hamburgerBtn = document.getElementById("hamburger-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const closeMenuBtn = document.getElementById("close-menu-btn");
        const themeToggleBtn = document.getElementById("theme-toggle-btn");
        const themeIcon = document.getElementById("theme-icon");

        let isDarkMode = false;

        hamburgerBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("hidden");
            document.body.classList.add("overflow-hidden");
        });

        closeMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            document.body.classList.remove("overflow-hidden");
        });

        function toggleDarkMode() {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle('dark-mode', isDarkMode);
            localStorage.setItem('darkMode', isDarkMode);

            if (isDarkMode) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            } else {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }

        themeToggleBtn.addEventListener("click", toggleDarkMode);

        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme === 'true') {
            isDarkMode = true;
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }