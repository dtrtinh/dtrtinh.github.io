const btn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
    btn.style.display = (document.documentElement.scrollTop > 200) ? "block" : "none";
};
function scrollToTop(target = 0, duration = 1000) {
    const start = window.pageYOffset;
    const distance = target - start;
    const startTime = performance.now();

    function animation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, start + distance * progress);

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in-left');
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('show');
    });
}, { threshold: 0.2 });
faders.forEach(el => observer.observe(el));
sliders.forEach(el => observer.observe(el));

// Active menu functionality
const navLinks = document.querySelectorAll('#nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        scrollToTop(document.querySelector(this.getAttribute('href')).offsetTop - 70, 800);
    });
});

function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Initialize Fancybox v4
Fancybox.bind('[data-fancybox]', {
    Carousel: {
        Zoomable: {
        Panzoom: {
            clickAction: "iterateZoom",
            maxScale: 2,
        },
        },
    },
});    