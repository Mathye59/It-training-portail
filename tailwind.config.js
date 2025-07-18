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
        violetIT: '#712F6F',
        blueDarkIT: '#0B1141',
        blueIT: '#00386F',
        cyanIT: '#00B5B8',
        greenIT: '#38DEB9',
      },
    },
  },
  plugins: [],
};
