import './sass/main.scss';

// GSAP ANIMATIONS
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Checks whether the user has reduced motion set.
// If so, the animations will not be displayed.
const initialLoad = () => {
    const elementsToAnimate = document.querySelectorAll('[data-state]');
    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches; 
    if (isReduced) return;

    // data-state="ready" is used in CSS to add pre-animation styles
    // when user has not set prefers-reduced-motion to reduce.
    elementsToAnimate.forEach(element => {
        element.dataset.state = 'ready';
    })
    animate();
}

// Fn to animate elements using gsap that only executes
// when a particular media query matches.
const animate = () => {
    let matchMedia = gsap.matchMedia();
    let mdBreakpoint = "(min-width: 48.0625rem)";
    let lgBreakpoint = "(min-width: 75rem)";

    matchMedia.add(mdBreakpoint, () => {
        // Header title animation
        gsap.to(".header__title--desktop", {
            scrollTrigger: {
                trigger: ".header__title--desktop",
                start: "-100px top",
                scrub: 3,
                markers: false
            },
            y: -50
        });

        // Header image animation
        gsap.to(".header__image", {
            scrollTrigger: {
                trigger: ".header__image",
                start: "50px top",
                scrub: 3,
                markers: false
            },
            y: 50
        });

        // Header content animation
        gsap.to(".header__content", {
            scrollTrigger: {
                trigger: ".header__content",
                start: "-100px top",
                scrub: 3,
                markers: false
            },
            x: 30,
            opacity: 0
        });

        // Kv top content animation
        gsap.to(".kv__content--top", {
            scrollTrigger: {
                trigger: ".kv__content--top",
                start: "150px bottom",
                scrub: 3,
                markers: false
            },
            y: 60,
            opacity: 1
        });

        // Kv image1 animation
        gsap.to(".kv__image-wrapper--1", {
            scrollTrigger: {
                trigger: ".kv__image-wrapper--1",
                start: "150px bottom",
                end: "90% center",
                scrub: 3,
                markers: false
            },
            scale: 1,
            opacity: 1
        });

        // Kv image2 animation
        gsap.to(".kv__image-wrapper--2", {
            scrollTrigger: {
                trigger: ".kv__image-wrapper--2",
                start: "top bottom",
                end: "40% center",
                scrub: 3,
                markers: false
            },
            y: 0,
            opacity: 1
        });

        // Kv image3 animation
        gsap.to(".kv__image-wrapper--3", {
            scrollTrigger: {
                trigger: ".kv__image-wrapper--3",
                start: "top bottom",
                end: "bottom center",
                scrub: 3,
                markers: false
            },
            x: 0,
            opacity: 1
        });

        // Kv bottom content animation
        gsap.to(".kv__content--bottom", {
            scrollTrigger: {
                trigger: ".kv__content--bottom",
                start: "top bottom",
                end: "top center",
                scrub: 3,
                markers: false
            },
            y: 0,
            opacity: 1
        });

        // Footer animation
        gsap.to(".footer", {
            scrollTrigger: {
                trigger: ".footer",
                start: "-200px bottom",
                end: "50px bottom",
                scrub: 2,
                markers: false
            },
            y: 0
        });
    });

    matchMedia.add(lgBreakpoint, () => {
        // Kv top content animation
        gsap.to(".kv__content--top", {
            scrollTrigger: {
                trigger: ".kv__content--top",
                start: "150px bottom",
                scrub: 3,
                markers: false
            },
            y: 0,
            opacity: 1
        });
    });
}

initialLoad();