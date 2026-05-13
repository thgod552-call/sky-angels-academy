document.addEventListener('DOMContentLoaded', function() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;

    fetch('components/header.html')
        .then(r => r.text())
        .then(data => { headerPlaceholder.innerHTML = data; initializeNav(); })
        .catch(err => console.error('Header load error:', err));

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('components/footer.html')
            .then(r => r.text())
            .then(data => { footerPlaceholder.innerHTML = data; })
            .catch(err => console.error('Footer load error:', err));
    }

    // Load social widget
    const sw = document.createElement('script');
    sw.src = 'assets/js/social-widget.js';
    document.body.appendChild(sw);

    // Load AI chat
    const ac = document.createElement('script');
    ac.src = 'assets/js/ai-chat.js';
    document.body.appendChild(ac);

    function initializeNav() {
        const header    = document.getElementById('header');
        const hamburger = document.getElementById('hamburger-btn');
        const mobileMenu= document.getElementById('mobile-menu');
        const navLinks  = document.querySelectorAll('.nav-link');

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

        if (header) {
            window.addEventListener('scroll', () => {
                header.classList.toggle('scrolled', window.scrollY > 50);
            });
        }
    }
});
