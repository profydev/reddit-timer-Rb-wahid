/* eslint-disable import/no-extraneous-dependencies */
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      text: '#93918f',
    },
    fontFamily: {
      default: ['Montserrat', 'sans-serif'],
      headline: ['Bitter', 'serif'],
    },
    fontSize: {
      default: ['16px', {
        lineHeight: '1.69rem',
      }],
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
