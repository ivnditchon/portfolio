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
            })
        },
    },
    plugins: [],
}