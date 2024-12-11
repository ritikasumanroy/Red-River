function submitContactForm() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    if (name && email && message) {
        // Simulate form submission
        console.log('Contact Form Submitted:', { name, email, message });
        alert('Thank you for reaching out! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
}
