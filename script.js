document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-list li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the mobile menu after clicking a link
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    // Add to cart button functionality (example - no actual cart implementation)
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            alert('Бүтээгдэхүүнийг сагсанд нэмлээ!'); // Product added to cart!
        });
    });

    // Form submission (example - no actual backend)
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Таны мессежийг амжилттай илгээлээ. Бид тантай удахгүй холбогдох болно.'); // Your message has been sent successfully. We will contact you soon.
            this.reset();
        });
    }
});
