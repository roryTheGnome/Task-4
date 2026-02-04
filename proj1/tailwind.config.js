/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    darkMode: 'class', // or false / 'media'
    theme: {
        extend: {},
    },
    plugins: [
        require("tailwindcss-animate")
    ],
}
