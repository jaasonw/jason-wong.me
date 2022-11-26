/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azure: "#3A86FF",
        blueviolet: "#8338EC",
        wintersky: "#FF006E",
        orangepantone: "#FB5607",
        amber: "#FFBE0B",
        lightcyan: "#E0FBFC",
        ghostwhite: "#F7F7FF",
      },
      fontFamily: {
        heading: "Montserrat, sans-serif",
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text)-\w*-\d\d\d/,
    },
  ],
  plugins: [],
};
