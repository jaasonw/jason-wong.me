/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
        sans: ["var(--font-inter)"],
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text)-(blue|sky|green|yellow|orange|red|gray)-(200|700)/,
    },
  ],
  plugins: [],
};
