/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],
        body: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#edd9bc',
          400: '#d5b78f',
          500: '#c09870',
          600: '#a67c57',
        },
        cream: {
          50:  '#fdf9f3',
          100: '#f9f0e1',
          200: '#f0dfc0',
        },
        earth: {
          700: '#1a3d78',
          800: '#122f5d',
          900: '#0a1e3d',
        },
        olive: {
          600: '#6b7c4e',
          700: '#4f5d38',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.7s ease forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      }
    },
  },
  plugins: [],
}
