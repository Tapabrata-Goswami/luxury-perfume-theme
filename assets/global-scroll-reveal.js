document.addEventListener('DOMContentLoaded', function () {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  var excludedClasses = ['image-with-text'];

  document.querySelectorAll('.shopify-section > *').forEach(function (el) {
    if (el.closest('header, footer')) return;
    if (excludedClasses.some(function (className) { return el.classList.contains(className); })) return;

    gsap.from(el, {
      opacity: 0,
      y: 60,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      },
    });
  });
});
