document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.9)';
        }
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.02)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });

    const yearMatch = window.location.href.match(/[?&]year=(\d{4})/);
    if (yearMatch) {
        document.querySelectorAll('.milestone .date').forEach(date => {
            const currentYear = parseInt(yearMatch[1]);
            date.textContent = date.textContent.replace('2026', String(currentYear));
        });
    }

    console.log('%c OmniNode Collective ', 'background: #00ff88; color: #0a0a0a; font-weight: bold; padding: 4px 8px;');
    console.log('%c Every heartbeat is a signal worth protecting. ', 'color: #666;');
});