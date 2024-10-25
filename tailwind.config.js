/* eslint-disable prettier/prettier */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        blueC: {
          50: '#F3F5FB',
          100: '#E4E9F6',
          200: '#C9D2EE',
          300: '#A6B5E2',
          400: '#7C92D5',
          500: '#3C5CBB',
          600: '#3753AA',
          700: '#2E468F',
          800: '#263B78',
          900: '#182449',
          950: '#101932',
        },
        orangeC: {
          50: '#FFF7F0',
          100: '#FFE9D8',
          200: '#FFD1AE',
          300: '#FFB078',
          400: '#FF8D42',
          500: '#FF650C',
          600: '#E45A0A',
          700: '#C14D08',
          800: '#9E4006',
          900: '#672B04',
          950: '#411B02',
        },
      },
      fontFamily: {
        Merriweather: ['Merriweather', 'sans-serif'],
        Raleway: ['Raleway', 'serif'],
      },
    },
  },
};
