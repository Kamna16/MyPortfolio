/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        buttons: "#02C8F0",
        darkblue: {
          5: "#E0E2F0",
          25: "#A1A8D2",
          50: "#626EB3",
          100: "#233495",
          200: "#1D2A7D",
          300: "#172065",
          400: "#11174E",
          500: "#0B0D36",
          600: "#05051E",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        
      },
      fontSize: {
        small: '1.25rem', // xl
        medium: '1.5rem', // 2xl
        large: '1.875rem', // 3xl
      },
    },
  },
  plugins: [],
}
