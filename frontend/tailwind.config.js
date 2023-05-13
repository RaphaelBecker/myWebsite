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
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        "bounce-short": "ping 1s ease-in-out 5",
      },
    },
  },
  plugins: [],
};
