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
        darkblue: {
          navbar: "#0E0E38",
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
        lightgrey: {
          5: "#FFFFFF",
          25: "#FAFAFB",
          50: "#F5F6F8",
          100: "#F0F2F4",
          200: "#E1E3E7",
          300: "#D3D5DA",
          400: "#C4C7CD",
          500: "#B5B9C1",
          600: "#A6ABB4",
          700: "#979DA7",
          800: "#888F9A",
          900: "#7A818E",
        },
        darkgrey: {
          5: "#F5F6F8",
          25: "#E1E3E7",
          50: "#D3D5DA",
          100: "#C4C7CD",
          200: "#B5B9C1",
          300: "#A6ABB4",
          400: "#979DA7",
          500: "#888F9A",
          600: "#7A818E",
          700: "#6B737E",
          800: "#5C6571",
          900: "#4D5664",
          1200: "#3C4251",
        },
        coral: {
          5: "#FFECEA",
          25: "#FFCCC8",
          50: "#FFABA7",
          100: "#FF8A85",
          200: "#FF6964",
          300: "#FF4842",
          400: "#FF2720",
          500: "#E61F19",
          600: "#CC1812",
          700: "#B3110C",
          800: "#990A05",
          900: "#800300",
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
