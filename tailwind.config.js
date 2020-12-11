const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['Circular Std Bold', 'Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        orange: colors.orange,
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: ['@tailwindcss/forms'],
}
