const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
      },
      fontFamily: {
        'sans': ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
