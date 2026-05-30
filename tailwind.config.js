/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': ({ opacityValue }) => opacityValue !== undefined ? `rgba(var(--color-body-rgb), ${opacityValue})` : `rgb(var(--color-body-rgb))`,
        'selected-text': ({ opacityValue }) => opacityValue !== undefined ? `rgba(var(--color-selected-text-rgb), ${opacityValue})` : `rgb(var(--color-selected-text-rgb))`,
        'theme': ({ opacityValue }) => opacityValue !== undefined ? `rgba(var(--color-theme-rgb), ${opacityValue})` : `rgb(var(--color-theme-rgb))`,
        'theme-hover': ({ opacityValue }) => opacityValue !== undefined ? `rgba(var(--color-theme-hover-rgb), ${opacityValue})` : `rgb(var(--color-theme-hover-rgb))`,
        'nav': ({ opacityValue }) => opacityValue !== undefined ? `rgba(var(--color-nav-rgb), ${opacityValue})` : `rgb(var(--color-nav-rgb))`,
        'secondary': ({ opacityValue }) => opacityValue !== undefined ? `rgba(var(--color-secondary-rgb), ${opacityValue})` : `rgb(var(--color-secondary-rgb))`,
        'badge': ({ opacityValue }) => opacityValue !== undefined ? `rgba(var(--color-badge-rgb), ${opacityValue})` : `rgb(var(--color-badge-rgb))`,
        'input-border': ({ opacityValue }) => opacityValue !== undefined ? `rgba(var(--color-input-border-rgb), ${opacityValue})` : `rgb(var(--color-input-border-rgb))`,
        'input': ({ opacityValue }) => opacityValue !== undefined ? `rgba(var(--color-input-rgb), ${opacityValue})` : `rgb(var(--color-input-rgb))`
      },
      boxShadow: {
        'glow': '0 0 20px rgba(var(--color-theme-rgb), 0.4)',
        'glow-lg': '0 0 40px rgba(var(--color-theme-rgb), 0.6)',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: 'var(--color-text-primary)' }, // اللون الأصلي (أبيض)
          '50%': { color: 'var(--color-theme)' },      // اللون المطلوب
        },
      },
      animation: {
        colorPulse: 'colorChange 2s infinite', // التكرار المستمر كل ثانيتين
      },
    },
  },
  plugins: [],
}

