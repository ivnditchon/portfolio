module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
        screens: {
            'xs': '400px',
            // => @media (min-width: 400px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                'primary': '#1f217b',
                'secondary': '#070606'
            },
            fontFamily: {
                'sans': 'Poppins',
            },
            backgroundImage: theme => ({
                'skills': 'url("../images/skills.jpg")',
                'experience': 'url("../images/experience.jpg")'
            }),
            animation: {
                'skills-graph-html': 'graphHTML 2s ease-in-out 0.5s forwards',
                'skills-graph-css': 'graphCSS 2s ease-in-out 1s forwards',
                'skills-graph-javascript': 'graphJavascript 3s ease-in-out 1.5s forwards',
                'skills-graph-react': 'graphReact 2s ease-in-out 2s forwards',
                'skills-graph-figma': 'graphFigma 2s ease-in-out 2.5s forwards',
                'skills-graph-adobe': 'graphAdobe 2s ease-in-out 3s forwards'
            },
            keyframes: {
                graphHTML: {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '90%'
                    }
                },
                graphCSS: {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '80%'
                    }
                },
                graphJavascript: {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '60%'
                    }
                },
                graphReact: {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '20%'
                    }
                },
                graphFigma: {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '30%'
                    }
                },
                graphAdobe: {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '30%'
                    }
                }
            }
        },
    },
    plugins: [],
}