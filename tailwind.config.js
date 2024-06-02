/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-gris-suave': '#ddd',
        'app-rojiso': '#efefef',
      },
    },
  },
  plugins: [],
};
