import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});