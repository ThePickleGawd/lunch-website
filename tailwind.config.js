/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          extralight: "#C1C8E4",
          light: "#84CEEB",
          DEFAULT: "#5AB9EA",
          dark: "#5680E9",
          extradark: "#8860D0",
        },
      },
    },
  },
  plugins: [],
};
