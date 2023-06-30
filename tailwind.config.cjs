const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'primary': '#FF0000',
        'secondary': '#00FF00',
        'custom': '#0000FF',
        'gray': {
          'custom': '#CCCCCC', // Agrega tu tono de gris personalizado aquí
        },
      },
      margin: {
        'custom-bottom': '0.5rem', // Ajusta el valor según tus preferencias
      },
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
