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
    spacing: {
      6: '30px',
      5: '26px',
      20: '80px',
      19: '55px',
      7: '32px',
      8: '39px',
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
