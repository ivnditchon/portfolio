// DOM Elements
const html = document.querySelector('html');
const mobileDarkModeBtn = document.querySelector('#mobile_dark_mode_btn');
const mobileDarkModeIcon = document.querySelector('#mobile_dark_mode_icon');
const viewSkillsBtn = document.querySelector('#view_skills_btn');
const hiddenSkills = document.querySelectorAll('#hidden_skill');
const viewProjectsBtn = document.querySelector('#view_projects_btn');
const hiddenProjects = document.querySelectorAll('#hidden_project');

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

// Check darkmode theme in localstorage if existing
const darkMode = () => {
    if (localStorage.theme === 'dark') {
        html.classList.add('dark');
        mobileDarkModeIcon.src = './images/sun.svg';
    } else {
        html.classList.remove('dark');
        mobileDarkModeIcon.src = './images/moon.svg';
    }
}

// Show all skills
const showAllSkills = () => {
    viewSkillsBtn.addEventListener('click', (e) => {
        e.preventDefault();

        Array.from(hiddenSkills, (skill) => {
            if (skill.classList.contains('hidden')) {
                skill.classList.remove('hidden');
                skill.classList.remove('opacity-0');
                skill.classList.add('flex');
            } else {
                if (skill.classList.contains('flex')) {
                    skill.classList.remove('flex');
                    skill.classList.add('hidden');
                    skill.classList.add('opacity-0');
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

const main = () => {
    scroll();
    darkModeToggle();
    document.addEventListener('DOMContentLoaded', () => {
        darkMode();
    });
    showAllSkills();
    showAllProjects();
}

main();