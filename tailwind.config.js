module.exports = {
    content: ["./dist/**/*.{html,js}"],
    darkMode: 'class',
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
                'secondary': '#070606',
                'darkMode-primary': '#1f1f1f',
                'darkMode-secondary': '#030303',
                'darkMode-text': '#575df5'
            },
            fontFamily: {
                'sans': 'Poppins',
                'title': 'Alfa Slab One'
            },
            backgroundImage: theme => ({
                'skills': 'url("../images/skills.jpg")',
                'experience': 'url("../images/experience.jpg")'
            }),
            animation: {
                'dark-mode': 'darkMode 0.4s ease-in-out forwards',
                'skills': 'skills 0.3s linear forwards'
            },
            keyframes: {
                skills: {
                    '0%': {
                        transform: 'scale(1)'
                    },
                    '100%': {
                        transform: 'scale(1.1)'
                    }
                },
                darkMode: {
                    'from': {
                        transform: 'translate(0%, -50%)'
                    },
                    'to': {
                        transform: 'translate(100%, -50%)',
                    }
                }
            }
        },
    },
    plugins: [],
}