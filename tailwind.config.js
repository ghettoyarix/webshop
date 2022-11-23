/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      yellow: '#E6C744',
      white: '#FFFFFF',
      black: 'black',
      grey: '#C2C8DA',
      gold: '#E5C643',
      lightGray: '#E7E6E6',
    },
    fontSize: {
      1: '19pt',
      base: '22pt',
      xl: '22',
      giant: '96pt',
    },
    extend: {},
  },
  plugins: [],
};
