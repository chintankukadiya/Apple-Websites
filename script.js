// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Back-to-top button functionality
window.onscroll = function() {toggleBackToTop()};

function toggleBackToTop() {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Scroll Animations
window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll('.fade-in');

    elements.forEach(function(element) {
        let position = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 150) {
            element.classList.add('visible');
        }
    });
});
