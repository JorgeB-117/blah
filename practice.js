
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const priceDisplay = document.getElementById('priceDisplay');
    const availabilityDisplay = document.getElementById('availabilityDisplay');
    const sizeSelect = document.getElementById('size');
    const purchaseButton = document.getElementById('purchaseButton');
    const addProductForm = document.getElementById('addProductForm');

    // Product information object
    const products = {
        small: { price: 10.00, availability: 'In Stock' },
        medium: { price: 12.00, availability: 'Out of Stock' },
        large: { price: 15.00, availability: 'In Stock' }
    };

    // Function to update product information based on selected size
    function updateProductInfo(size) {
        const product = products[size];
        if (product) {
            // Update price display
            priceDisplay.textContent = `Price: $${product.price.toFixed(2)}`;
            // Update availability display
            availabilityDisplay.textContent = `Availability: ${product.availability}`;
             // Enable or disable purchase button based on availability
            purchaseButton.disabled = product.availability === 'Out of Stock';
        };
    };

// Event listener for size selection change
    sizeSelect.addEventListener('change', function() {
        updateProductInfo(sizeSelect.value);
    });

    // Initialize with the default selected size
    updateProductInfo(sizeSelect.value);

    // Event listener for form submission to add new products
    addProductForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const newSize = document.getElementById('newSize').value;
        const newPrice = parseFloat(document.getElementById('newPrice').value);
        const newAvailability = document.getElementById('newAvailability').value;

        // Validate form inputs
        if (newSize && !isNaN(newPrice) && newAvailability) {
            // Add new product to the products object
            products[newSize] = { price: newPrice, availability: newAvailability };
            alert('New product added successfully!');
        } else {
            alert('Please fill out all fields correctly.');
        }
    });
    
     // Event delegation for dynamically added elements
     document.body.addEventListener('change', function(event) {
        if (event.target && event.target.id === 'size') {
            updateProductInfo(event.target.value);
        }
    });
});
