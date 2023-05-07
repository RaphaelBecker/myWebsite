/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "spring-green": "#73F1CE",
      },
      scale: {
        500: "5",
      },
    },
  },
  plugins: [],
};
