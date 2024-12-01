/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        gray: "#193740",
        lightgreen: "#9BF272",
        darkgreen: "#7ABF5A",
        lightgray: "#BAC8D9",
      },
      backgroundColor: {
        gray: "#193940",
        lightgreen: "#9BF272",
        darkgreen: "#7ABF5A",
        lightgray: "#BAC8D9",
      },
    },
  },
  plugins: [],
};
