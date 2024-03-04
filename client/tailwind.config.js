/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Italianno: ["Italianno", "cursive"],
        SerifDisplay: ["DM Serif Display", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      phone: "320px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
