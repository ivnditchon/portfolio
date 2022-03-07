// DOM Elements
const html = document.querySelector('html');
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
const scrollToTop = () => {
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

    scrollTopBtn.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const main = () => {
    scroll();
    darkModeToggle();
    document.addEventListener('DOMContentLoaded', () => {
        mobileDarkMode();
        desktopDarkMode();
    });
    showAllSkills();
    showAllProjects();
    scrollToTop();
}

main();