/**
 * Shared scroll-reveal module.
 *
 * Mirrors the behaviour used on the homepage: elements matching the default
 * selector list start with `.reveal` (opacity 0 + slight upward offset) and
 * are promoted to `.revealed` when they enter the viewport.
 *
 * Call `initReveal()` from page-specific renderers after injecting dynamic
 * content so that newly created cards are also observed.
 */
(function () {
    'use strict';

    const DEFAULT_SELECTORS = [
        '.hero-content',
        '.discover-hero',
        '.resources-hero',
        '.section-header',
        '.stat',
        '.cta-card',
        '.featured-banner',
        '.content-header',
        '.breadcrumb',
        '.book-detail',
        '.sidebar',
        '.support-cta',
        '.collection-card',
        '.domain-card',
        '.book-card',
        '.resource-card',
        '.faq-item',
    ];

    const OBSERVER_OPTIONS = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
    };

    let observer = null;

    function getObserver() {
        if (!observer) {
            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            }, OBSERVER_OPTIONS);
        }
        return observer;
    }

    /**
     * Apply the reveal effect to a set of elements.
     * @param {string|string[]} selectors - CSS selector(s) to observe.
     */
    function initReveal(selectors = DEFAULT_SELECTORS) {
        const selectorString = Array.isArray(selectors) ? selectors.join(',') : selectors;
        const elements = document.querySelectorAll(selectorString);
        const obs = getObserver();

        elements.forEach((el, index) => {
            // Skip elements that are already set up so repeated calls (e.g.
            // after re-rendering a list) do not reset already-visible items.
            if (el.classList.contains('reveal')) return;

            el.classList.add('reveal');
            el.style.setProperty('--index', index);
            obs.observe(el);
        });
    }

    // Expose globally so page scripts can re-initialise after dynamic updates.
    window.initReveal = initReveal;

    // Auto-initialise once the DOM is ready for static pages.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initReveal);
    } else {
        initReveal();
    }
})();
