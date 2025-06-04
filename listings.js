// Sample properties data (ideally fetched from a backend)
        const properties = [
            {
                id: 1,
                title: "Luxury Villa in Downtown",
                type: "house",
                location: "Los Angeles, CA",
                bedrooms: 5,
                bathrooms: 4,
                price: 950000,
                imageUrl: "houses/luxury villa.jpg",
                description: "This exquisite luxury villa is nestled in the heart of downtown Los Angeles, offering unparalleled elegance and modern amenities. With spacious interiors, high ceilings, and panoramic city views, it's an ideal urban oasis. Features include a gourmet kitchen, private pool, and smart home technology."
            },
            {
                id: 2,
                title: "Cozy Apartment near Beach",
                type: "apartment",
                location: "Miami, FL",
                bedrooms: 2,
                bathrooms: 2,
                price: 400000,
                imageUrl: "houses/Cozy Apartment near Beach.jpg",
                description: "Enjoy the vibrant Miami lifestyle in this cozy apartment, just steps away from the beach. Perfect for a small family or as a vacation getaway, it offers comfortable living spaces, a modern kitchen, and access to community amenities like a swimming pool and fitness center."
            },
            {
                id: 3,
                title: "Modern Loft in City Center",
                type: "apartment",
                location: "New York, NY",
                bedrooms: 1,
                bathrooms: 1,
                price: 600000,
                imageUrl: "houses/Modern Loft in City Center.jpg",
                description: "Experience urban living at its finest in this stylish modern loft located in the bustling New York City center. Featuring open-concept design, large windows with city views, and contemporary finishes, this loft is perfect for professionals seeking a dynamic lifestyle."
            },
            {
                id: 4,
                title: "Spacious House with Garden",
                type: "house",
                location: "Chicago, IL",
                bedrooms: 4,
                bathrooms: 3,
                price: 750000,
                imageUrl: "houses/Commercial Building for Sale.jpg",
                description: "This spacious house in Chicago boasts a beautiful, expansive garden, perfect for outdoor entertaining and family activities. The interior offers generous living areas, four comfortable bedrooms, and three modern bathrooms, making it an ideal family home."
            },
            {
                id: 5,
                title: "Commercial Building for Sale",
                type: "commercial",
                location: "Houston, TX",
                bedrooms: 0,
                bathrooms: 0,
                price: 1200000,
                imageUrl: "houses/Spacious House with Garden.jpg",
                description: "A prime commercial building located in a high-traffic area of Houston, Texas. This property offers versatile space suitable for various business ventures, with ample parking and excellent visibility. An ideal investment opportunity for entrepreneurs."
            },
            {
                id: 6,
                title: "Luxury Penthouse with Ocean View",
                type: "apartment",
                location: "San Francisco, CA",
                bedrooms: 3,
                bathrooms: 3,
                price: 1500000,
                imageUrl: "houses/Luxury Penthouse with Ocean View.jpg",
                description: "Indulge in breathtaking ocean views from this luxurious penthouse in San Francisco. This exquisite apartment features three spacious bedrooms, three elegant bathrooms, and expansive living areas, all designed to offer the ultimate in high-end coastal living."
            },
            {
                id: 7,
                title: "Charming Cottage in Countryside",
                type: "house",
                location: "Austin, TX",
                bedrooms: 3,
                bathrooms: 2,
                price: 550000,
                imageUrl: "houses/Charming Cottage in Countryside.jpg",
                description: "Escape to this charming countryside cottage in Austin, Texas. With three cozy bedrooms and two well-appointed bathrooms, this home offers a serene retreat from city life. Enjoy the peaceful surroundings and rustic charm of this delightful property."
            },
            {
                id: 8,
                title: "Retail Space in Shopping Mall",
                type: "commercial",
                location: "New York, NY",
                bedrooms: 0,
                bathrooms: 0,
                price: 2000000,
                imageUrl: "houses/Retail Space in Shopping Mall.jpg",
                description: "A fantastic opportunity to own a premium retail space within a bustling shopping mall in New York City. This commercial unit offers high foot traffic, excellent visibility, and a strategic location, making it ideal for a thriving retail business."
            },
            {
                id: 9,
                title: "Family House with Big Yard",
                type: "house",
                location: "Phoenix, AZ",
                bedrooms: 4,
                bathrooms: 2,
                price: 680000,
                imageUrl: "houses/Family House with Big Yard.jpg",
                description: "This wonderful family house in Phoenix, Arizona, comes with a generously sized yard, perfect for children and pets. Featuring four comfortable bedrooms and two bathrooms, it provides ample space for a growing family in a friendly neighborhood."
            },
            {
                id: 10,
                title: "Modern Studio in Downtown",
                type: "apartment",
                location: "Seattle, WA",
                bedrooms: 1,
                bathrooms: 1,
                price: 420000,
                imageUrl: "houses/Elegant Townhouse in City.jpg",
                description: "A sleek and modern studio apartment located in the vibrant downtown Seattle. Ideal for singles or couples, this compact yet functional space offers contemporary design, efficient layouts, and easy access to city amenities and public transport."
            },
            {
                id: 11,
                title: "Industrial Warehouse for Sale",
                type: "commercial",
                location: "Chicago, IL",
                bedrooms: 0,
                bathrooms: 0,
                price: 1800000,
                imageUrl: "houses/Modern Studio in Downtown.jpg",
                description: "A large industrial warehouse available for sale in Chicago, Illinois. This property is perfect for logistics, manufacturing, or storage, offering high ceilings, loading docks, and easy access to major transportation routes. A solid investment for industrial operations."
            },
            {
                id: 12,
                title: "Elegant Townhouse in City",
                type: "house",
                location: "Boston, MA",
                bedrooms: 3,
                bathrooms: 2,
                price: 820000,
                imageUrl: "houses/Industrial Warehouse for Sale.jpg",
                description: "Discover elegance in this charming townhouse located in a desirable Boston neighborhood. With three bedrooms and two bathrooms, it combines classic architectural details with modern comforts. Enjoy city living with a touch of historical charm."
            },
        ];

        const listingsGrid = document.getElementById("listings-grid");
        const searchForm = document.getElementById("search-form");
        const searchQueryInput = document.getElementById("search-query");
        const filterTypeSelect = document.getElementById("filter-type");
        const filterPriceSelect = document.getElementById("filter-price");
        const paginationContainer = document.getElementById("pagination");
        const prevPageButton = document.getElementById("prev-page");
        const nextPageButton = document.getElementById("next-page");
        const pageNumbersContainer = document.getElementById("page-numbers");

        const listingsSection = document.getElementById("listings-section");
        const detailsSection = document.getElementById("details-section");
        const backToListingsButton = document.getElementById('back-to-listings');


        let propertiesPerPage = 6;
        let currentPage = 1;
        let filteredProperties = properties;

        function displayListings(page) {
            listingsGrid.innerHTML = "";
            const startIndex = (page - 1) * propertiesPerPage;
            const endIndex = startIndex + propertiesPerPage;
            const currentPageProperties = filteredProperties.slice(startIndex, endIndex);

            currentPageProperties.forEach((property) => {
                const propertyCard = document.createElement("div");
                propertyCard.classList.add("bg-white", "rounded-lg", "shadow-md", "overflow-hidden", "transition-transform", "duration-300", "hover:shadow-lg", "hover:scale-105");

                propertyCard.innerHTML = `
                    <img src="${property.imageUrl}" alt="${property.title}" class="w-full h-64 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/333333?text=Property+Image';">
                    <div class="p-6">
                        <h2 class="text-xl font-semibold text-gray-800 mb-2">${property.title}</h2>
                        <p class="text-gray-600 mb-2">${property.location}</p>
                        <p class="text-gray-700 mb-2">
                            ${property.bedrooms} Bedrooms / ${property.bathrooms} Bathrooms
                        </p>
                        <p class="text-2xl font-bold text-green-500 mb-4">$${property.price.toLocaleString()}</p>
                        <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md inline-block focus:outline-none focus:ring-2 focus:ring-blue-400 view-details-btn" data-property-id="${property.id}">
                            View Details
                        </a>
                    </div>
                `;

                listingsGrid.appendChild(propertyCard);
            });
        }

        function updatePagination() {
            const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
            pageNumbersContainer.innerHTML = "";

            if (totalPages <= 1) {
                paginationContainer.classList.add('hidden'); // Hide pagination if only one page
                return;
            } else {
                paginationContainer.classList.remove('hidden');
            }

            prevPageButton.disabled = currentPage === 1;
            nextPageButton.disabled = currentPage === totalPages;

            const maxPagesToShow = 5;
            let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
            let endPage = Math.min(totalPages, currentPage + Math.floor(maxPagesToShow / 2));

            if (totalPages <= maxPagesToShow) {
                startPage = 1;
                endPage = totalPages;
            } else if (startPage === 1) {
                endPage = maxPagesToShow;
            } else if (endPage === totalPages) {
                startPage = totalPages - maxPagesToShow + 1;
            }

            for (let i = startPage; i <= endPage; i++) {
                const pageNumberButton = document.createElement("button");
                pageNumberButton.textContent = i;
                pageNumberButton.classList.add("px-3", "py-1", "rounded-md", "focus:outline-none");
                pageNumberButton.classList.add(i === currentPage ? "bg-blue-500" : "bg-gray-200", i === currentPage ? "text-white" : "text-gray-700");
                pageNumberButton.addEventListener("click", () => {
                    currentPage = i;
                    displayListings(currentPage);
                    updatePagination();
                });
                pageNumbersContainer.appendChild(pageNumberButton);
            }
        }

        function filterProperties() {
            const searchQuery = searchQueryInput.value.toLowerCase();
            const selectedType = filterTypeSelect.value;
            const selectedPriceRange = filterPriceSelect.value;

            filteredProperties = properties.filter((property) => {
                const matchesSearch =
                    property.location.toLowerCase().includes(searchQuery) ||
                    property.title.toLowerCase().includes(searchQuery);

                const matchesType =
                    selectedType === "all" || property.type === selectedType;

                const matchesPrice = matchesPriceRange(property.price, selectedPriceRange);

                return matchesSearch && matchesType && matchesPrice;
            });

            currentPage = 1;
            displayListings(currentPage);
            updatePagination();
        }

        function matchesPriceRange(price, range) {
            if (range === "any") return true;
            const [min, max] = range.split("-").map(Number);
            if (range === "1000000+") return price >= 1000000;
            return price >= min && price <= max;
        }

        // Add event listeners for listings page elements
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            filterProperties();
        });
        prevPageButton.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                displayListings(currentPage);
                updatePagination();
            }
        });
        nextPageButton.addEventListener("click", () => {
            const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                displayListings(currentPage);
                updatePagination();
            }
        });

        // Event listener for "View Details" links on the listings page
        listingsGrid.addEventListener('click', (event) => {
            const targetLink = event.target.closest('.view-details-btn');
            if (targetLink) {
                event.preventDefault();
                const propertyId = parseInt(targetLink.getAttribute('data-property-id'));
                showListingDetails(propertyId);
            }
        });

        // Function to display specific listing details
        function showListingDetails(id) {
            const property = properties.find(p => p.id === id);
            if (property) {
                document.getElementById('details-title').textContent = property.title;
                document.getElementById('details-image').src = property.imageUrl;
                document.getElementById('details-image').alt = property.title;
                document.getElementById('details-location').textContent = property.location;
                document.getElementById('details-bedrooms').textContent = property.bedrooms;
                document.getElementById('details-bathrooms').textContent = property.bathrooms;
                document.getElementById('details-price').textContent = property.price.toLocaleString();
                document.getElementById('details-description').textContent = property.description;

                listingsSection.classList.add('hidden'); // Hide listings
                detailsSection.classList.remove('hidden'); // Show details
            }
        }

        // Event listener for "Back to Listings" button on details page
        backToListingsButton.addEventListener('click', () => {
            detailsSection.classList.add('hidden'); // Hide details
            listingsSection.classList.remove('hidden'); // Show listings
        });

        // Initial display of listings when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            displayListings(currentPage);
            updatePagination();
        });