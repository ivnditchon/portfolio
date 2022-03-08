// DOM Elements
const html = document.querySelector('html');
const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu_btn');
const hideMenuBtn = document.querySelector('#hide_menu_btn');
const menuNav = document.querySelector('#menu_nav');
const menuOverlay = document.querySelector('#menu_overlay');
const menuNavList = document.querySelector('#menu_nav_list');
const mobileDarkModeBtn = document.querySelector('#mobile_dark_mode_btn');
const mobileDarkModeIcon = document.querySelector('#mobile_dark_mode_icon');
const navDarkModeBtn = document.querySelector('#nav_dark_mode_btn');
const navDarkModeIcon = document.querySelector('#nav_dark_mode_icon');
const viewSkillsBtn = document.querySelector('#view_skills_btn');
const hiddenSkills = document.querySelectorAll('#hidden_skill');
const viewProjectsBtn = document.querySelector('#view_projects_btn');
const hiddenProjects = document.querySelectorAll('#hidden_project');
const scrollTopBtn = document.querySelector('#scroll_top_btn');

// Darkmode toggle
const darkModeToggle = () => {
    mobileDarkModeBtn.addEventListener('click', (e) => {
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

    navDarkModeBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (localStorage.theme === 'dark') {
            html.classList.remove('dark');
            localStorage.removeItem('theme');
            navDarkModeIcon.src = './images/moon.svg';

        } else {
            html.classList.add('dark');
            localStorage.theme = 'dark';
            navDarkModeIcon.src = './images/sun.svg';
        }
    });
}

// Show menu
const showMenu = () => {
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (menuNav.classList.contains('-right-full') && menuOverlay.classList.contains('-left-full') && !body.classList.contains('overflow-y-hidden')) {
            menuNav.classList.remove('-right-full');
            menuOverlay.classList.remove('-left-full');
            menuNav.classList.add('right-0');
            menuOverlay.classList.add('left-0');
            body.classList.add('overflow-y-hidden');
        }
    });
}

// Hide menu
const hideMenu = () => {
    hideMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (menuNav.classList.contains('right-0') && menuOverlay.classList.contains('left-0') && body.classList.contains('overflow-y-hidden')) {
            menuNav.classList.remove('right-0');
            menuOverlay.classList.remove('left-0');
            menuNav.classList.add('-right-full');
            menuOverlay.classList.add('-left-full');
            body.classList.remove('overflow-y-hidden');
        }
    })
}

// Menu nav list
const toggleNavList = () => {
    menuNavList.addEventListener('click', (e) => {
        if (menuNav.classList.contains('right-0') && menuOverlay.classList.contains('left-0') && body.classList.contains('overflow-y-hidden')) {
            menuNav.classList.remove('right-0');
            menuOverlay.classList.remove('left-0');
            menuNav.classList.add('-right-full');
            menuOverlay.classList.add('-left-full');
            body.classList.remove('overflow-y-hidden');
        }
    });
}

// Check mobile darkmode theme equals to dark in localstorage if existing
const mobileDarkMode = () => {
    if (localStorage.theme === 'dark') {
        html.classList.add('dark');
        mobileDarkModeIcon.src = './images/sun.svg';
    } else {
        html.classList.remove('dark');
        mobileDarkModeIcon.src = './images/moon.svg';
    }
}

// Check desktop/laptop theme equals to dark localstorage if existing
const desktopDarkMode = () => {
    if (localStorage.theme === 'dark') {
        html.classList.add('dark');
        navDarkModeIcon.src = './images/sun.svg';
    } else {
        html.classList.remove('dark');
        navDarkModeIcon.src = './images/moon.svg';
    }
}


// Show all skills
const showAllSkills = () => {
    viewSkillsBtn.addEventListener('click', (e) => {
        e.preventDefault();

        Array.from(hiddenSkills, (skill) => {
            if (skill.classList.contains('hidden', 'opacity')) {
                skill.classList.remove('hidden', 'opacity-0');
                skill.classList.add('flex');
            } else {
                if (skill.classList.contains('flex')) {
                    skill.classList.remove('flex');
                    skill.classList.add('hidden', 'opacity-0');
                }
            }
        });
    });
}

// Show all projects
const showAllProjects = () => {
    viewProjectsBtn.addEventListener('click', (e) => {
        e.preventDefault();

        Array.from(hiddenProjects, (project) => {
            if (project.classList.contains('hidden', 'opacity-0')) {
                project.classList.remove('hidden', 'opacity-0');
            } else {
                project.classList.add('hidden', 'opacity-0');
            }
        });
    });
}

// Scroll to top 
const scroll = () => {
    document.addEventListener('scroll', () => {
        let scrolled = window.scrollY;

        if (scrolled >= 345) {
            if (scrollTopBtn.classList.contains('opacity-0')) {
                scrollTopBtn.classList.remove('opacity-0');
            }
        } else {
            if (!scrollTopBtn.classList.contains('opacity-0')) {
                scrollTopBtn.classList.add('opacity-0');
            }
        }
    })
}

// Scroll to top 
const scrollToTop = () => {
    scrollTopBtn.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const main = () => {
    darkModeToggle();
    showMenu();
    hideMenu();
    toggleNavList();
    document.addEventListener('DOMContentLoaded', () => {
        mobileDarkMode();
        desktopDarkMode();
    });
    showAllSkills();
    showAllProjects();
    scroll();
    scrollToTop();
}

main();