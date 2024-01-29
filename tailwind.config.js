/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'blanc': '#ECFBFF',
        'principal': '#01151E',
        'second': '#013850'
      },

      fontFamily: {
        poppins: ['Poppins']
      },
    },

  },
  plugins: [],
}

