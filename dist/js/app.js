// DOM Elements
const html = document.querySelector('html');
const mobileDarkModeBtn = document.querySelector('#mobile_dark_mode_btn');
const mobileDarkModeIcon = document.querySelector('#mobile_dark_mode_icon');

// Darkmode toggle
const darkModeToggle = () => {
    mobileDarkModeIcon.addEventListener('click', (e) => {
        e.preventDefault();

        if (localStorage.theme === 'dark') {
            html.classList.remove('dark');
            localStorage.removeItem('theme');
            mobileDarkModeIcon.src = './images/moon.svg';

        } else {
            html.classList.add('dark');
            localStorage.theme = 'dark';
            mobileDarkModeIcon.src = './images/sun.svg';
        }
    });
}

const darkMode = () => {
    if (localStorage.theme === 'dark') {
        html.classList.add('dark');
        mobileDarkModeIcon.src = './images/sun.svg';
    } else {
        html.classList.remove('dark');
        mobileDarkModeIcon.src = './images/moon.svg';
    }
}

const main = () => {
    scroll();
    darkModeToggle();
    document.addEventListener('DOMContentLoaded', () => {
        darkMode();
    })
}

main();