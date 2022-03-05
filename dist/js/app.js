// DOM Elements
const html = document.querySelector('html');
const topBar = document.querySelector('#top_bar');
const topBarMenuIcon = document.querySelector('#topbar_menu_icon');
const topBarDarkmodeIcon = document.querySelector('#topbar_darkmode_icon');
const navDarkModeBtn = document.querySelector('#nav_dark_mode_btn');
const mobileDarkModeBtn = document.querySelector('#mobile_dark_mode_btn');

// Darkmode toggle
const darkModeToggle = () => {
    navDarkModeBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (localStorage.theme === 'dark') {
            html.classList.remove('dark');
            localStorage.removeItem('theme');
            topBarDarkmodeIcon.classList.add('text-gray-900');
            topBarDarkmodeIcon.classList.remove('text-gray-200');
        } else {
            html.classList.add('dark');
            localStorage.theme = 'dark';
            topBarDarkmodeIcon.classList.remove('text-gray-900');
            topBarDarkmodeIcon.classList.add('text-gray-200');
        }
    });

    mobileDarkModeBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (localStorage.theme === 'dark') {
            html.classList.remove('dark');
            localStorage.removeItem('theme');
            topBarDarkmodeIcon.classList.add('text-gray-900');
            topBarDarkmodeIcon.classList.remove('text-gray-200');
        } else {
            html.classList.add('dark');
            localStorage.theme = 'dark';
            topBarDarkmodeIcon.classList.remove('text-gray-900');
            topBarDarkmodeIcon.classList.add('text-gray-200');
        }
    });
}

const darkMode = () => {
    if (localStorage.theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
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