/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',      
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      colors: {
        yellow: '#F4D04E',
        gray: {
          950: '#111111',
          500: '#6B6B6B'
        }
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 100%) 8px 8px',
        'animate': 'rgba(0, 0, 0, 100%) 16px 16px'
      },
    },
  },
  plugins: [],
}