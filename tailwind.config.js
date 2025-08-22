/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        finlandaisfonce: '#501F4F',
        finlandais: '#712F6F',
        penn: '#0B1141',
        turquoise: '#38DEB9',
        turquoise2: '#1ABB96',
        turquoise3: '#0D8C6D',
        yale: '#00386F',
        roseclair: '#F2EAF0',
        roseorchid: '#C07BAF',
      },
      boxShadow: {
        boxShadowTurquoise: '1px 1px 3px rgba(132, 233, 210, 0.7)',
        shadowFinlandais: '0 8px 20px #712F6F55',
      },
    },
  },
  plugins: [],
};
