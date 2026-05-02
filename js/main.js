// ── GSAP REGISTRATIE ──
gsap.registerPlugin(ScrollTrigger);

// ── NAVIGATIE: scroll state ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── MOBIEL MENU ──
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── HERO TIMELINE ──
const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTL
    .fromTo('.nav-inner',    { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
    .fromTo('.hero-eyebrow', { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, '-=0.4')
    .fromTo('.hero-line',    { y: 44,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.14 }, '-=0.35')
    .fromTo('.hero-sub',     { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, '-=0.35')
    .fromTo('.hero-ctas',    { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
    .fromTo('.hero-visual',  { x: 90,  opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }, 0.35)
    .fromTo('.hero-scroll',  { opacity: 0 },         { opacity: 1, duration: 0.5 }, '-=0.2');

// ── ORB PARALLAX ──
gsap.to('.hero-orb--1', {
    y: -160, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
});
gsap.to('.hero-orb--2', {
    y: -90, x: 50, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 }
});
gsap.to('.hero-orb--3', {
    y: -120, x: -40, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
});

// ── PROBLEEM / OPLOSSING ──
gsap.fromTo('.problem-col--bad',
    { x: -70, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.problem-grid', start: 'top 82%' } }
);
gsap.fromTo('.problem-col--good',
    { x: 70, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.problem-grid', start: 'top 82%' } }
);
gsap.fromTo('.problem-item',
    { y: 18, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.09, ease: 'power2.out',
      scrollTrigger: { trigger: '.problem-grid', start: 'top 75%' } }
);

// ── DIENSTEN ──
gsap.fromTo('.services .section-header',
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.services', start: 'top 82%' } }
);
gsap.fromTo('.service-card',
    { y: 65, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, stagger: 0.18, ease: 'power3.out',
      scrollTrigger: { trigger: '.services-grid', start: 'top 84%' } }
);

// ── WERKWIJZE ──
gsap.fromTo('.process .section-header',
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.process', start: 'top 82%' } }
);
gsap.fromTo('.process-step',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.65, stagger: 0.2, ease: 'power3.out',
      scrollTrigger: { trigger: '.process-steps', start: 'top 82%' } }
);
gsap.fromTo('.step-connector',
    { opacity: 0 },
    { opacity: 1, duration: 0.5, stagger: 0.2, ease: 'power2.out',
      scrollTrigger: { trigger: '.process-steps', start: 'top 75%' } }
);

// ── PORTFOLIO ──
gsap.fromTo('.portfolio .section-header',
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.portfolio', start: 'top 82%' } }
);
gsap.fromTo('.portfolio-card',
    { scale: 0.88, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6,
      stagger: { amount: 0.7, from: 'start' }, ease: 'back.out(1.2)',
      scrollTrigger: { trigger: '.portfolio-grid', start: 'top 84%' } }
);

// ── FAQ ──
gsap.fromTo('.faq .section-header',
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.faq', start: 'top 82%' } }
);
gsap.fromTo('.faq-item',
    { y: 28, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: '.faq-list', start: 'top 84%' } }
);

// ── CTA BANNER ──
gsap.fromTo('.cta-content',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.cta-banner', start: 'top 78%' } }
);
gsap.to('.cta-orb--1', {
    y: -60, ease: 'none',
    scrollTrigger: { trigger: '.cta-banner', start: 'top bottom', end: 'bottom top', scrub: 1 }
});

// ── FAQ ACCORDION ──
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('open');
            i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = nav.offsetHeight + 12;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
