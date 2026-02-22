/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        arena: {
          black: '#0a0a0a',
          dark: '#111111',
          gray: '#1a1a1a',
          yellow: '#fbbf24',
          'yellow-dark': '#d97706',
          red: '#dc2626',
          'red-dark': '#b91c1c',
        },
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};