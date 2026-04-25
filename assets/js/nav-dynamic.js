document.addEventListener('DOMContentLoaded', function() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;

    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            headerPlaceholder.innerHTML = data;
            initializeNav();
        })
        .catch(err => console.error('Error loading header:', err));

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('components/footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(err => console.error('Error loading footer:', err));
    }

    function initializeNav() {
        const header = document.getElementById('header');
        const hamburger = document.getElementById('hamburger-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', () => {
                mobileMenu.classList.toggle('open');
                hamburger.classList.toggle('active');
            });
        }

        const currentPath = window.location.pathname;
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (currentPath.includes(href) && href !== 'index.html') {
                link.classList.add('active');
            } else if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
                if (href === 'index.html') link.classList.add('active');
            }
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
