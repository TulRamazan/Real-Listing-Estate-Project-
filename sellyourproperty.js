const hamburgerBtn = document.getElementById("hamburger-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const closeMenuBtn = document.getElementById("close-menu-btn");
        const themeToggleBtn = document.getElementById("theme-toggle-btn");
        const themeIcon = document.getElementById("theme-icon");

        let isDarkMode = false;

        // Function to toggle dark mode
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

        // Event listener for theme toggle button
        themeToggleBtn.addEventListener("click", toggleDarkMode);

        // Check for saved theme preference on load
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme === 'true') {
            isDarkMode = true;
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }

        // Event listeners for mobile menu
        hamburgerBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("hidden");
            document.body.classList.add("overflow-hidden"); // Prevent scrolling when menu is open
        });

        closeMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            document.body.classList.remove("overflow-hidden"); // Re-enable scrolling
        });

        // Form submission logic with validation for Sell Property Form
        const sellPropertyForm = document.getElementById('sell-property-form');

        if (sellPropertyForm) {
            sellPropertyForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevent default form submission

                let isValid = true; // Flag to track form validity

                // Hide all error messages initially for sell property form
                document.querySelectorAll('#sell-property-form .error-message').forEach(errorElement => {
                    errorElement.classList.add('hidden');
                });

                // Validate each required field for sell property form
                const requiredSellPropertyFields = [
                    { id: 'seller-name', message: 'Your Name is required.' },
                    { id: 'seller-email', message: 'Your Email is required.' },
                    { id: 'property-address', message: 'Property Address is required.' },
                    { id: 'property-type', message: 'Property Type is required.' },
                    { id: 'property-details', message: 'Additional Property Details are required.' }
                ];

                requiredSellPropertyFields.forEach(field => {
                    const inputElement = document.getElementById(field.id);
                    const errorElement = document.getElementById(`${field.id}-error`);

                    if (!inputElement.value.trim()) { // Check if value is empty or just whitespace
                        errorElement.textContent = field.message;
                        errorElement.classList.remove('hidden');
                        isValid = false;
                    }
                });

                if (isValid) {
                    const formData = {
                        sellerName: document.getElementById('seller-name').value,
                        sellerEmail: document.getElementById('seller-email').value,
                        sellerPhone: document.getElementById('seller-phone').value,
                        propertyAddress: document.getElementById('property-address').value,
                        propertyType: document.getElementById('property-type').value,
                        desiredPrice: document.getElementById('desired-price').value,
                        propertyDetails: document.getElementById('property-details').value
                    };

                    console.log('Sell Property Form Data:', formData);
                    const successMessage = document.createElement('p');
                    successMessage.textContent = 'Your property details have been submitted successfully!';
                    successMessage.classList.add('text-green-500', 'text-center', 'mt-4', 'font-bold');
                    sellPropertyForm.parentNode.insertBefore(successMessage, sellPropertyForm.nextSibling);
                    setTimeout(() => successMessage.remove(), 5000); // Remove message after 5 seconds
                    sellPropertyForm.reset(); // Clear the form after successful submission
                } else {
                    // If not valid, scroll to the first error message
                    const firstError = document.querySelector('#sell-property-form .error-message:not(.hidden)');
                    if (firstError) {
                        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            });
        }