/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'app-green': '#4DAD09',
        'app-gray-inactive': '#676D73'
      },
      screens: {
        'hero-sm': { 'raw': '(max-width: 701px)' },
        'hero-sm-md': { 'raw': '(max-width:calc((1026px + 701px) * 0.5))'},
        'hero-md': { 'raw': '(min-width:701px) and (max-width: 1026px)' },
        'hero-lg': { 'raw': '(min-width:1026px) and (max-width: 1442px)' },
        'hero-xl': { 'raw': '(min-width:1442px)' },
      },
      scale: {
        '-100': '-1'
      },
      keyframes: {
        'topToBottom': {
          '0%, 100%': { opacity: 0 },
          '5%': { opacity: 0, transform: 'translateY(50px)' },
          '9.17%, 21.67%': { opacity: 1, transform: 'translateY(0px)'},
          '25.83%': { opacity: 0, transform: 'translateY(-50px)'},
        }
      }
    },
  },
  plugins: [require("./plugins/animationDelay")],
}
