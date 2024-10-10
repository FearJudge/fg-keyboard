/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Dosis', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        theme: {
          base: "aaaaff",
          accent: "ffff76",
          highlight: "cd66dc",
          text: "ffffff",
          temptext: "cccccc",
          button: "2e2e4f",
          buttonhover: "4e4e6f",
          buttonpress: "eeee64"
        }
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'make-appear' : 'appear 0.35s ease-in',
      },
    }
  },
  plugins: [],
}

