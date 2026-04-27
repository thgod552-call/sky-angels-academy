document.addEventListener('DOMContentLoaded', function() {
    // Add Social Floating Buttons Early
    const socialFloat = document.createElement('div');
    socialFloat.className = 'social-float';
    socialFloat.innerHTML = `
        <a href="https://wa.me/2348054047729" target="_blank" class="float-btn btn-whatsapp" title="WhatsApp Us">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="https://www.instagram.com/saaiacademy?igsh=MWo1bnBmeHNhNzF0Zg==" target="_blank" class="float-btn btn-instagram" title="Follow us on Instagram">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 1.764.308 2.151.674.386.366.632.764.694 2.151.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.367-.308 1.764-.674 2.151-.366.386-.764.632-2.151.694-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.367-.062-1.764-.308-2.151-.674-.386-.366-.632-.764-.694-2.151-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.85c.062-1.367.308-1.764.674-2.151.366-.386.764-.632 2.151-.694 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-4.78 2.618-4.78 4.78 0 1.28.014 1.688.072 4.947.059 1.281.273 2.158.583 2.959.32.827.747 1.527 1.448 2.228.701.701 1.401 1.128 2.228 1.448.801.31 1.678.524 2.959.583 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.158-.273 2.959-.583.827-.32 1.527-.747 2.228-1.448.701-.701 1.128-1.401 1.448-2.228.31-.801.524-1.678.583-2.959.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-4.78-4.78-4.78-1.28 0-1.688.014-4.947.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://www.facebook.com/share/1LHDe4xFdp/?mibextid=wwXIfr" target="_blank" class="float-btn btn-facebook" title="Find us on Facebook">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
        </a>
    `;
    document.body.appendChild(socialFloat);

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
            if (header && window.scrollY > 50) {
                header.classList.add('scrolled');
            } else if (header) {
                header.classList.remove('scrolled');
            }
        });
    }
});
