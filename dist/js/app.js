// DOM Elements
const topBar = document.querySelector('#top_bar');
const topBarMenuIcon = document.querySelector('#topbar_menu_icon');
const topBarDarkmodeIcon = document.querySelector('#topbar_darkmode_icon');
const htmlBarGraph = document.querySelector('#html_bar_graph');
const cssBarGraph = document.querySelector('#css_bar_graph');
const javascriptBarGraph = document.querySelector('#javascript_bar_graph');
const reactBarGraph = document.querySelector('#react_bar_graph');
const figmaBarGraph = document.querySelector('#figma_bar_graph');
const adobeBarGraph = document.querySelector('#adobe_bar_graph');

// Scroll event
const scroll = () => {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Remove color icons and background of topbar when scroll y is less than 100 
        if (scrolled >= 100) {
            if (!topBar.classList.contains('bg-primary') && topBarDarkmodeIcon.classList.contains('text-gray-900') && topBarMenuIcon.classList.contains('text-gray-900')) {
                topBarDarkmodeIcon.classList.remove('text-gray-900');
                topBarMenuIcon.classList.remove('text-gray-900');
                topBar.classList.add('bg-primary'); // Update background color
                // Update color icons 
                topBarDarkmodeIcon.classList.add('text-gray-200');
                topBarMenuIcon.classList.add('text-gray-200');
            }
            // Remove color icons and background of topbar when scroll y is less than 100 
        } else {
            if (topBar.classList.contains('bg-primary') && topBarDarkmodeIcon.classList.contains('text-gray-200') && topBarMenuIcon.classList.contains('text-gray-200')) {
                topBar.classList.remove('bg-primary');
                topBarDarkmodeIcon.classList.remove('text-gray-200');
                topBarMenuIcon.classList.remove('text-gray-200');
                topBarDarkmodeIcon.classList.add('text-gray-900');
                topBarMenuIcon.classList.add('text-gray-900');
            }
        }

        if (scrolled >= 915) {
            // Animate bar graph 
            htmlBarGraph.classList.add('animate-skills-graph-html'); // width to 90%
            cssBarGraph.classList.add('animate-skills-graph-css'); // width to 80%
            javascriptBarGraph.classList.add('animate-skills-graph-javascript'); // width to 60%
            reactBarGraph.classList.add('animate-skills-graph-javascript'); // width to 20%
            figmaBarGraph.classList.add('animate-skills-graph-figma'); // width to 30%
            adobeBarGraph.classList.add('animate-skills-graph-adobe'); // width to 30%
        }
    });
}

const main = () => {
    scroll();
}

main();