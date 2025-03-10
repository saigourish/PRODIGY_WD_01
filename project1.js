window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add class when scrolling
    } else {
        navbar.classList.remove('scrolled'); // Remove when at top
    }
});
