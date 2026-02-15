(function () {
    document.documentElement.classList.add('js-enhanced');
    const motionLite = isMotionLiteDevice();
    document.body.classList.toggle('mobile-motion-lite', motionLite);

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const backToTop = document.getElementById('backToTop');
    const scrollProgress = document.getElementById('scrollProgress');
    initCursorEffects(motionLite);
    initHeroRotator();
    initRandomQuote();
    initScrollMotion(backToTop, scrollProgress, motionLite);
    initScrollFadeIn(motionLite);

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => navLinks.classList.remove('open'));
        });
    }

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

})();

function initScrollFadeIn(motionLite) {
    const items = [...document.querySelectorAll('.reveal')];
    if (!items.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || motionLite) {
        items.forEach((item) => item.style.setProperty('--fade-progress', '1'));
        return;
    }

    let ticking = false;

    const update = () => {
        const viewport = window.innerHeight;
        const start = viewport * 0.95;
        const end = viewport * 0.28;
        const atPageBottom = window.scrollY + viewport >= document.documentElement.scrollHeight - 3;

        items.forEach((item) => {
            const rect = item.getBoundingClientRect();
            let progress = (start - rect.top) / (start - end);
            progress = Math.max(0, Math.min(1, progress));

            if (atPageBottom && rect.top < viewport && rect.bottom > 0) {
                progress = 1;
            }

            item.style.setProperty('--fade-progress', progress.toFixed(3));
        });

        ticking = false;
    };

    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
}

function initScrollMotion(backToTop, scrollProgress, motionLite) {
    const root = document.documentElement;
    let ticking = false;

    if (motionLite) {
        root.style.setProperty('--parallax-shift', '0px');
        root.style.setProperty('--parallax-video', '0px');
        root.style.setProperty('--parallax-orb-a', '0px');
        root.style.setProperty('--parallax-orb-b', '0px');
    }

    const update = () => {
        const y = window.scrollY || 0;
        const maxScrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, y / maxScrollable));

        if (backToTop) {
            if (y > 360) backToTop.classList.add('visible');
            else backToTop.classList.remove('visible');
        }

        if (scrollProgress) {
            scrollProgress.style.transform = `scaleX(${progress})`;
        }

        if (!motionLite) {
            root.style.setProperty('--parallax-shift', `${Math.max(-90, y * -0.08)}px`);
            root.style.setProperty('--parallax-video', `${Math.max(-160, y * -0.12)}px`);
            root.style.setProperty('--parallax-orb-a', `${Math.max(-120, y * -0.06)}px`);
            root.style.setProperty('--parallax-orb-b', `${Math.max(-200, y * -0.14)}px`);
        }
        root.style.setProperty('--scroll-depth', progress.toFixed(3));
        ticking = false;
    };

    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
}

function initHeroRotator() {
    const target = document.getElementById('heroWord');
    if (!target) return;

    const words = [
        'HTB Walkthroughs',
        'CTF Writeups',
        'Malware Notes',
        'Blue Team Mindset',
        'Network Security'
    ];

    let index = 0;
    setInterval(() => {
        index = (index + 1) % words.length;
        target.classList.add('is-switching');
        setTimeout(() => {
            target.textContent = words[index];
            target.classList.remove('is-switching');
        }, 180);
    }, 2600);
}

function initRandomQuote() {
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    if (!quoteText || !quoteAuthor) return;

    const quotes = [
        { text: 'The signal is the truth. The noise is what distracts us from the truth.', author: 'Nate Silver' },
        { text: 'Security is always excessive until it is not enough.', author: 'Robbie Sinclair' },
        { text: 'If you know the enemy and know yourself, you need not fear the result of a hundred battles.', author: 'Sun Tzu' },
        { text: 'The quieter you become, the more you are able to hear.', author: 'Rumi' },
        { text: 'In God we trust. All others must bring data.', author: 'W. Edwards Deming' },
        { text: 'An ounce of prevention is worth a pound of cure.', author: 'Benjamin Franklin' }
    ];

    const choice = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = `"${choice.text}"`;
    quoteAuthor.textContent = choice.author;
}

function initCursorEffects(motionLite) {
    if (motionLite || window.matchMedia('(pointer: coarse), (hover: none)').matches) return;

    const ring = document.getElementById('cursorRing');
    const dot = document.getElementById('cursorDot');
    if (!ring || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const animate = () => {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        rafId = requestAnimationFrame(animate);
    };

    document.body.classList.add('cursor-active');
    rafId = requestAnimationFrame(animate);

    window.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    document.addEventListener('mouseover', (event) => {
        if (event.target.closest('a, button, input, select, textarea, .writeup-card, .gallery-item')) {
            document.body.classList.add('cursor-hover');
        }
    });

    document.addEventListener('mouseout', (event) => {
        if (event.target.closest('a, button, input, select, textarea, .writeup-card, .gallery-item')) {
            document.body.classList.remove('cursor-hover');
        }
    });

    window.addEventListener('mousedown', () => document.body.classList.add('cursor-down'));
    window.addEventListener('mouseup', () => document.body.classList.remove('cursor-down'));
    window.addEventListener('blur', () => {
        document.body.classList.remove('cursor-hover', 'cursor-down');
    });
}

function isMotionLiteDevice() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobileViewport = window.innerWidth <= 900;
    const coarseTouch = window.matchMedia('(pointer: coarse) and (hover: none)').matches;
    return reducedMotion || mobileViewport || coarseTouch;
}
