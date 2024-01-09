/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      keyframes: { circle: { to: { 'offset-distance': '100%' } } },
      animation: {
        'spin-slow': 'circle 5s linear infinite',
        'spin-fast': 'circle 3s linear infinite',
      },
    },
  },

  plugins: ['prettier-plugin-tailwindcss'],
};
