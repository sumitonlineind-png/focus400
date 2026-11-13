/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F4EF',
        paper: '#FAF9F5',
        ink: { DEFAULT: '#121212', soft: '#2B2B29' },
        line: '#E2E0D8',
        muted: '#6B685F',
        alert: '#B42318',
      },
      fontFamily: {
        display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
