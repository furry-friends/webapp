/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f8afbb',
        'primary-dark': '#f48fb1',
        boy: '#53a4db',
        girl: '#f179aa',
      },
    },
  },
  plugins: [],
};
