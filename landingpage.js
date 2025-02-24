// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formStatus = document.getElementById("formStatus");

    if (name && email && message) {
        formStatus.textContent = "Message Sent Successfully!";
        formStatus.style.color = "green";
        this.reset();
    } else {
        formStatus.textContent = "Please fill out all fields.";
        formStatus.style.color = "red";
    }
});
