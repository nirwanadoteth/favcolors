function openWarna(namawarna) {
    // Hide all sections
    var sections = document.getElementsByClassName("warna");
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    
    // Remove active class from all buttons
    var buttons = document.querySelectorAll('nav ul li button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(namawarna).style.display = "block";
    
    // Add active class to clicked button
    var clickedButton = document.querySelector(`button[onclick="openWarna('${namawarna}')"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

// Set initial active state for Home button
document.addEventListener('DOMContentLoaded', function() {
    var homeButton = document.querySelector(`button[onclick="openWarna('Home')"]`);
    if (homeButton) {
        homeButton.classList.add('active');
    }
});

let docTitle = document.title;
window.addEventListener("blur", function () {
    document.title = "Come back :(";
});
window.addEventListener("focus", function () {
    document.title = docTitle;
});
