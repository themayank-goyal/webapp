/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'primary': '#6D2E46',
        'body': '#1E1E1E',
        'darkbg': '#CEBEBE',
        'lightbg': '#E7E6E4'
      },
      fontFamily: {
        'miama': ['Miama', 'cursive'],
        'ooohbaby': ['Kanit', 'cursive'],
        'ubuntu': ['Ubuntu']
      },
      fontSize: {
        'xxs': '0.5rem',
      },
      maxWidth: {
        '100': '36rem',
      }
    },
  },
  plugins: [require("daisyui")],
};
