/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',      
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        youngSerif: ['Young Serif', 'serif']
      },
      colors: {
        stone: {
          100: 'hsl(30, 54%, 90%)',
          150: 'hsl(30, 18%, 87%)',
          600: 'hsl(30, 10%, 34%)',
          900: 'hsl(24, 5%, 18%)'
        },
        brown: {
          800: 'hsl(14, 45%, 36%)'
        },
        rose: {
          50: 'hsl(330, 100%, 98%)',
          800: 'hsl(332, 51%, 32%)'
        }
      }
    }
  },
  plugins: [],
}