const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    plugins: [
        require('daisyui'),
    ],
};