const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
    colors: {
      ...colors,
      yellow: {
        50: '#fffefa',
        100: '#fffbf0',
        200: '#fff3cc',
        300: '#ffe89e',
        400: '#ffdf75',
        500: '#ffd138',
        600: '#f0b800',
        700: '#d1a000',
        800: '#a88100',
        900: '#705600',
      },
      black: {
        50: '#111111111',
        100: '#f7f7f7',
        200: '#c7c7c7',
        300: '#969696',
        400: '#636363',
        500: '#333333',
        600: '#2e2e2e',
        700: '#262626',
        800: '#212121',
        900: '#1a1a1a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
