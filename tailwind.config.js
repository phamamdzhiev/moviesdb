/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "0.7rem",
      screens: {
        // sm: '576px',
        // md: '768px',
        // lg: '992px',
        xl: "1480px",
      },
    },
  },
  plugins: [],
};
