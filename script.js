
const countries = [
    {
        name: "Russia",
        universities: "40+ Universities",
        duration: "6 Years",
        language: "English Medium",
        landmark: "Saint Basil's Cathedral"
    },
    {
        name: "Uzbekistan",
        universities: "15+ Universities",
        duration: "6 Years",
        language: "English Medium",
        landmark: "Registan"
    },
    {
        name: "Kazakhstan",
        universities: "12+ Universities",
        duration: "5.5 Years",
        language: "English Medium",
        landmark: "Bayterek Tower"
    },
    {
        name: "Philippines",
        universities: "20+ Universities",
        duration: "5.5 Years",
        language: "English Medium",
        landmark: "Rice Terraces"
    },
    {
        name: "Georgia",
        universities: "10+ Universities",
        duration: "6 Years",
        language: "English Medium",
        landmark: "Tbilisi"
    },
    {
        name: "Kyrgyzstan",
        universities: "8+ Universities",
        duration: "5.5 Years",
        language: "English Medium",
        landmark: "Ala-Too Square"
    },
    {
        name: "Egypt",
        universities: "15+ Universities",
        duration: "6 Years",
        language: "English Medium",
        landmark: "Pyramids"
    }
];

// Generate country cards
function generateCountryCards() {
    const countryGrid = document.querySelector('.country-grid');
    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'country-card';
        card.innerHTML = `
            <h3>${country.name}</h3>
            <ul>
                <li>${country.universities}</li>
                <li>Duration: ${country.duration}</li>
                <li>${country.language}</li>
                <li>Landmark: ${country.landmark}</li>
            </ul>
        `;
        countryGrid.appendChild(card);
    });
}

// Validation functions
function validateName(name) {
    return name.length >= 2 ? '' : 'Name must be at least 2 characters';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Enter a Valid email address';
}

function validatePhone(phone) {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(phone) ? '' : 'Enter as valid phone number';
}

function validateCountry(country) {
    return country ? '' : 'Please select a country';
}

// Show error message
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorSpan = field.nextElementSibling;
    errorSpan.textContent = message;

    if (message) {
        field.classList.add('error');
        errorSpan.style.display = 'block';
    } else {
        field.classList.remove('error');
        errorSpan.style.display = 'none';
    }
}

// Add blur event listeners
document.addEventListener('DOMContentLoaded', function() {
    generateCountryCards();

    // Add blur event listeners for real-time validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const countrySelect = document.getElementById('country');

    nameInput.addEventListener('blur', () => {
        const error = validateName(nameInput.value);
        showError('name', error);
    });

    emailInput.addEventListener('blur', () => {
        const error = validateEmail(emailInput.value);
        showError('email', error);
    });

    phoneInput.addEventListener('blur', () => {
        const error = validatePhone(phoneInput.value);
        showError('phone', error);
    });

    countrySelect.addEventListener('blur', () => {
        const error = validateCountry(countrySelect.value);
        showError('country', error);
    });
});

// Form validation and submission
function handleFormSubmit(event) {
    //event.preventDefault();
    alert("Thank you! we'll contact you shortly.");
}

// Smooth scroll
function scrollToLeadForm() {
    document.getElementById('lead-form').scrollIntoView({ 
        behavior: 'smooth' 
    });
}