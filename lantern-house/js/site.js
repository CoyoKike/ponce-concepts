/* Lantern House extras on top of the Tandem engine: forms rows slide in like the ledger. */
(function () {
  if (!window.gsap || !window.ScrollTrigger || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.from('.form-list li', { x: -60, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.06,
    scrollTrigger: { trigger: '.form-list', start: 'top 85%' } });
  gsap.from('.forms .ledger-note', { y: 30, opacity: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.forms', start: 'top 78%' } });
  gsap.from(['.give-lede', '.wish'], { y: 30, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.1,
    scrollTrigger: { trigger: '.give', start: 'top 70%' } });
})();
