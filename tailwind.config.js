/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        robotoflex: ['"Roboto Flex"', 'sans-serif'],
      },
      colors: {
        violetIT: {
          light: '#a73ca3ff', // version claire
          DEFAULT: '#712F6F', // couleur principale
          dark: '#4D204C', // version plus foncée
        },
        blueDarkIT: {
          light: '#111d75ff',
          DEFAULT: '#0B1141',
          dark: '#03061fff',
        },
        blueIT: {
          light: '#225B99',
          DEFAULT: '#00386F',
          dark: '#002147',
        },
        cyanIT: {
          light: '#02f8f8ff',
          DEFAULT: '#00B5B8',
          dark: '#018688ff',
        },
        greenIT: {
          light: '#59fddaff',
          DEFAULT: '#38DEB9',
          dark: '#1fb896ff',
        },
      },
    },
  },
  plugins: [],
};
