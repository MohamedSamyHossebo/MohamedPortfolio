/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#FFFFFF' }, // اللون الأصلي (أبيض)
          '50%': { color: '#3F3FFF' },      // اللون المطلوب
        },
      },
      animation: {
        colorPulse: 'colorChange 2s infinite', // التكرار المستمر كل ثانيتين
      },
    },
  },
  plugins: [],
}

