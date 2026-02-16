/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          sunshine: '#FFD700',
          sky: '#87CEEB',
          peach: '#FFDAB9',
          lavender: '#E6E6FA',
          mint: '#98FF98',
        },
        fontFamily: {
          display: ['"Baloo 2"', 'cursive'],
          body: ['"Nunito"', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }
