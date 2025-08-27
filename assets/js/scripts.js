function openWarna(namawarna) {
    // Hide all sections
    var sections = document.getElementsByClassName("warna");
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    
    // Remove active class from all buttons (both desktop and mobile)
    var desktopButtons = document.querySelectorAll('.desktop-nav ul li button');
    var mobileButtons = document.querySelectorAll('.dropdown-item');
    
    desktopButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    mobileButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(namawarna).style.display = "block";
    
    // Add active class to clicked button (desktop)
    var clickedButton = document.querySelector(`.desktop-nav button[onclick="openWarna('${namawarna}')"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
    
    // Add active class to corresponding mobile dropdown item
    var mobileButton = document.querySelector(`.dropdown-item[onclick="selectMobileOption('${namawarna}')"]`);
    if (mobileButton) {
        mobileButton.classList.add('active');
    }
    
    // Update dropdown toggle text on mobile
    var dropdownText = document.querySelector('.dropdown-text');
    if (dropdownText) {
        dropdownText.textContent = namawarna;
    }
}

// Mobile dropdown functions
function toggleMobileNav() {
    var dropdown = document.getElementById('mobileDropdown');
    var toggle = document.querySelector('.dropdown-toggle');
    
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        toggle.classList.remove('active');
    } else {
        dropdown.classList.add('show');
        toggle.classList.add('active');
    }
}

function selectMobileOption(option) {
    // Close the dropdown
    var dropdown = document.getElementById('mobileDropdown');
    var toggle = document.querySelector('.dropdown-toggle');
    dropdown.classList.remove('show');
    toggle.classList.remove('active');
    
    // Call the existing function to change the section
    openWarna(option);
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    var mobileNav = document.querySelector('.mobile-nav');
    var dropdown = document.getElementById('mobileDropdown');
    
    if (mobileNav && dropdown && !mobileNav.contains(event.target)) {
        dropdown.classList.remove('show');
        document.querySelector('.dropdown-toggle').classList.remove('active');
    }
});

// Set initial active state for Home button
document.addEventListener('DOMContentLoaded', function() {
    var homeButton = document.querySelector(`.desktop-nav button[onclick="openWarna('Home')"]`);
    if (homeButton) {
        homeButton.classList.add('active');
    }
    
    var mobileHomeButton = document.querySelector(`.dropdown-item[onclick="selectMobileOption('Home')"]`);
    if (mobileHomeButton) {
        mobileHomeButton.classList.add('active');
    }
    
    // Set initial dropdown text
    var dropdownText = document.querySelector('.dropdown-text');
    if (dropdownText) {
        dropdownText.textContent = 'Home';
    }
});

let docTitle = document.title;
window.addEventListener("blur", function () {
    document.title = "Come back :(";
});
window.addEventListener("focus", function () {
    document.title = docTitle;
});
