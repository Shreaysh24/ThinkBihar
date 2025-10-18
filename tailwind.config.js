/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        noto: ['"Noto Serif Devanagari"', 'serif'],
      },
      colors: {
        primary: '#1e40af',
        secondary: '#059669',
        accent: '#0ea5e9',
      },
    },
  },
  plugins: [],
}