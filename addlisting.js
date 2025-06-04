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

        // Form submission logic with validation
        const addListingForm = document.getElementById('add-listing-form');

        addListingForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            let isValid = true; // Flag to track form validity

            // Hide all error messages initially
            document.querySelectorAll('.error-message').forEach(errorElement => {
                errorElement.classList.add('hidden');
            });

            // Validate each required field
            const requiredFields = [
                { id: 'title', message: 'Property Title is required.' },
                { id: 'type', message: 'Property Type is required.' },
                { id: 'location', message: 'Location is required.' },
                { id: 'bedrooms', message: 'Bedrooms is required.' },
                { id: 'bathrooms', message: 'Bathrooms is required.' },
                { id: 'price', message: 'Price is required.' },
                { id: 'imageUrl', message: 'Image URL is required.' },
                { id: 'description', message: 'Description is required.' }
            ];

            requiredFields.forEach(field => {
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
                    title: document.getElementById('title').value,
                    type: document.getElementById('type').value,
                    location: document.getElementById('location').value,
                    bedrooms: parseInt(document.getElementById('bedrooms').value),
                    bathrooms: parseFloat(document.getElementById('bathrooms').value),
                    price: parseFloat(document.getElementById('price').value),
                    imageUrl: document.getElementById('imageUrl').value,
                    description: document.getElementById('description').value
                };

                console.log('New Listing Data:', formData);
                // In a real application, you would send this 'formData' to a server
                // e.g., using fetch API:
                /*
                fetch('/api/listings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    // alert('Listing added successfully!'); // Replace with a custom modal
                    // For now, a simple message
                    const successMessage = document.createElement('p');
                    successMessage.textContent = 'Listing added successfully!';
                    successMessage.classList.add('text-green-500', 'text-center', 'mt-4', 'font-bold');
                    addListingForm.parentNode.insertBefore(successMessage, addListingForm.nextSibling);
                    setTimeout(() => successMessage.remove(), 3000); // Remove message after 3 seconds
                    addListingForm.reset(); // Clear the form
                })
                .catch((error) => {
                    console.error('Error:', error);
                    // alert('Error adding listing.'); // Replace with a custom modal
                    const errorMessage = document.createElement('p');
                    errorMessage.textContent = 'Error adding listing. Please try again.';
                    errorMessage.classList.add('error-message', 'text-center', 'mt-4', 'font-bold');
                    addListingForm.parentNode.insertBefore(errorMessage, addListingForm.nextSibling);
                    setTimeout(() => errorMessage.remove(), 3000); // Remove message after 3 seconds
                });
                */
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Listing data logged to console. In a real app, this would be sent to a server.';
                successMessage.classList.add('text-green-500', 'text-center', 'mt-4', 'font-bold');
                addListingForm.parentNode.insertBefore(successMessage, addListingForm.nextSibling);
                setTimeout(() => successMessage.remove(), 5000); // Remove message after 5 seconds
                addListingForm.reset(); // Clear the form after successful submission
            } else {
                // If not valid, scroll to the first error message
                const firstError = document.querySelector('.error-message:not(.hidden)');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });