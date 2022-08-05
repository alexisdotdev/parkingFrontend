/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
          'primary': '#02416d',
          'secondary': '#0a5483',
          'terciary': '#066699'
      }) ,
      textColor: {
        'primary': '#02416d',
        'secondary': '#0a5483',
        'terciary': '#066699'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
