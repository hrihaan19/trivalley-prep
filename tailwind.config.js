/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#42C2FF',
        surface: '#16161A',
        card: '#1F1F25',
      },
      fontFamily: {
        syne: ['Outfit', 'sans-serif'],
        dm: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
